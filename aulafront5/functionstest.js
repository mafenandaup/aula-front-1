document.getElementById('click-hello').addEventListener('click', function () {
    console.log('Olá, Mundo!');
});


let nome = 'Maria';
const idade = Math.floor(Math.random() * 30);
console.log(`ATIVIDADE 2: Meu nome é ${nome} e eu tenho ${idade} anos.`);

// ATIVIDADE 3: OPERAÇÃO COM DOIS NÚMEROS 

document.getElementById('submit-ops').addEventListener('click', function () {
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

document.getElementById('submit-imppar').addEventListener('click', function () {
    const paroimpa = parseFloat(document.getElementById('parimpar-op').value);

    if (isNaN(paroimpa)) {
        window.alert('Por favor, insira abaixo um número válido.');
        return;
    }

    if (paroimpa % 2 == 0) {
        console.log(`ATIVIDADE 5: O número apresentado (${paroimpa}) é par!`);
        // aqui, pra declarar variáveis dentro de texto, se usa aspas ao invés de crase.
        document.getElementById('POP-result-log').textContent = 'O número apresentado é par!';
    } else {
        console.log(`ATIVIDADE 5: O número apresentado (${paroimpa}) é impar!`);
        document.getElementById('POP-result-log').textContent = 'O número apresentado é impar!';
    }
});

// ATIVIDADE 4: CÁLCULO DAS MÉDIAS

document.getElementById('prompt-medias').addEventListener('click', function () {

    const nota1 = parseFloat(prompt('Insira a primeira nota:'));
    const nota2 = parseFloat(prompt('Insira a segunda nota:'));
    const nota3 = parseFloat(prompt('Insira a terceira nota:'));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        window.alert('Por favor, insira números válidos.');
        return;
    }

    if (nota1 > 10 || nota2 > 10 || nota3 > 10) {
        window.alert('O comando foi interrompido. Reenicie esse prompt e insira uma nota até 10.');
        return;
    }

    const media_final = (nota1 + nota2 + nota3) / 3;

    // Determina se o aluno foi aprovado ou reprovado
    if (media_final >= 7) {
        alert(`Sua média é ${media_final.toFixed(2)}. Você foi aprovado!`);
        console.log(`Sua média é ${media_final.toFixed(2)}. Você foi aprovado!`);
    } else {
        alert(`Sua média é ${media_final.toFixed(2)}. Você foi reprovado.`);
        console.log(`Sua média é ${media_final.toFixed(2)}. Você foi reprovado.`);
        // Tofixed é usado para converter em apenas 1 casa decimal

        //         let num = 3.14159;
        // let formattedNum = num.toFixed(2); // formattedNum é "3.14"
        // console.log(formattedNum);

        // Parse é usado pra converter uma string em um número, pode ser parseFloat, parsedouble, parseInt..
    }
});



// ATIVIDADE 6
document.getElementById('submit-age').addEventListener('click', function () {
    const maioridade = parseInt(document.getElementById('age-op').value);

    if (maioridade < 0) {
        window.alert('Insira uma idade válida.');
    } else if (maioridade >= 18) {
        console.log('Você é maior de idade!');
        document.getElementById('age-result-log').textContent = 'Você é maior de idade!';
    } else {
        console.log('Você é menor de idade!');
        document.getElementById('age-result-log').textContent = 'Você é menor de idade!';
    }
});

//ATIVIDADE 8

document.getElementById('submit-namestring').addEventListener('click', function () {
    const namestring = document.getElementById('namestring-op').value;

    console.log('Nome em maiúsculas: ' + namestring.toUpperCase());
    console.log('Nome em minúsculas: ' + namestring.toLowerCase());
    console.log('Quantidade de caracteres no nome: ' + namestring.length);

    document.getElementById('namestring-result-log').textContent = (`Nome em maiúsculas: ${namestring.toUpperCase()}, Nome em minúsculas: ' ${namestring.toLowerCase()}, 'Quantidade de caracteres no nome: ${namestring.length}`);
});

//ATIVIDADE 7

function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case 'soma':
            return num1 + num2;
        case 'subtracao':
            return num1 - num2;
        case 'multiplicacao':
            return num1 * num2;
        case 'divisao':
            return num1 / num2;
        default:
            return 'Operação inválida';
    }
}

document.getElementById('sum-btn').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('n1-calc').value);
    const num2 = parseFloat(document.getElementById('n2-calc').value);
    const resultado = calculadora(num1, num2, 'soma');
    console.log(`Resultado da soma: ${resultado}`);
    document.getElementById('CALC-result-log').textContent = (`O resultado da soma é ${resultado}`);
});

document.getElementById('multiply-btn').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('n1-calc').value);
    const num2 = parseFloat(document.getElementById('n2-calc').value);
    const resultado = calculadora(num1, num2, 'multiplicacao');
    console.log(`Resultado da multiplicação: ${resultado}`);
    document.getElementById('CALC-result-log').textContent = (`O resultado da multiplicação é ${resultado}`);
});

document.getElementById('divide-btn').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('n1-calc').value);
    const num2 = parseFloat(document.getElementById('n2-calc').value);
    const resultado = calculadora(num1, num2, 'divisao');
    console.log(`Resultado da divisão: ${resultado}`);
    document.getElementById('CALC-result-log').textContent = (`O resultado da divisão é ${resultado}`);
});

document.getElementById('subtract-btn').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('n1-calc').value);
    const num2 = parseFloat(document.getElementById('n2-calc').value);
    const resultado = calculadora(num1, num2, 'subtracao');
    console.log(`Resultado da subtração: ${resultado}`);
    document.getElementById('CALC-result-log').textContent = (`O resultado da subtração é ${resultado}`);
});

//ATIVIDADE 9

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('start-countfor').addEventListener('click', async function () {
    let countfor = 10;

    for (countfor = 10; countfor >= 0; countfor--) {
        console.log(countfor);
        document.getElementById('contagem-for').textContent = countfor;
        await sleep(500);
    }
});

//ATIVIDADE 10

document.getElementById('submit-tabuada').addEventListener('click', function () {
    const num_tabuada = parseFloat(document.getElementById('tabuada-op').value);
    const resultLog = document.getElementById('tabuada-log');

    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
        tabuada += `${num_tabuada} x ${i} = ${num_tabuada * i}    ///     `;
    }

    resultLog.innerHTML = tabuada;
    console.log(tabuada);
});

//ATIVIDADE 11

let nomes = ['mafê', 'jonas', 'cris', 'vitor', 'gabi'];
let i;
let nomesconjunto = '';
document.getElementById('submit-array').addEventListener('click', function () {
    const arrayLog = document.getElementById('arrayname-log');
    let namesarray = ''
    for (i = 0; i < nomes.length; i++) {
        namesarray += `${nomes[i]}<br>`
        console.log(nomes[i]);
    }

    arrayLog.innerHTML = namesarray;

});

//atividade 12


document.getElementById('CLS-btn').addEventListener('click', function () {
    const temp_og = parseFloat(document.getElementById('temp-op').value);
    const temp_FH = (temp_og * 9 / 5) + 32;
    document.getElementById('temp-log').textContent = `TEMPERATURA EM CELSIUS: ${temp_og}°. TEMPERATURA EM FAHRENHEIT: ${temp_FH}°.`;
    console.log(`TEMPERATURA EM CELSIUS: ${temp_og}°. TEMPERATURA EM FAHRENHEIT: ${temp_FH}°.`);
});

document.getElementById('FH-btn').addEventListener('click', function () {
    const temp_og = parseFloat(document.getElementById('temp-op').value);
    const temp_CLS = (temp_og - 32) * 5 / 9;
    document.getElementById('temp-log').textContent = `TEMPERATURA EM FAHRENHEIT: ${temp_og}°. TEMPERATURA EM CELSIUS: ${temp_CLS}°.`;
    console.log(`TEMPERATURA EM FAHRENHEIT: ${temp_og}°. TEMPERATURA EM CELSIUS: ${temp_CLS}°.`);
});

// ATIVIDADE 13

let carroObj = {
    marca: 'Chevrolet',
    modelo: 'Old Money',
    ano: 1987
}

document.getElementById('car-btn').addEventListener('click', function () {
    console.log('Marca: ' + carroObj.marca);
    console.log('Modelo: ' + carroObj.modelo);
    console.log('Ano: ' + carroObj.ano);

    document.getElementById('car-obj-log').textContent = `Marca: ${carroObj.marca}, Modelo: ${carroObj.modelo}, Ano: ${carroObj.ano}`;
});

//ATIVIDADE 14

document.getElementById('compare-ops').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('n1-bigger').value);
    const num2 = parseFloat(document.getElementById('n2-bigger').value);

    if (num1 > num2) {
        console.log(`Maior valor ${num1}; Menor valor ${num2} .`);
        document.getElementById('comparenumbers-log').textContent = `Maior valor ${num1}; Menor valor ${num2} .`;
    } else if (num2 > num1) {
        console.log(`Maior valor ${num2}; Menor valor ${num1} .`);
        document.getElementById('comparenumbers-log').textContent = `Maior valor ${num2}; Menor valor ${num1} .`;
    } else if (isNaN(num1) || isNaN(num2)) {
        window.alert('Por favor, insira um número válido.');
    } else {
        console.log('Ambos os números possuem valores iguais.');
        document.getElementById('comparenumbers-log').textContent = 'Ambos os números possuem valores iguais.';
    }
});

//ATIVIDADE 15

document.getElementById('start-countwhile').addEventListener('click', async function () {
    let countwhile;

    for (countwhile = 0; countwhile <= 10; countwhile++) {
        console.log(countwhile);
        document.getElementById('contagem-while').textContent = countwhile;
        await sleep(500);
    }
});

//ATIVIDADE 16


const numSorteado = Math.floor(Math.random() * 100);
console.log(`ATIVIDADE 16: NÚMERO SORTEADO; ${numSorteado}`)
document.getElementById('number-guess-ops').addEventListener('click', function () {
    let numInsert = parseInt(document.getElementById('number-guess').value);

    while (numInsert != numSorteado) {
        if (numInsert < numSorteado) {
            console.log('O número escolhido é menor que o número sorteado');
            document.getElementById('number-guess-log').textContent = 'O número escolhido é menor que o número sorteado';
        } else if (numInsert > numSorteado) {
            console.log('O número escolhido é maior que o número sorteado');
            document.getElementById('number-guess-log').textContent = 'O número escolhido é maior que o número sorteado';
        } else if (isNaN(numInsert)) {
            window.alert('escolha um número válido, por favor.');
        }
    }
    console.log(`O número escolhido é ${numSorteado}. Você acertou!`);
    document.getElementById('number-guess-log').textContent = `O número escolhido é ${numSorteado}. Você acertou!`;

});

//ATIVIDADE 17

