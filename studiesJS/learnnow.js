
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

let username2 = window.prompt('enter an username');

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
