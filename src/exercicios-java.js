class Casa {
    public double preco;
    public double area;
}

public class Exercocio1 {
    public static void main(String[] args) {
    Casa minhaCasa = new Casa();
    minhaCasa.preco = 300000.0;
    minhaCasa.area = 75.0;

    double valorMetroQuadrado = minhaCasa.preco / minhaCasa.area;

    System.out.println("Valor do metro quadrado: R$ " + valorMetroQuadrado);
}
}