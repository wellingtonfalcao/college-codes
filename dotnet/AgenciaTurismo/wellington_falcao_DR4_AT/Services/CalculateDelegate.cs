namespace AgenciaTurismo.Services
{
    public delegate decimal CalculateDelegate(decimal preco);

    public static class DiscountCalculator
    {
        public static decimal Apply10PercentDiscount(decimal preco)
        {
            return preco * 0.9m;
        }
    }
}
