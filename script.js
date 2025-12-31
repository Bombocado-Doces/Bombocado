const carrossel = document.getElementById("carrossel");
const cards = document.querySelectorAll(".card");

let index = 0;
let cardsPorTela = calcularCards();

function calcularCards() {
    if (window.innerWidth < 600) return 2;
    if (window.innerWidth < 900) return 3;
    return 4;
}

function avancar() {
    index += cardsPorTela;
    if (index >= cards.length) index = 0;
    atualizar();
}

function voltar() {
    index -= cardsPorTela;
    if (index < 0) index = cards.length - cardsPorTela;
    atualizar();
}

function atualizar() {
    const cardWidth = cards[0].offsetWidth + 20;
    carrossel.style.transform = `translateX(-${index * cardWidth}px)`;
}

window.addEventListener("resize", () => {
    cardsPorTela = calcularCards();
    atualizar();
});

setInterval(avancar, 4000);
