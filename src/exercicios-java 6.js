class CalculadoraFinanceira {
    // 2 parâmetros: valor total e % de desconto
    public void calcularDesconto(double valorTotal, double percentualDesconto) {
    double valorFinal = valorTotal - (valorTotal * (percentualDesconto / 100));
    System.out.println("Valor final com desconto: R$ " + valorFinal);
}

// 3 parâmetros: valor total, % de desconto e parcelas
public void calcularDesconto(double valorTotal, double percentualDesconto, int parcelas) {
    double valorFinal = valorTotal - (valorTotal * (percentualDesconto / 100));
    double valorParcela = valorFinal / parcelas;
    System.out.println("Valor final com desconto: R$ " + valorFinal);
    System.out.println("Valor de cada parcela (" + parcelas + "x): R$ " + valorParcela);
}
}

public class Exercocio6 {
    public static void main(String[] args) {
    CalculadoraFinanceira calc = new CalculadoraFinanceira();
    calc.calcularDesconto(1000.0, 10.0);
    System.out.println("---");
    calc.calcularDesconto(1000.0, 10.0, 5);
}
}