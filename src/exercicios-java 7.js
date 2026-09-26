abstract class FormaGeometrica {
    public abstract double calcularArea();
    public abstract double calcularPerimetro();
}

class Quadrado extends FormaGeometrica {
    private double lado;

    public Quadrado(double lado) {
    this.lado = lado;
}

@Override
public double calcularArea() {
    return lado * lado;
}

@Override
public double calcularPerimetro() {
    return 4 * lado;
}
}

class Triangulo extends FormaGeometrica {
    private double base, altura, ladoA, ladoB, ladoC;

    public Triangulo(double base, double altura, double ladoA, double ladoB, double ladoC) {
    this.base = base;
    this.altura = altura;
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
}

@Override
public double calcularArea() {
    return (base * altura) / 2;
}

@Override
public double calcularPerimetro() {
    return ladoA + ladoB + ladoC;
}
}

class Circulo extends FormaGeometrica {
    private double raio;

    public Circulo(double raio) {
    this.raio = raio;
}

@Override
public double calcularArea() {
    return Math.PI * raio * raio;
}

@Override
public double calcularPerimetro() {
    return 2 * Math.PI * raio;
}
}

public class Exercocio7 {
    public static void main(String[] args) {
    FormaGeometrica q = new Quadrado(4);
    FormaGeometrica t = new Triangulo(3, 4, 3, 4, 5);
    FormaGeometrica c = new Circulo(5);

    System.out.println("Quadrado - Área: " + q.calcularArea() + " | Perímetro: " + q.calcularPerimetro());
    System.out.println("Triângulo - Área: " + t.calcularArea() + " | Perímetro: " + t.calcularPerimetro());
    System.out.println("Círculo - Área: " + c.calcularArea() + " | Perímetro: " + c.calcularPerimetro());
}
}