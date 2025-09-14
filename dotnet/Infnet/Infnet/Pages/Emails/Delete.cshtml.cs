using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Infnet.Data;
using Infnet.Models;

namespace Infnet.Pages.Emails
{
    public class DeleteModel : PageModel
    {
        private readonly Infnet.Data.InfnetDbContext _context;

        public DeleteModel(Infnet.Data.InfnetDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Email Email { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var email = await _context.Emails.FirstOrDefaultAsync(m => m.Id == id);

            if (email == null)
            {
                return NotFound();
            }
            else
            {
                Email = email;
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var email = await _context.Emails.FindAsync(id);
            if (email != null)
            {
                Email = email;
                _context.Emails.Remove(Email);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
