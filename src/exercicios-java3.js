class Casa {
    public String endereco;
    public double preco;
    public String tipo;
    public double area;

    // Construtor padrão (vazio)
    public Casa() {}

    // Construtor completo
    public Casa(String endereco, double preco, String tipo, double area) {
    this.endereco = endereco;
    this.preco = preco;
    this.tipo = tipo;
    this.area = area;
}
}

public class Exercocio3 {
    public static void main(String[] args) {
    Casa casa1 = new Casa(); // Construtor padrão
    Casa casa2 = new Casa("Rua A, 123", 450000.0, "Sobrado", 120.0); // Construtor preenchido

    System.out.println("Casa 1 instanciada via construtor padrão.");
    System.out.println("Casa 2 no endereço: " + casa2.endereco);
}
}