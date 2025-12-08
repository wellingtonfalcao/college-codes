# train_lora_tinyllama_logging.py
import torch
from transformers import AutoTokenizer, AutoModelForCausalLM, Trainer, TrainingArguments
from datasets import load_dataset
from peft import LoraConfig, get_peft_model, TaskType

# -----------------------------
# Configurações principais
# -----------------------------
MODEL_NAME = "TinyLlama/TinyLlama-1.1B-Chat-v1.0"
DATA_PATH = "dataset.jsonl"
BATCH_SIZE = 2
EPOCHS = 3
MAX_LENGTH = 512
LOGGING_STEPS = 50  # mostrar perda a cada 50 batches

# -----------------------------
# Carregar tokenizer e modelo
# -----------------------------
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)

if tokenizer.pad_token is None:
    tokenizer.pad_token = tokenizer.eos_token

model = AutoModelForCausalLM.from_pretrained(
    MODEL_NAME,
    torch_dtype=torch.float16,
    device_map="auto"
)

# -----------------------------
# Configurar LoRA
# -----------------------------
lora_config = LoraConfig(
    task_type=TaskType.CAUSAL_LM,
    r=8,
    lora_alpha=16,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05,
    bias="none",
)

model = get_peft_model(model, lora_config)
model.print_trainable_parameters()

# -----------------------------
# Carregar dataset
# -----------------------------
dataset = load_dataset("json", data_files=DATA_PATH, split="train")

# -----------------------------
# Tokenização
# -----------------------------
def tokenize_function(example):
    inputs = example["input"]
    outputs = example["output"]
    # Hugging Face com batched=True passa listas
    texts = [inp + "\n" + out for inp, out in zip(inputs, outputs)]
    tokenized = tokenizer(
        texts,
        truncation=True,
        max_length=MAX_LENGTH,
        padding="max_length"
    )
    tokenized["labels"] = tokenized["input_ids"].copy()
    return tokenized

tokenized = dataset.map(tokenize_function, batched=True, remove_columns=dataset.column_names)

# -----------------------------
# Argumentos de treino
# -----------------------------
training_args = TrainingArguments(
    output_dir="./lora_tinyllama_whatsapp",
    per_device_train_batch_size=BATCH_SIZE,
    num_train_epochs=EPOCHS,
    save_strategy="epoch",
    logging_steps=LOGGING_STEPS,
    learning_rate=2e-4,
    fp16=True,
    optim="paged_adamw_32bit",
    save_total_limit=2,
    report_to="none",
    remove_unused_columns=False,
)

# -----------------------------
# Treinador
# -----------------------------
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized,
    tokenizer=tokenizer,
)

# -----------------------------
# Treinamento com logs
# -----------------------------
print("Iniciando treinamento...")
trainer.train()
print("Treinamento finalizado!")

# -----------------------------
# Salvar modelo LoRA
# -----------------------------
model.save_pretrained("./lora_tinyllama_whatsapp")
tokenizer.save_pretrained("./lora_tinyllama_whatsapp")
print("Modelo salvo com sucesso!")
