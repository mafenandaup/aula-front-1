//let randomico = Math.floor (Math.random()) * 6 //a gente usa o math.floor para arredondar o random para um número inteiro
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let randomico;

document.getElementById('botaotop').onclick = async function apertalogo() {
    randomico = Math.floor(Math.random() * 6);
    console.log(randomico);
    document.querySelector('.teste').textContent = randomico;
    await sleep(2000);
    document.querySelector('.teste').textContent = 'choose another number';

}

document.getElementById("send").onclick = function verify() {
    let idade = Number(document.getElementById("agemin").value);
    if (idade < 18) {
        document.getElementById("canvote").textContent = "You are " + idade + " and cannot vote.";
    } else {
        document.getElementById("canvote").textContent = "You are " + idade + " and can vote.";
    }
}

document.getElementById("send").onclick = function verify2() {
    let hasLicense = true
    let idade = Number(document.getElementById("agemin").value);
    if (idade >= 18) {
        document.getElementById("canvote2").textContent = "old enough to drive";
        // esse 2° if testa uma 2° condição se a primeira for verdadeira, caso as 1°s não sejam, então pula logo pro else
        if (hasLicense) {
            document.getElementById("canvote2").textContent = "old enough to drive :) and has license!";
        } else {
            document.getElementById("canvote2").textContent = "old enough to drive but no liscense :(";
        }
    } else {
        document.getElementById("canvote2").textContent = "not old enough and no license";
    }
}

// você também pode usar if, elseif, etc, desse jeito:
//if(){
//}elseif(){
//}else

const aura = document.getElementById("aura");
const girly = document.getElementById("yass");
const subscribe = document.getElementById("confirm");
const mysubmit = document.getElementById("submitnow");
const textrandom = document.getElementById("auraorgirly");

mysubmit.onclick = function () {
  if (subscribe.checked) {
    if (girly.checked) {
      textrandom.textContent = "Girly!";
    } else if (aura.checked) {
      textrandom.textContent = "Aura!";
    } else {
      textrandom.textContent = "Will it be Aura or Girly?";
    }
  } else {
    textrandom.textContent = "Not subscribed";
  }
}

//function ternary operator in js 
let age = 14
let message = age >= 18 ? "you're an adult" : "youre a minor";
console.log(message);
//algo pra substituir (so certas vezes) as condições de if else vice versa, mas só com duas proposições true/false
