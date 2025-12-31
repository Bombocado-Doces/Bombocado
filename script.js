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
function fazerPedido(produto, preco) {
    alert(`Você pediu: ${produto} - R$ ${preco.toFixed(2)}`);
}


// automático
let intervalo = setInterval(avancar, 4000);

// atualiza no resize
window.addEventListener("resize", () => {
    atualizar();
});

// Seleciona todos os botões "Pedir"
const botoesPedir = document.querySelectorAll('.pedido-btn');

botoesPedir.forEach(botao => {
    botao.addEventListener('click', () => {
        const card = botao.closest('.card');
        const nomeProduto = card.querySelector('h3').innerText + " - " + card.querySelector('p').innerText;
        
        // Preenche o campo do formulário com o produto
        document.getElementById('produto').value = nomeProduto;

        // Exibe a seção do formulário
        document.getElementById('pedido-form-section').style.display = 'block';

        // Rola para o formulário
        document.getElementById('pedido-form-section').scrollIntoView({ behavior: 'smooth' });
    });
});

// Envio do formulário
document.getElementById('pedido-form').addEventListener('submit', function(e){
    e.preventDefault();
    
    const produto = document.getElementById('produto').value;
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const observacoes = document.getElementById('observacoes').value;

    const mensagem = `Oi! Meu nome é ${nome}. Quero pedir: ${produto}. Observações: ${observacoes}`;
    const whatsappURL = `https://wa.me/55${telefone}?text=${encodeURIComponent(mensagem)}`;

    // Abre o WhatsApp
    window.open(whatsappURL, '_blank');

    // Opcional: resetar formulário
    document.getElementById('pedido-form').reset();
    document.getElementById('pedido-form-section').style.display = 'none';
});

