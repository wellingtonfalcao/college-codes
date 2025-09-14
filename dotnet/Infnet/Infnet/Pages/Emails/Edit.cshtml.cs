using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Infnet.Data;
using Infnet.Models;

namespace Infnet.Pages.Emails
{
    public class EditModel : PageModel
    {
        private readonly Infnet.Data.InfnetDbContext _context;

        public EditModel(Infnet.Data.InfnetDbContext context)
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

            var email =  await _context.Emails.FirstOrDefaultAsync(m => m.Id == id);
            if (email == null)
            {
                return NotFound();
            }
            Email = email;
           ViewData["AlunoId"] = new SelectList(_context.Alunos, "Id", "Nome");
            return Page();
        }

        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more information, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(Email).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmailExists(Email.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");
        }

        private bool EmailExists(int id)
        {
            return _context.Emails.Any(e => e.Id == id);
        }
    }
}
