const card = document.querySelector(".carta");
const tabuleiro = document.querySelector(".espaco-baralho");


let comparaCards = [];
let cadaCarta = [{
        nome: "card0",
        urlImage: "bobrossparrot.gif"
    },
    {
        nome: "card1",
        urlImage: "explodyparrot.gif"
    },
    {
        nome: "card2",
        urlImage: "fiestaparrot.gif"
    },
    {
        nome: "card3",
        urlImage: "metalparrot.gif"
    },
    {
        nome: "card4",
        urlImage: "revertitparrot.gif"
    },
    {
        nome: "card5",
        urlImage: "tripletsparrot.gif"
    },
    {
        nome: "card6",
        urlImage: "unicornparrot.gif"
    },
]


let qtdCarta = prompt("De 4 à 14, com quantas cartas quer jogar?");

while (qtdCarta % 2 !== 0 || qtdCarta < 4 || qtdCarta > 14) {
    qtdCarta = prompt("Só são aceitos números pares, digite um número de 4 à 14");
}

cartasNaMesa();

function Seleciona() {



    function embaralhando() {
        return Math.random() - 0.5;
    }


    let cartasDistribuidas = [];

    for (let i = 0; i < (qtdCarta / 2); i++) {
        for (let j = 0; j < 2; j++) {
            cartasDistribuidas.push(cadaCarta[i]);
        }
    }
    cartasDistribuidas.sort(embaralhando);
    return cartasDistribuidas;
}

function cartasNaMesa() {
    let listaDeCartas = Seleciona();

    for (let k = 0; k < listaDeCartas.length; k++) {
        tabuleiro.innerHTML += `
        <div class="carta" nome = ${listaDeCartas[k].nome} onclick="viraCarta(this)">
            <img class="frontFace escondido" src="/img/${listaDeCartas[k].urlImage}" alt="umaCarta">
            <img class="backFace virada" src="/img/front.png" alt="umaCarta">
        </div>
        `;
    }
}

let numJogadas = 0;

function viraCarta(carta) {

    if (carta.querySelector(".backFace").classList.contains("escondido")) {
        return;
    }

    carta.querySelector(".backFace").classList.toggle("escondido");
    carta.querySelector(".frontFace").classList.toggle("escondido");

    comparaCards.push(carta);
    if (comparaCards.length === 2) {
        setTimeout(verificaCards, 1000);
    }

    numJogadas++;

}

function desviraCarta(card1, card2) {
    card1.querySelector(".backFace").classList.toggle("escondido");
    card1.querySelector(".frontFace").classList.toggle("escondido");

    card2.querySelector(".backFace").classList.toggle("escondido");
    card2.querySelector(".frontFace").classList.toggle("escondido");
}


let numAcertos = 0;

function verificaCards() {

    let card1 = comparaCards[0];
    let card2 = comparaCards[1];

    if (card1.getAttribute("nome") === card2.getAttribute("nome")) {
        numAcertos++;
        if (numAcertos === (qtdCarta / 2)) {
            alert(`Você ganhou com ${numJogadas} jogadas e seus pontos foram ${numAcertos}!`);
        }
    } else {
        desviraCarta(card1, card2);
    }

    comparaCards = [];
}