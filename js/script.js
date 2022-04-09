const cardFaces = `<div class='carta frontFace' onclick='viraCarta(this)'> </div>`;
const distro = document.querySelector(".espaco-baralho");

let qtdCarta = prompt("De 4 à 14, com quantas cartas quer jogar?");

while (qtdCarta % 2 !== 0 || qtdCarta < 4 || qtdCarta > 14) {
    qtdCarta = prompt("Só são aceitos números pares, digite um número de 4 à 14");
}

for (let i = 0; i < (qtdCarta / 2); i++) {
    for (let j = 0; j < 2; j++) {
        distro.innerHTML += `  
        ${cardFaces}
        `;

    }
}

let numJogadas = 0;

function viraCarta(carta) {
    carta.classList.toggle("virada");
    carta.classList.toggle("frontFace");
    carta.classList.toggle("backFace");
    numJogadas++;
    console.log(numJogadas);

}


function numAleatorio(min, max) {
    min = Math.ceil(1);
    max = Math.floor(7);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}