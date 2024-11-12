
function subtrair(){
    const num1 = parseInt(document.getElementById('num1').value)
    const num2 = parseInt(document.getElementById('num2').value)
}

function somar(){
    const num1 = parseInt(document.getElementById('num1').value)
    const num2 = parseInt(document.getElementById('num2').value)

    const resultado = num1+num2;
    document.getElementById('results-tab').textContent = "Resultado; " +resultado;

}