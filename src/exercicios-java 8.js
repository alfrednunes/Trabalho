import java.util.Scanner;

public class Exercocio8 {
    public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.println("=== MENU DE CADASTRO ACADÊMICO ===");
    System.out.println("1 - Cadastrar Aluno");
    System.out.println("2 - Cadastrar Professor");
    System.out.println("3 - Sair");
    System.out.print("Escolha uma opção: ");

    int opcao = scanner.nextInt();

    switch (opcao) {
    case 1:
        System.out.println("\n--- Cadastro de Aluno ---");
        System.out.print("Informe a idade: ");
        int idade = scanner.nextInt();

        if (idade >= 16 && idade <= 99) {
            System.out.println("Idade válida para o ensino superior.");

            System.out.print("Informe a renda familiar (R$): ");
            double renda = scanner.nextDouble();
            System.out.print("Participa de projeto de extensão? (true/false): ");
            boolean extensao = scanner.nextBoolean();

            if (renda < 1500.00 || extensao) {
                System.out.println("Aluno tem direito ao auxílio estudantil!");
            } else {
                System.out.println("Aluno não tem direito ao auxílio estudantil.");
            }
        } else {
            System.out.println("Idade inválida para ingressar no ensino superior.");
        }
        break;

    case 2:
        System.out.println("\n--- Cadastro de Professor ---");
        System.out.print("Informe os anos de experiência: ");
        int anosExperiencia = scanner.nextInt();
        System.out.print("Possui pós-graduação? (true/false): ");
        boolean temPosGraduacao = scanner.nextBoolean();
        System.out.print("É bacharel? (true/false): ");
        boolean ehBacharel = scanner.nextBoolean();

        if (anosExperiencia > 2 && (temPosGraduacao || ehBacharel)) {
            System.out.println("Classificação: Professor Efetivo.");
        } else {
            System.out.println("Classificação: Professor Temporário.");
        }
        break;

    case 3:
        System.out.println("Saindo do sistema...");
        break;

    default:
        System.out.println("Opção inválida!");
        break;
    }

    scanner.close();
}
}