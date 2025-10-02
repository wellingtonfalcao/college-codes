using Microsoft.AspNetCore.Mvc;
using wellington_falcao_DR4_AT.Models;

namespace AgenciaTurismo.Controllers
{
    public class ClienteController : Controller
    {
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Cliente cliente)
        {
            if (ModelState.IsValid)
            {
                return RedirectToAction("Index");
            }

            return View(cliente);
        }
    }
}
