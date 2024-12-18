#include <stdio.h>
#include <stdlib.h>

void converterComprimento() {
    float valor;
    int escolha;
    
    printf("\n=== Conversao de Comprimento ===\n");
    printf("Digite o valor a ser convertido: ");
    scanf("%f", &valor);
    
    printf("\nEscolha a conversao:\n");
    printf("1. Metro para Centimetro\n");
    printf("2. Metro para Milimetro\n");
    printf("3. Centimetro para Metro\n");
    printf("4. Centimetro para Milimetro\n");
    printf("5. Milimetro para Metro\n");
    printf("6. Milimetro para Centimetro\n");
    printf("Opcao: ");
    scanf("%d", &escolha);
    
    switch(escolha) {
        case 1:
            printf("%.2f metros = %.2f centimetros\n", valor, valor * 100);
            break;
        case 2:
            printf("%.2f metros = %.2f milimetros\n", valor, valor * 1000);
            break;
        case 3:
            printf("%.2f centimetros = %.2f metros\n", valor, valor / 100);
            break;
        case 4:
            printf("%.2f centimetros = %.2f milimetros\n", valor, valor * 10);
            break;
        case 5:
            printf("%.2f milimetros = %.2f metros\n", valor, valor / 1000);
            break;
        case 6:
            printf("%.2f milimetros = %.2f centimetros\n", valor, valor / 10);
            break;
        default:
            printf("Opcao invalida!\n");
    }
}

void converterArea() {
    float valor;
    int escolha;
    
    printf("\n=== Conversao de Area ===\n");
    printf("Digite o valor a ser convertido: ");
    scanf("%f", &valor);
    
    printf("\nEscolha a conversao:\n");
    printf("1. Metro quadrado para Centimetro quadrado\n");
    printf("2. Centimetro quadrado para Metro quadrado\n");
    printf("Opcao: ");
    scanf("%d", &escolha);
    
    switch(escolha) {
        case 1:
            printf("%.2f metros quadrados = %.2f centimetros quadrados\n", valor, valor * 10000);
            break;
        case 2:
            printf("%.2f centimetros quadrados = %.2f metros quadrados\n", valor, valor / 10000);
            break;
        default:
            printf("Opcao invalida!\n");
    }
}

int main() {
    int opcao;
    
    do {
        printf("\n=== Conversor de Unidades ===\n");
        printf("1. Converter Comprimento\n");
        printf("2. Converter Area\n");
        printf("0. Sair\n");
        printf("Escolha uma opcao: ");
        scanf("%d", &opcao);
        
        switch(opcao) {
            case 1:
                converterComprimento();
                break;
            case 2:
                converterArea();
                break;
            case 0:
                printf("Programa encerrado!\n");
                break;
            default:
                printf("Opcao invalida!\n");
        }
    } while(opcao != 0);
    
    return 0;
}
