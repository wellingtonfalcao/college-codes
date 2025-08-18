using System;
using System.Threading;

namespace Exercicio07
{
    class Program
    {
        static void Main()
        {
            var downloadManager = new DownloadManager();

            downloadManager.StartDownload("tp1-wellington-falcao-dr4.pdf", 5);
        }

    }

    public class DownloadManager
    {
        public event Action<string> Logger;

        public event Action<string> DownloadCompleted;

        public void StartDownload(string filename, int tempoEmSegundos)
        {
            StartDownloadMessage(filename);
            DownloadSimulator(tempoEmSegundos);
            VerifyIntegrity(filename);
            DownloadFinished(filename);
        }

        private void StartDownloadMessage(string filename)
        {
            Logger?.Invoke($"Iniciando download do arquivo: {filename}");
            Console.Write($"Iniciando download do arquivo: {filename}");
        }

        private void DownloadSimulator(int tempoEmSegundos)
        {
            for (int i = 0; i < tempoEmSegundos; i++)
            {
                Console.Write(".");
                Thread.Sleep(1000);
            }

            Logger?.Invoke($"Download em andamento ({tempoEmSegundos}s).");
        }

        private void VerifyIntegrity(string filename)
        {
            Console.WriteLine($"\n\nVerificado integridade do arquivo: '{filename}'...");
            Thread.Sleep(2000);
        }

        private void DownloadFinished(string filename)
        {
            Logger?.Invoke($"Download concluído para o arquivo: {filename}");
            DownloadCompleted?.Invoke(filename);
        }
    }
}
