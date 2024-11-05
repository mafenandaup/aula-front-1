
// type conversion = change the datatype of a value to another
//                                 (strings, numbers, booleans)

// --------------- EXAMPLE 1 ---------------
let age = 25;
age = Number(age);
age+=1;

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

cpf = cpf.replaceAll("." , "-"); //substitui um tipo de caracter específico por outro caracter.
console.log(cpf);