const botoes = document.querySelectorAll('.pedido-btn');
const carrinho = document.getElementById('carrinho');
const totalSpan = document.getElementById('total');
const finalizarBtn = document.getElementById('finalizar-pedido');

let carrinhoArray = [];
let total = 0;

// Adicionar produto ao carrinho
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const card = botao.closest('.card');
        const produto = card.querySelector('h3').innerText + " - " + card.querySelector('p').innerText;
        const preco = parseFloat(card.querySelector('strong').innerText);

        carrinhoArray.push({ produto, preco });
        total += preco;
        atualizarCarrinho();
    });
});

function atualizarCarrinho() {
    carrinho.innerHTML = '';
    carrinhoArray.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.produto} - R$ ${item.preco.toFixed(2)}`;
        carrinho.appendChild(li);
    });
    totalSpan.textContent = total.toFixed(2);
}

// Finalizar pedido e enviar WhatsApp
finalizarBtn.addEventListener('click', () => {
    if (carrinhoArray.length === 0) {
        alert("Adicione algum produto ao carrinho!");
        return;
    }

    let mensagem = "Oi! Gostaria de fazer o pedido:\n";
    carrinhoArray.forEach(item => {
        mensagem += `- ${item.produto} - R$ ${item.preco.toFixed(2)}\n`;
    });
    mensagem += `Total: R$ ${total.toFixed(2)}`;

    // Abre WhatsApp com a mensagem pronta
    const telefone = "5535984136112";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');

    // Limpa carrinho
    carrinhoArray = [];
    total = 0;
    atualizarCarrinho();
});
