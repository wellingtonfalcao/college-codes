import importlib.util
import subprocess
import sys

# API com serviços de IA Generativa via https://openrouter.ai/

# --- Verificar se o pacote requests está instalado ---
package_name = "requests"
if importlib.util.find_spec(package_name) is None:
    print(f"[INFO] Pacote '{package_name}' não encontrado. Instalando...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", package_name])
    print(f"[INFO] Pacote '{package_name}' instalado com sucesso!")

import requests  # Importa após garantir que está instalado

# --- Configuração da API ---
API_KEY = "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"
url = "https://openrouter.ai/api/v1/chat/completions"
headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# --- Função principal ---
def conversar(comando):
    data = {
        "model": "gpt-4o-mini",
        "messages": [
            {"role": "user", "content": comando}
        ]
    }

    response = requests.post(url, headers=headers, json=data)
    if response.status_code == 200:
        resp_json = response.json()
        return resp_json['choices'][0]['message']['content']
    else:
        return f"Erro {response.status_code}: {response.text}"

# --- Loop principal ---
print("Chatbot IA iniciado! Digite 'sair' para encerrar.")

while True:
    user_input = input("Você: ")
    if user_input.lower() == "sair":
        break
    resposta = conversar(user_input)
    print("IA:", resposta)
