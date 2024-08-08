const decreaser = document.getElementById('decreaseBtn');
const increaser = document.getElementById('increaseBtn');
const exponent = document.getElementById('exponentBtn');
const reset = document.getElementById('resetBtn');
const contador = document.getElementById('simbolocont');
const round = document.getElementById('roundBtn');
const divide = document.getElementById('divideBtn');

let contagem = 0;

decreaser.onclick = function diminuir() {
    contagem--;
    contador.textContent = contagem;
}

increaser.onclick = function aumentar() {
    contagem++;
    contador.textContent = contagem;
}

exponent.onclick = function expoente() {
    contagem = Math.pow(contagem, 2); 
    // math.pow é a função para fazer um cálculo exponencial. Nesse caso, é o n° de contagem ao quadrado
    contador.textContent = contagem;
}

reset.onclick = function resetar() {
    contagem = 0;
    contador.textContent = contagem;
}

round.onclick = function aproximar() {
    contagem = Math.trunc(contagem);
    contador.textContent = contagem;
}
// floor aproxima para o número menor, truncate elimina qualquer porção decimal, ceiling aproxima para o número maior

divide.onclick = function dividir() {
    if (contagem !== 0) { 
        contagem = contagem / 2;
    } else {
        window.alert('Não é possível dividir por zero!');
    }
    contador.textContent = contagem;
}

// math.sqrt é a função para ver a raiz quadrada de uma variável.
// math.abs é a função para obter o valor absoluto de uma variável.
