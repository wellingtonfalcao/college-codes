using AgenciaTurismo.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using wellington_falcao_DR4_AT.Data;
using wellington_falcao_DR4_AT.Models;

namespace wellington_falcao_DR4_AT
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Banco de Dados
            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
            builder.Services.AddDbContext<AgenciaViagemDbContext>(options =>
                options.UseSqlServer(connectionString));
            builder.Services.AddDatabaseDeveloperPageExceptionFilter();

            // Identity
            builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddEntityFrameworkStores<AgenciaViagemDbContext>();
            builder.Services.AddRazorPages();

            // Requer autenticacao para todas as paginas
            builder.Services.AddRazorPages(options =>
            {
                var policy = new AuthorizationPolicyBuilder()
                                 .RequireAuthenticatedUser()
                                 .Build();
                options.Conventions.AuthorizeFolder("/");
            });


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseMigrationsEndPoint();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapRazorPages();

            app.Run();
        }
        // Metodo para configurar o alerta de capacidade
        public static void ConfigureReservaCapacidadeAlert()
        {
            Reserva.CapacidadeAlcancada += (msg, capacidade) =>
            {
                Console.WriteLine($"ALERTA DE CAPACIDADE: {msg}");
                Console.WriteLine($"Capacidade máxima: {capacidade}");
            };
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            LoggingService.ConfigureMulticastLogging();
            ConfigureReservaCapacidadeAlert();
        }

    }
}
