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
    public class DetailsModel : PageModel
    {
        private readonly Infnet.Data.InfnetDbContext _context;

        public DetailsModel(Infnet.Data.InfnetDbContext context)
        {
            _context = context;
        }

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
    }
}
