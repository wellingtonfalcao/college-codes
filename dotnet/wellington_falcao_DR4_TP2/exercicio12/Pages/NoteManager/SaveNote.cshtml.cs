using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;

namespace exercicio12.Pages.NoteManager
{
    public class SaveNoteModel : PageModel
    {
        [BindProperty]
        public InputModel Input { get; set; }

        public string FileName { get; set; }

        public class InputModel
        {
            [Required(ErrorMessage = "O conteúdo é obrigatório.")]
            [MinLength(1, ErrorMessage = "O conteúdo não pode estar vazio.")]
            public string Content { get; set; }
        }
        public void OnPost()
        {
            if (!ModelState.IsValid)
            {
                return;
            }

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            FileName = $"note-{timestamp}.txt";

            var folderPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "files");
            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            var filePath = Path.Combine(folderPath, FileName);
            System.IO.File.WriteAllText(filePath, Input.Content);
        }
    }
}
