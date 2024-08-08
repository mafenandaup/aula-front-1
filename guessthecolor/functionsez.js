let cores = ["AMARELO", "AZUL", "MARROM", "VERDE", "LARANJA", "BRANCO", "PRETO", "ROSA", "VERMELHO", "ROXO"];
let contador = document.getElementById('countdowncolor');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function contagem() {
    for (let i = 3; i > 0; i--) {
        contador.textContent = i;
        await sleep(500);
    }
    contador.textContent = 'GO!';
}

window.onload = contagem;