const decreaser = document.getElementById(decreaseBtn);
const increaser = document.getElementById(increaseBtn);
const exponent = document.getElementById(exponentBtn);
const reset = document.getElementById(resetBtn);
const contador = document.getElementById(simbolocont);
const round = document.getElementById(roundBtn);
const divide = document.getElementById(divideBtn);

let contagem = 0;

decreaseBtn.onclick = function diminuir() {
    contagem--;
    simbolocont.textContent = contagem;
}

increaseBtn.onclick = function aumentar(){
    contagem++;
    simbolocont.textContent = contagem;
}

exponentBtn.onclick = function expoente(){
        contagem = Math.pow(contagem, 2); 
       simbolocont.textContent = contagem;
}

resetBtn.onclick = function resetar(){
    contagem = 0;
    simbolocont.textContent = contagem;
}

roundBtn.onclick = function aproximar(){
    Math.round(contagem);
    simbolocont.textContent = contagem;
}

divideBtn.onclick = function dividir(){
    if (contagem !== 0) { 
        contagem = contagem / 2;
    } else {
        window.alert('Não é possível dividir por zero!');
    }
    contador.textContent = contagem;
}