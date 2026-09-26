class Pessoa {
    public String nome;
    public int idade;
    public String email;
}

class Funcionario extends Pessoa {
    public double salario;
    public String cargo;
    public String departamento;
    public boolean aprendiz;
}

public class Exercocio5 {
    public static void main(String[] args) {
    Funcionario f = new Funcionario();
    f.nome = "Lucas";
    f.idade = 15;

    if (f.idade <= 16) {
    f.aprendiz = true;
} else {
    f.aprendiz = false;
}

System.out.println("Funcionário: " + f.nome + " | É aprendiz? " + f.aprendiz);
}
}