using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Pages
{
    public class GravarArquivoModel : PageModel
    {
        [BindProperty]
        public InputModel Input { get; set; }
        public string FilePath { get; set; }
        public void OnPost()
        {
            if (!ModelState.IsValid) return;

            // Define o nome do arquivo e o caminho onde será salvo
            var fileName = "arquivo.txt";
            var caminho = "wwwroot/files/" + fileName;

            //Função que grava o conteúdo no arquivo
            System.IO.File.WriteAllText(caminho, Input.Conteudo);
        }

        public class InputModel
        {
            [Required]
            public string Conteudo { get; set; }
        }
    }
}
