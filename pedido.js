const botoesPedir = document.querySelectorAll('.pedido-btn');

botoesPedir.forEach(botao => {
    botao.addEventListener('click', () => {
        const card = botao.closest('.card');
        const nomeProduto = card.querySelector('h3').innerText + " - " + card.querySelector('p').innerText;
        const preco = card.querySelector('strong').innerText;

        // Preenche o campo do formulário
        document.getElementById('produto').value = `${nomeProduto} - ${preco}`;

        // Exibe o formulário
        document.getElementById('pedido-form-section').style.display = 'block';

        // Rola para o formulário
        document.getElementById('pedido-form-section').scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('pedido-form').addEventListener('submit', function(e){
    e.preventDefault();
    const produto = document.getElementById('produto').value;
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const observacoes = document.getElementById('observacoes').value;

    const mensagem = `Oi! Meu nome é ${nome}. Quero pedir: ${produto}. Observações: ${observacoes}`;
    const whatsappURL = `https://wa.me/5535984136112?text=${encodeURIComponent(mensagem)}`;

    // Abre WhatsApp com a mensagem pronta
    window.open(whatsappURL, '_blank');

    // Reseta formulário e esconde
    document.getElementById('pedido-form').reset();
    document.getElementById('pedido-form-section').style.display = 'none';
});
