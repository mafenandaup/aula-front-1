
// type conversion = change the datatype of a value to another
//                                 (strings, numbers, booleans)

// --------------- EXAMPLE 1 ---------------
let age = 25;
age = Number(age);
age += 1;

console.log(age, typeof age);

// --------------- EXAMPLE 2 ---------------
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//string methods: te ajudam a manipular e trabalhar com texto

let userName = "Mafenes";

console.log(userName.charAt(0)); //imprime o caracter naquele index
console.log(userName.indexOf("n")); //imprime o número do index daquele caracter
console.log(userName.length); //imprime o comprimento, número de caracteres daquela string
console.log(userName.toLowerCase);
console.log(userName.toUpperCase);
console.log(userName.repeat(3));

let result = userName.startsWith("N"); //retornará um boolean, mesma coisa pro endswith, includes...
console.log(userName);

let cpf = "123.456.789.00";

cpf = cpf.replaceAll(".", "-"); //substitui um tipo de caracter específico por outro caracter.
console.log(cpf);

cpf = cpf.padStart(20, "0"); // padstart define o n° de indices que vocÊ quer na string, depois preenche os espaços vazios do cpf.length com um caracter específico
console.log(cpf);

cpf = cpf.padEnd(22, "-"); // mesma coisa com o pad end
console.log(cpf);

// string slicing = creating a substring  from a portion of another string

// ------------ EXAMPLE 1 ------------


const fullName = "Mamonas Assasinas";

let firstName = fullName.slice(0, 8); // o string.slice(start, end) usa esse formato: pega o ínex do caracter em que vc
// quer que comece e o indice do caracter em que você quer que acabe.
// lembrando que o end é um número exclusivo, ou seja: só mostra do caracter de indice 0 até o 7.
console.log(firstName);
let lastName = fullName.slice(8, 19);
console.log(lastName);

const email = "mafenandaup1@gmail.com";

let username = email.slice(0, email.indexOf("@")); //aqui só vai até o 1
let extension = email.slice(email.indexOf("@") + 1); //essa string começa onde a última terminou, e como não tem a outra v´rigula, vai até o ultimo caracter da string

console.log(username);
console.log(extension);

// METHOD CHAINING : chamando um método atrás do outro em uma linha contínua de código.

let username2 = "mafenandaup"

// ---- NO METHOD CHAINING ----
/*
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);
*/

// ---- METHOD CHAINING ----

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);

//mais um exemplo de method chaining
class Carro {
  constructor() {
    this.marca = '';
    this.modelo = '';
    this.cor = '';
  }

  setMarca(marca) {
    this.marca = marca;
    return this; // Retorna o próprio objeto para permitir o encadeamento
  }

  setModelo(modelo) {
    this.modelo = modelo;
    return this;
  }

  setCor(cor) {
    this.cor = cor;
    return this;
  }

  exibirCarro() {
    console.log(`Carro: ${this.marca} ${this.modelo} na cor ${this.cor}`);
    return this;
  }
}

// Utilizando method chaining
const meuCarro = new Carro();
meuCarro.setMarca('Toyota').setModelo('Corolla').setCor('Azul').exibirCarro();

/// STRICT EQUALITY && STRICT INEQUALITY

//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if VALUES AND DATATYPE are equal)
//  != inequality operator
// !== strict inequality operator

//EX:

const numrandom = 3.14294;

if (numrandom === "3.14294") {
  console.log(`${numrandom} NÃO É ESSTRITAMENTE UM NÚMERO `)
} else {
  console.log('é, pode ser um número')
}

/// FUNÇÕES



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
document.getElementById('text-header').textContent = '';
document.getElementById('hbd-btn').addEventListener('click', function () {
  hbdToYou("mafê", 18); // Chama a função com os parâmetros nome e idade. se for void, CHAMA SEM OS PARÂMETROS, PURAMENTE NO 1° PARENTESES
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function hbdToYou(nome, idade) { ///AS VARIÁVEIS TEMPORÁRIAS PRECISAM SER DEFINIDAS NOS PARENTES DA FUNÇÃO! que nem em java, por ex.
  console.log('Parabéns pra você,');
  document.getElementById('text-header').textContent = 'Parabéns pra você,';
  await sleep(1000);

  console.log('nessa data querida,');
  document.getElementById('text-header').textContent = 'nessa data querida,';
  await sleep(1000);

  console.log('muitas felicidades,');
  document.getElementById('text-header').textContent = 'muitas felicidades,';
  await sleep(1000);

  console.log('Muitos anos de vida!');
  document.getElementById('text-header').textContent = 'Muitos anos de vida!';
  await sleep(1000);

  console.log(`Feliz aniversário, ${nome}! Agora você possui ${idade} anos!`);
  document.getElementById('text-header').textContent = `Feliz aniversário, ${nome}! Agora você possui ${idade} anos!`;
}

function add(x, y) {
  return x + y;
}

let answer = add(2, 3);
console.log(answer);

console.log(isValidEmail("mafenandaup@gmail.com"));
console.log(isValidEmail("elonmusk.gmail.com"));

function isValidEmail(useremail) {
  if (useremail.includes("@")) {
    console.log(`${useremail} is a valid email`);
  } else {
    console.log(`${useremail} is NOT a valid email`)
  }
}

/// ESCOPO LOCAL X ESCOPO GLOBAL
// variable scope = where a variable is recognized
//                               and accessible (local vs global)            

let yeezy = 3; // global scope/ESCOPO GLOBAL (declarado fora de uma função)

function1();

function function1() {
  let x = 1; // local scope/ESCOPO LOCAL (declarado dentro de uma função)
  console.log(x);
}

/// conversor de temperatura: exercício prático

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("to-FH");
const toCelsius = document.getElementById("to-celsius");
const results = document.getElementById("result");
let temp;

function convert() {

  if (toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = temp * 9 / 5 + 32;
    results.textContent = temp.toFixed(1) + "°F";
  }
  else if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    results.textContent = temp.toFixed(1) + "°C";
  }
  else {
    results.textContent = "Select a unit";
  }
}

// ARRAYS

let fruit = ["apple", "banana", "orange", "lime"];
console.log(fruit); // vai imprimir todos os elementos do array
console.log(fruit[2]); //vai imprimir só o 2° item

fruit[0] = "coconut";// vai mudar o elemento de um determinado index

console.log(fruit);
console.log(fruit[0]);

//fruits.push("coconut");  //adiciona um elemento para o final
//fruits.pop();                     //remove o ultimo elemento
//fruits.unshift("mango"); //adiciona um elemento para o início
//fruits.shift();                    //remove elemento do início

fruit.push("lemon");
fruit.shift("coconut");
fruit.unshift("kiwi");

console.log(fruit);

let numOfFruits = fruit.length;
let fruitIndex = fruit.indexOf("kiwi");

console.log(fruitIndex); // se o console.log retornar -1..
//significa que o elemento não foi encontrado no array

for (let element of fruit) { //loop para imprimir os elementos de um array EM ORDEM
  console.log(element);
}

console.log(fruit.sort()) //IMPRIME EM ORDEM ALFABÉTICA
console.log(fruit.sort().reverse())

// 2D array = multi-dimensional array that stores a matrix
//                    of data in rows and columns.
//                    Useful for games, spreadsheets, or representing images 

const matrix = [[1, 2,], //ESSA É UMA MATRIS 2X2
[3, 4,]];

matrix[0][0] = '1';
matrix[0][1] = '2'; //pra representar uma matriz em js, a primeira linha/coluna SEMPRE COMEÇA COM 0!
// ex: se uma matriz tem 6 linhas, o index dessas linhas vai de 0 a 5, etc.
matrix[1][0] = '3';
matrix[1][1] = '4';

console.log(matrix); //1° forma de imprimir

const matrix2 = [[1,2,3],
[4,5,6],
[7,8,9]];

for(let row of matrix2){
  console.log(row);   // outra forma de imprimir toda a matriz, pode fazer com coluna tb
}

//SPREAD OPERATOR: permite que um string ou array seja separado em elementos diferentes.

let numberSet = [1,2,3,4,5];

let numSetMax = Math.max(...numberSet) //o ... é o SPREAD OPERATOR
console.log(numSetMax);

let numSetMin = Math.min(...numberSet) //o ... é o SPREAD OPERATOR
console.log(numSetMin);

let stringrand = "maria"
let letters =[...stringrand];
console.log(letters);