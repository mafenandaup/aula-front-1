document.getElementById('click-hello').addEventListener('click', function() {
    console.log('Olá, Mundo!');
});


let nome = 'Maria';
const idade = Math.floor(Math.random() * 30); 
console.log(`ATIVIDADE 2: Meu nome é ${nome} e eu tenho ${idade} anos.`);

// ATIVIDADE 3: OPERAÇÃO COM DOIS NÚMEROS 

document.getElementById('submit-ops').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('n1-diffops').value);
    const num2 = parseFloat(document.getElementById('n2-diffops').value);

    if (isNaN(num1) || isNaN(num2)) {
        window.alert('Por favor, insira números válidos.');
        return; 
    }

    console.log('ATIVIDADE 3:');
    const soma = num1 + num2;
    console.log(`Soma: ${num1} + ${num2} = ${soma}`);

    const subtracao = num1 - num2;
    console.log(`Subtração: ${num1} - ${num2} = ${subtracao}`);

    const multiplicacao = num1 * num2;
    console.log(`Multiplicação: ${num1} * ${num2} = ${multiplicacao}`);

    if (num2 !== 0) {
        const divisao = num1 / num2;
        console.log(`Divisão: ${num1} / ${num2} = ${divisao}`);
    } else {
        console.log('Erro: divisão por zero não é permitida.');
    }
});

// ATIVIDADE 5: PAR OU IMPAR

document.getElementById('submit-imppar').addEventListener('click', function(){
    const paroimpa = parseFloat(document.getElementById('parimpar-op').value);

    if(isNaN(paroimpa)){
        window.alert('Por favor, insira abaixo um número válido.');
        return;
    }

    if(paroimpa%2 == 0){
        console.log(`ATIVIDADE 5: O número apresentado (${paroimpa}) é par!`); 
        // aqui, pra declarar variáveis dentro de texto, se usa aspas ao invés de crase.
        document.getElementById('POP-result-log').textContent = 'O número apresentado é par!';
    }else{
        console.log(`ATIVIDADE 5: O número apresentado (${paroimpa}) é impar!`);
        document.getElementById('POP-result-log').textContent = 'O número apresentado é impar!';
    }
});
