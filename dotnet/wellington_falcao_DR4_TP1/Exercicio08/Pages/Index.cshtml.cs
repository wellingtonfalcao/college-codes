using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;

namespace Exercicio08.Pages
{
    public class IndexModel : PageModel
    {
        public List<Produto> Produtos { get; set; }

        public void OnGet()
        {
            Produtos = new List<Produto>
            {
                new Produto { Nome = "Notebook", Preco = 3500.00M },
                new Produto { Nome = "Mouse Gamer", Preco = 150.00M },
                new Produto { Nome = "Monitor 24''", Preco = 900.00M }
            };
        }
    }

    public class Produto
    {
        public string Nome { get; set; }
        public decimal Preco { get; set; }
    }
}