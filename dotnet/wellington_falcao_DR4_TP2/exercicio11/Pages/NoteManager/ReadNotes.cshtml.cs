using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace exercicio11.Pages.NoteManager
{
    public class ReadNotesModel : PageModel
    {
        public List<string> NoteFiles { get; set; }
        public string SelectedContent { get; set; }

        [BindProperty(SupportsGet = true)]
        public string SelectedFile { get; set; }

        public void OnGet()
        {
            var folderPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "files");

            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            NoteFiles = new List<string>(Directory.GetFiles(folderPath, "*.txt"));

            // Só exibimos o nome do arquivo
            for (int i = 0; i < NoteFiles.Count; i++)
            {
                NoteFiles[i] = Path.GetFileName(NoteFiles[i]);
            }

            if (!string.IsNullOrEmpty(SelectedFile))
            {
                var filePath = Path.Combine(folderPath, SelectedFile);
                if (System.IO.File.Exists(filePath))
                {
                    SelectedContent = System.IO.File.ReadAllText(filePath);
                }
            }
        }
    }
}
