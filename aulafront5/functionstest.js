document.getElementById('click-hello').addEventListener('click', function() {
    console.log('Olá, Mundo!');
});


let nome = 'Maria';
const idade = Math.floor(Math.random() * 30); 
console.log(`ATIVIDADE 2: Meu nome é ${nome} e eu tenho ${idade} anos.`);

document.getElementById('submit-ops').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('n1-diffops').value);
    const num2 = parseFloat(document.getElementById('n2-diffops').value);

    if (isNaN(num1) || isNaN(num2)) {
        window.alert('Por favor, insira números válidos.');
        return; 
    }

    const soma = num1 + num2;
    console.log(`Soma: ${num1} + ${num2} = ${soma}`);

    const subtracao = num1 - num2;
    console.log(`Subtração: ${num1} - ${num2} = ${subtracao}`);

    const multiplicacao = Math.round(num1 * num2);
    console.log(`Multiplicação: ${num1} * ${num2} = ${multiplicacao}`);

    if (num2 !== 0) {
        const divisao = Math.round(num1 / num2);
        console.log(`Divisão: ${num1} / ${num2} = ${divisao}`);
    } else {
        console.log('Erro: divisão por zero não é permitida.');
    }
});
