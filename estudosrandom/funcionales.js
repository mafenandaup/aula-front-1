//let randomico = Math.floor (Math.random()) * 6 //a gente usa o math.floor para arredondar o random para um número inteiro

let randomico;

document.getElementById(botaotop).onclick = function apertalogo() {
    let randomico = Math.floor(Math.random()) * 6
    console.log(randomico);
    document.getElementById(teste).textContent = randomico;
}