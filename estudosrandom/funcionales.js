//let randomico = Math.floor (Math.random()) * 6 //a gente usa o math.floor para arredondar o random para um número inteiro
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let randomico;

document.getElementById('botaotop').onclick = async function apertalogo() {
    randomico = Math.floor(Math.random() * 6);
    console.log(randomico);
    document.querySelector('.teste').textContent = randomico;
    await sleep(2000);
    document.querySelector('.teste').textContent = 'choose another number';
}