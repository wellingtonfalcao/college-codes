from pytubefix import YouTube
import os
import subprocess
import re

def sanitize_filename(name: str) -> str:
    """Remove caracteres inválidos para nomes de arquivos no Windows/Linux/Mac."""
    return re.sub(r'[\\/*?:"<>|]', "_", name)

def baixar_video(url, caminho="./"):
    try:
        yt = YouTube(url)
        print(f"\n➡️ Baixando: {yt.title}")

        # Melhor vídeo (DASH, sem áudio)
        video_stream = (
            yt.streams.filter(adaptive=True, file_extension="mp4", only_video=True)
            .order_by("resolution")
            .desc()
            .first()
        )

        # Melhor áudio
        audio_stream = (
            yt.streams.filter(adaptive=True, only_audio=True)
            .order_by("abr")
            .desc()
            .first()
        )

        # Caminhos temporários
        video_path = video_stream.download(output_path=caminho, filename="temp_video.mp4")
        audio_path = audio_stream.download(output_path=caminho, filename="temp_audio.mp4")

        # Nome final sanitizado
        safe_title = sanitize_filename(yt.title.replace(" ", "_"))
        output_file = os.path.join(caminho, safe_title + ".mp4")

        # Junta com ffmpeg via subprocess
        subprocess.run(
            [
                "ffmpeg",
                "-y",
                "-i", video_path,
                "-i", audio_path,
                "-c", "copy",
                output_file,
            ],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.STDOUT,
        )

        # Remove temporários
        os.remove(video_path)
        os.remove(audio_path)

        print(f"✅ Download concluído em alta qualidade: {output_file}")

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
