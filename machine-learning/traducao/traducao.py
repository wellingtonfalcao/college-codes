from transformers import pipeline,GPT2LMHeadModel,GPT2Tokenizer
import torch
gpu=torch.cuda.is_available()
def traduzir(texto_ingles):
  if gpu:
    translator=pipeline("translation_en_to_fr",device=0)
  else:
    translator=pipeline("translation_en_to_fr")
  traducao=translator(texto_ingles)
  return traducao[0]['translation_text']

def analisar_sentimento(texto):
  classifier=pipeline("sentiment-analysis")
  resultado=classifier(texto)
  return resultado[0]

def gerar_texto(texto_inicial):
  model=GPT2LMHeadModel.from_pretrained("gpt2")
  tokenizer=GPT2Tokenizer.from_pretrained("gpt2")
  input=tokenizer.encode(texto_inicial, return_tensors="pt")
  outputs=model.generate(input, max_length=100, num_return_sequences=1)
  texto_gerado=tokenizer.decode(outputs[0])
  return texto_gerado

texto="Hello, how are you?"
traducao=traduzir(texto)
print('en->fr',traducao)

texto_sentimento = "I don't like ride a bike"
sentimento=analisar_sentimento(texto_sentimento)
print(f"Analise Sentimento:  {sentimento}")

texto_inicial = "Once upon a time, a man with a dream, to be a great superheroe"
texto_gerado = gerar_texto(texto_inicial)
print(texto_gerado)