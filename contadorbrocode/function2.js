const decreaser = document.getElementById(decreaseBtn);
const increaser = document.getElementById(increaseBtn);
const exponent = document.getElementById(exponentBtn);
const reset = document.getElementById(resetBtn);
const contador = document.getElementById(simbolocont);

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
    contagem**
    simbolocont.textContent = contagem;
}

resetBtn.onclick = function resetar(){
    contagem = 0;
    simbolocont.textContent = contagem;
}