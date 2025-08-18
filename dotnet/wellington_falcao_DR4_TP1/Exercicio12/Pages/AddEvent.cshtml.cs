using Exercicio12.Pages.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;

namespace Exercicio12.Pages
{
    public class AddEventModel : PageModel
    {
        // Delegate para registrar o evento criado
        public static event Action<Event> OnEventCreated;

        [BindProperty]
        public Event NovoEvento { get; set; }

        public bool EventoCriado { get; set; } = false;

        public void OnGet()
        {
        }

        public void OnPost()
        {
            if (ModelState.IsValid)
            {
                EventoCriado = true;

                // Dispara delegate
                OnEventCreated?.Invoke(NovoEvento);
            }
        }
    }
}
