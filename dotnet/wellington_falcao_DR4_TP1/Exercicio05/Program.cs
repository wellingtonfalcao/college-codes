using System;
using System.Threading;

namespace Exercicio05
{
    class Program
    {
        static void Main()
        {
            var downloadManager = new DownloadManager();

            downloadManager.DownloadCompleted += OnDownloadCompleted;
            downloadManager.StartDownload("tp1-wellington-falcao-dr4.pdf", 5); 
        }
        private static void OnDownloadCompleted(string fileName)
        {
            Console.WriteLine($"\nDownload concluido! O '{fileName}' está pronto para uso!");
        }
    }

    public class DownloadManager
    {
        public event Action<string> DownloadCompleted;

        public void StartDownload(string filename, int tempoEmSegundos)
        {
            Console.Write($"Iniciando download do arquivo: {filename}");

            for (int i = 0; i < tempoEmSegundos; i++)
            {
                Console.Write(".");
                Thread.Sleep(1000); 
            }

            Console.WriteLine($"\n\nVerificado integridade do arquivo: '{filename}'...");
            Thread.Sleep(2000);

            DownloadCompleted?.Invoke(filename);
        }
    }
}
