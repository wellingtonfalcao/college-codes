using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication2.Pages
{
    public class LerArquivoModel : PageModel
    {
        public List<string?> Arquivos { get; set; } = new();
        public void OnGet(){
            string caminho = "wwwroot/files/";
            if(Directory.Exists(caminho))
            {
                Arquivos = Directory.GetFiles(caminho)
                    .Select(Path.GetFileName).ToList();
            }
          
        }
    }
}
