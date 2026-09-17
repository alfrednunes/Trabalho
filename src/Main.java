import java.util.Scanner;

public class Fibonacci {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite a quantidade de termos (N): ");
        int n = scanner.nextInt();

        if (n <= 0) {
            System.out.println("Por favor, insira um número inteiro positivo maior que zero.");
        } else {
            System.out.print("Os primeiros " + n + " termos da sequência de Fibonacci são: ");
            exibirFibonacci(n);
        }

        scanner.close();
    }

    public static void exibirFibonacci(int n) {
        long primeiro = 0;
        long segundo = 1;

        for (int i = 1; i <= n; i++) {
            System.out.print(primeiro + (i < n ? ", " : "\n"));

            long proximo = primeiro + segundo;
            primeiro = segundo;
            segundo = proximo;
        }
    }
}