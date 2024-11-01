document.getElementById('click-hello').onclick = function() {
    console.log('Olá, Mundo!');
};


let nome = 'Maria';
const idade = Math.floor(Math.random() * 30); 
console.log(`ATIVIDADE 2: Meu nome é ${nome} e eu tenho ${idade} anos.`);

document.getElementById('submit-ops').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('n1-diffops').value);
    const num2 = parseFloat(document.getElementById('n2-diffops').value);

    if (isNaN(num1) || isNaN(num2)) {
        console.log('Por favor, insira números válidos.');
        return;
    }

    // Soma
    const soma = num1 + num2;
    console.log(`Soma: ${num1} + ${num2} = ${soma}`);

    // Subtração
    const subtracao = num1 - num2;
    console.log(`Subtração: ${num1} - ${num2} = ${subtracao}`);

    // Multiplicação
    const multiplicacao = num1 * num2;
    console.log(`Multiplicação: ${num1} * ${num2} = ${multiplicacao}`);

    // Divisão
    if (num2 !== 0) {
        const divisao = num1 / num2;
        console.log(`Divisão: ${num1} / ${num2} = ${divisao}`);
    } else {
        console.log('Erro: divisão por zero não é permitida.');
    }
});
