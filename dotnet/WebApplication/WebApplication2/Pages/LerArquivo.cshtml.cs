using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication2.Pages
{
    public class LerArquivoModel : PageModel
    {
        public List<string?> Arquivos { get; set; } = new();
        public void OnGet() {
            string dir = "wwwroot/files";
            if (Directory.Exists(dir)) {
                Arquivos = Directory.GetFiles(dir).
                    Select(Path.GetFileName).ToList();
            }
        }
    }
}
