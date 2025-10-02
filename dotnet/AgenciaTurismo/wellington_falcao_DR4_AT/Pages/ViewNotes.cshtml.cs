using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AgenciaTurismo.Pages
{
    public class ViewNotesModel : PageModel
    {
        private readonly string notesFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "files");

        [BindProperty]
        public string NoteContent { get; set; }

        public List<string> Files { get; set; } = new List<string>();

        [BindProperty(SupportsGet = true)]
        public string FileName { get; set; }

        public string SelectedContent { get; set; }
        public string SelectedFileName { get; set; }

        public void OnGet()
        {
            LoadFiles();

            if (!string.IsNullOrEmpty(FileName))
            {
                var filePath = Path.Combine(notesFolder, FileName);
                if (System.IO.File.Exists(filePath))
                {
                    SelectedContent = System.IO.File.ReadAllText(filePath);
                    SelectedFileName = FileName;
                }
            }
        }

        public IActionResult OnPost()
        {
            if (!Directory.Exists(notesFolder))
                Directory.CreateDirectory(notesFolder);

            var fileName = $"note_{DateTime.Now:yyyyMMdd_HHmmss}.txt";
            var filePath = Path.Combine(notesFolder, fileName);

            System.IO.File.WriteAllText(filePath, NoteContent);

            return RedirectToPage(); // Atualiza a página e mostra a lista atualizada
        }

        private void LoadFiles()
        {
            if (!Directory.Exists(notesFolder))
            {
                Files = new List<string>();
                return;
            }

            Files = Directory.GetFiles(notesFolder)
                             .Select(f => Path.GetFileName(f))
                             .OrderByDescending(f => f)
                             .ToList();
        }
    }
}
