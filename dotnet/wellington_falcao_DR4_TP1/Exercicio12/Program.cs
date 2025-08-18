using Exercicio12.Pages;
using Exercicio12.Pages.Models;

namespace Exercicio12
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddRazorPages();

            var app = builder.Build();
            AddEventModel.OnEventCreated += (Event ev) =>
            {
                Console.WriteLine($"[LOG] Novo evento criado: {ev.Titulo} em {ev.Local} na data {ev.Data}");
            };
            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Error");
            }
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapRazorPages();

            app.Run();
        }
    }
}
