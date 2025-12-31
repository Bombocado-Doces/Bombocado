const carrossel = document.getElementById("carrossel");
let index = 0;

function cardsPorTela() {
    const card = carrossel.querySelector(".card");
    const carrosselWidth = carrossel.parentElement.offsetWidth;
    return Math.floor(carrosselWidth / card.offsetWidth);
}

function atualizar() {
    const card = carrossel.querySelector(".card");
    const cardWidth = card.offsetWidth;
    const gap = parseInt(getComputedStyle(carrossel).gap) || 20;
    const shift = (cardWidth + gap) * index;
    carrossel.style.transform = `translateX(-${shift}px)`;
}

function avancar() {
    const totalCards = carrossel.children.length;
    const visibleCards = cardsPorTela();
    index += visibleCards;
    if (index >= totalCards) index = 0;
    atualizar();
}

function voltar() {
    const totalCards = carrossel.children.length;
    const visibleCards = cardsPorTela();
    index -= visibleCards;
    if (index < 0) index = totalCards - visibleCards;
    atualizar();
}

let intervalo = setInterval(avancar, 4000);

window.addEventListener("resize", atualizar);
