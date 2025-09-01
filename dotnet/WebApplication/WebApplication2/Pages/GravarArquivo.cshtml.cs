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

        public void OnPost() {
            if (!ModelState.IsValid) {
                return;
            }
            var fileName = "arquivo100.txt";
            var caminho = "wwwroot/files/" + fileName;
            System.IO.File.WriteAllText(caminho, Input.Conteudo);
            //FilePath = "/files/" + fileName;
        }

        public class InputModel {

            [Required]
            public string Conteudo { get; set; }
        }
    }
}
