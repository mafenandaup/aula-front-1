
function mostrarAlerta(){
    alert("virus do tigrinho");
}

//let username = window.prompt("escreva qq coisa");
//console.log(username);
let username;
document.getElementById("mysubmit").onclick =  function pressbutton() {
username = document.getElementById("input1").value;
console.log(username)
document.getElementById("tipo").textContent = ("Hello " + username);

}

const textorandom = document.getElementById("textorand");
console.log(textorandom);
    textorandom = "hello";
    console.log(textorandom);

    // não tente mudar a constante depois de assumir o valor dela no inicio, vai dar erro no seu código.
    