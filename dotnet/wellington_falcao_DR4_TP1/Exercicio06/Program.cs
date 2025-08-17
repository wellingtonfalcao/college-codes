using System;
using System.IO;

namespace Exercicio06
{
    class Program
    {
        static void Main()
        {
            var logger = new Logger();
            Action<string> logHandler = null;

            logHandler += logger.LogToConsole;
            logHandler += logger.LogToFile;
            logHandler += logger.LogToDatabase;

            Console.Write("Sistema de Log com Multicast Delegate\n");
            Console.WriteLine("Caso queira encerrar o programa digite 'sair'");

            while (true)
            {
                Console.Write("\nDigite a mensagem de log: ");
                string message = Console.ReadLine();

                if (message.ToLower() == "sair")
                    break;

                logHandler?.Invoke(message);
                Console.WriteLine($"\nLog registrado com sucesso!");
                Console.WriteLine($"\n--------------------------------------------------------------------------");
            }
        }
    }

    public class Logger
    {
        public void LogToConsole(string message)
        {
            Console.WriteLine($"\n[CONSOLE] {DateTime.Now}: {message}");
        }

        public void LogToFile(string message)
        {
            string logPath = "log_da_aplicacao.log";
            File.AppendAllText(logPath, $"[FILE] {DateTime.Now}: {message}\n");
            Console.WriteLine($"\n[FILE] Mensagem registrada no arquivo:\n{Path.GetFullPath(logPath)}");
        }

        public void LogToDatabase(string message)
        {
            Console.WriteLine($"\n[DATABASE] {DateTime.Now}: {message} (simulado)");
        }

    }
}