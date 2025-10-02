namespace AgenciaTurismo.Services
{
    public static class ReservaCalculator
    {
        public static Func<int, decimal, decimal> CalcularValorTotal =
            (quantidadeParticipantes, precoPacote) => quantidadeParticipantes * precoPacote;
    }
}
