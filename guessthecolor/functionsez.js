let cores = ["AMARELO", "AZUL", "MARROM", "VERDE", "LARANJA", "BRANCO", "PRETO", "ROSA", "VERMELHO", "ROXO"];
let contador = document.getElementById('countdowncolor');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomString(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


async function contagem() {
    for (let i = 3; i > 0; i--) {
        contador.textContent = i;
        await sleep(500);
    }
    contador.textContent = 'GO!';
    await sleep (500);
    for (numeropalavras = 0; numeropalavras < cores.length; numeropalavras++) {
        contador.textContent = (getRandomString(strings));
        await sleep(2000);
    }
}

window.onload = contagem;

