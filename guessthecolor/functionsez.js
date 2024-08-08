let cores = ["AMARELO", "AZUL", "MARROM", "VERDE", "LARANJA", "BRANCO", "PRETO", "ROSA", "VERMELHO", "ROXO"];
let contador = document.getElementById('countdowncolor');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomString(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function getRandomVibrantColor() {
    let vibrantColors = [ '#FFFFFF','#FF0000', '#000000', '#FFA500', '#FFFF00', '#32CD32', '#0000FF', '#FF69B4', '#800080', '#00FFFF', '#FF00FF'];
    let randomIndex = Math.floor(Math.random() * vibrantColors.length);
    return vibrantColors[randomIndex];
}


async function contagem() {
    for (let i = 3; i > 0; i--) {
        contador.textContent = i;
        await sleep(500);
    }
    contador.textContent = 'GO!';
    await sleep (500);
    for (numeropalavras = 0; numeropalavras < 15; numeropalavras++) {
        contador.textContent = (getRandomString(cores));
        contador.style.color = getRandomVibrantColor();
        await sleep(2000);
    }
}

window.onload = contagem;

