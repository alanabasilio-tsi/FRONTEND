"use strict";
function questao1() {
    let renda = 0;
    let filhos = 0;
    let medRenda = 0;
    let medFilhos = 0;
    let cont = 0;
    while (renda >= 0 && filhos >= 0) {
        renda = Number(prompt("Digite a renda:"));
        filhos = Number(prompt("Digite a quantidade de filhos:"));
        if (renda >= 0 && filhos >= 0) {
            medRenda += renda;
            medFilhos += filhos;
            cont++;
        }
    }
    if (cont === 0) {
        alert("Nenhum dado válido foi informado.");
        return;
    }
    medRenda = medRenda / cont;
    medFilhos = medFilhos / cont;
    alert(`Média de filhos: ${medFilhos}\nMédia de renda: ${medRenda}`);
}
function questao2() {
    let num = 2;
    while (num > 1) {
        num = Number(prompt("Digite um número maior que 1:"));
        if (num <= 1) {
            break;
        }
        let ePrimo = true;
        let divisor = num - 1;
        while (divisor > 1) {
            if (num % divisor === 0) {
                ePrimo = false;
                break;
            }
            divisor--;
        }
        if (ePrimo) {
            alert(`${num} é primo!`);
        }
        else {
            alert(`${num} não é primo!`);
        }
    }
}
function questao3() {
    let inicio = Number(prompt("Digite o início do intervalo:"));
    let fim = Number(prompt("Digite o fim do intervalo:"));
    let num = inicio;
    let quantidadePrimos = 0;
    let primos = [];
    while (num <= fim) {
        let divisor = 2;
        let ePrimo = true;
        if (num < 2) {
            ePrimo = false;
        }
        while (divisor < num && ePrimo) {
            if (num % divisor == 0) {
                ePrimo = false;
            }
            divisor++;
        }
        if (ePrimo) {
            quantidadePrimos++;
            primos.push(num);
        }
        num++;
    }
    alert(`Quantidade de números primos: ${quantidadePrimos}
Números primos: ${primos.join(", ")}`);
}
