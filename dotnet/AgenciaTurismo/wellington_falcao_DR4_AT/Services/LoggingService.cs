namespace AgenciaTurismo.Services
{
    public static class LoggingService
    {
        public static Action<string> LogAction = LogToConsole;

        private static readonly List<string> memoryLogs = new List<string>();

        public static void LogToConsole(string message)
        {
            Console.WriteLine($"[CONSOLE] {DateTime.Now}: {message}");
        }

        public static void LogToFile(string message)
        {
            Console.WriteLine($"[FILE] {DateTime.Now}: {message}");
        }

        public static void LogToMemory(string message)
        {
            memoryLogs.Add($"{DateTime.Now}: {message}");
            Console.WriteLine($"[MEMORY] Log adicionado: {message}");
        }

        public static List<string> GetMemoryLogs()
        {
            return memoryLogs;
        }

        public static void ConfigureMulticastLogging()
        {
            LogAction = LogToConsole;
            LogAction += LogToFile;
            LogAction += LogToMemory;
        }
    }
}
