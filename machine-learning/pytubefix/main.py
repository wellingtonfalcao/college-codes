from pytubefix import YouTube

def baixar_video(url, caminho="./"):
    try:
        yt = YouTube(url)
        print(f"\n➡️ Baixando: {yt.title}")

        # Pega a melhor stream (vídeo + áudio)
        stream = yt.streams.get_highest_resolution()
        stream.download(output_path=caminho)

        print("✅ Download concluído!")
    except Exception as e:
        print(f"❌ Erro com {url}: {e}")

if __name__ == "__main__":
    print("Cole os links do YouTube (um por linha).")
    print("Quando terminar, pressione ENTER em branco.\n")

    links = []
    while True:
        link = input("URL: ").strip()
        if not link:  # enter vazio = parar
            break
        links.append(link)

    pasta = input("\nDigite o caminho da pasta (ou deixe vazio para atual): ") or "./"

    print(f"\n📥 Iniciando downloads ({len(links)} vídeos)...\n")

    for i, link in enumerate(links, start=1):
        print(f"=== [{i}/{len(links)}] ===")
        baixar_video(link, pasta)

    print("\n🎉 Todos os downloads finalizados!")
