const decreaser = document.getElementById(decreaseBtn)
const increaser = document.getElementById(increaseBtn);
const exponent = document.getElementById(exponentBtn);
const reset = document.getElementById(resetBtn);
const contador = document.getElementById(simbolocont);
const round = document.getElementById(roundBtn);
const divide = document.getElementById(divideBtn);

let contagem = 0;

document.getElementById(decreaseBtn).onclick = function diminuir() {
    contagem--;
    simbolocont.textContent = contagem;
}

increaseBtn.onclick = function aumentar(){
    contagem++;
    simbolocont.textContent = contagem;
}

exponentBtn.onclick = function expoente(){
        contagem = Math.pow(contagem, 2); 
        /// math.pow é a função para fazer um cálculo exponencial. Nesse caso, é o n° de contagem ao quadrado
       simbolocont.textContent = contagem;
}

resetBtn.onclick = function resetar(){
    contagem = 0;
    simbolocont.textContent = contagem;
}

roundBtn.onclick = function aproximar(){
        contagem = Math.trunc(contagem);
        simbolocont.textContent = contagem;
    }
//floor aproxima p/numero menor, truncate elimina qualquer porção decimal, ceiling aprox. pra numero maior

divideBtn.onclick = function dividir(){
    if (contagem !== 0) { 
        contagem = contagem / 2;
    } else {
        window.alert('Não é possível dividir por zero!');
    }
    simbolocont.textContent = contagem;
}

//math.sqrt é a função praver a raiz quadrada de um variável.
//math.ABS