const carrossel = document.getElementById("carrossel");
let index = 0;

// calcula quantos cards cabem na tela
function cardsPorTela() {
    const card = carrossel.querySelector(".card");
    const carrosselWidth = carrossel.parentElement.offsetWidth;
    return Math.floor(carrosselWidth / card.offsetWidth);
}

// desliza o carrossel
function atualizar() {
    const card = carrossel.querySelector(".card");
    const cardWidth = card.offsetWidth;
    const gap = parseInt(getComputedStyle(carrossel).gap) || 20;
    const shift = (cardWidth + gap) * index;
    carrossel.style.transform = `translateX(-${shift}px)`;
}

// avançar
function avancar() {
    const totalCards = carrossel.children.length;
    const visibleCards = cardsPorTela();
    index += visibleCards;
    if (index >= totalCards) index = 0;
    atualizar();
}

// voltar
function voltar() {
    const totalCards = carrossel.children.length;
    const visibleCards = cardsPorTela();
    index -= visibleCards;
    if (index < 0) index = totalCards - visibleCards;
    atualizar();
}

// automático
let intervalo = setInterval(avancar, 4000);

// atualiza no resize
window.addEventListener("resize", () => {
    atualizar();
});

// =======================
// CARRINHO DE PEDIDOS
// =======================
let carrinho = [];
let total = 0;

function adicionarPedido(produto, preco) {
    carrinho.push({ produto, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const ul = document.getElementById('carrinho');
    if(!ul) return; // evita erro se não estiver na página de pedido
    ul.innerHTML = '';
    total = 0;

    carrinho.forE
