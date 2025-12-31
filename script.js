let index = 0;
const carrossel = document.getElementById("carrossel");
const total = carrossel.children.length;

function avancar() {
    index = (index + 1) % total;
    atualizar();
}

function voltar() {
    index = (index - 1 + total) % total;
    atualizar();
}

function atualizar() {
    carrossel.style.transform = `translateX(-${index * 320}px)`;
}

setInterval(avancar, 4000);
