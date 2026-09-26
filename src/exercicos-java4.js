class Tabuada {
    public void calcular(int numero) {
    System.out.println("Tabuada do " + numero + ":");
    for (int i = 1; i <= 10; i++) {
    System.out.println(numero + " x " + i + " = " + (numero * i));
}
}
}

public class Exercocio4 {
    public static void main(String[] args) {
    Tabuada t = new Tabuada();
    t.calcular(7);
}
}