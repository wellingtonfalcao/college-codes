# 🧠 Fine-Tuning LoRA do TinyLlama com dados de grupo WhatsApp

## 1️⃣ Ambiente

```bash
python -m venv venv
source venv/bin/activate  # ou venv\Scripts\activate no Windows
pip install --upgrade pip
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
pip install transformers datasets peft accelerate bitsandbytes


Para converter dados:

python convert_whatsapp.py grupo.txt dataset.jsonl


Certificar-se antes com este comando

pip install torch transformers datasets peft accelerate bitsandbytes



Para treinar

python train_lora_tinyllama.py