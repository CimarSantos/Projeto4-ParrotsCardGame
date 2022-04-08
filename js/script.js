let qtdCarta = prompt("De 4 à 14, com quantas cartas quer jogar?");

while (qtdCarta % 2 !== 0 || qtdCarta < 4 || qtdCarta > 14) {
    qtdCarta = prompt("Só são aceitos números pares, digite um número de 4 à 14");
}