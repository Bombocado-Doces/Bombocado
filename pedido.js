let carrinho = [];
let total = 0;

function adicionarPedido(produto, preco) {
    carrinho.push({ produto, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const ul = document.getElementById('carrinho');
    ul.innerHTML = '';
    total = 0;

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.produto} - R$ ${item.preco.toFixed(2)}`;
        ul.appendChild(li);
        total += item.preco;
    });

    document.getElementById('total').textContent = total.toFixed(2);
}

const botoesPedir = document.querySelectorAll('.pedido-btn');
botoesPedir.forEach(botao => {
    botao.addEventListener('click', () => {
        const card = botao.closest('.card');
        const nomeProduto = card.querySelector('h3').innerText + " - " + card.querySelector('p').innerText;
        const preco = parseFloat(card.querySelector('strong').innerText.replace('R$', '').replace(',', '.'));
        adicionarPedido(nomeProduto, preco);
        alert(`${nomeProduto} adicionado ao carrinho!`);
    });
});

const btnFinalizar = document.getElementById('finalizar-pedido');
btnFinalizar.addEventListener('click', () => {
    if(carrinho.length === 0){ alert("Seu carrinho está vazio!"); return; }

    const nome = prompt("Digite seu nome:");
    const telefone = prompt("Digite seu WhatsApp (somente números):");

    let mensagem = `Oi! Meu nome é ${nome}. Quero pedir:\n`;
    carrinho.forEach(item => {
        mensagem += `- ${item.produto} - R$ ${item.preco.toFixed(2)}\n`;
    });
    mensagem += `Total: R$ ${total.toFixed(2)}`;

    const whatsappURL = `https://wa.me/553584136112${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappURL, '_blank');
});
