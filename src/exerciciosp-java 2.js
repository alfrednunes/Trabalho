class Pessoa {
    private int idade;

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
    this.idade = idade;
}
}

public class Exercocio2 {
    public static void main(String[] args) {
    Pessoa p = new Pessoa();
    p.setIdade(20);

    if (p.getIdade() >= 18) {
    System.out.println("Apta a tirar a carteira de motorista.");
} else {
    System.out.println("Não está apta a tirar a carteira de motorista.");
}
}
}