const display = document.getElementById("topscreen");

function appendToDisplay(input) {
    display.value += input;
}

document.getElementById("clear").onclick = function limpardisplay() {
    display.value = "";
}

document.getElementById("equal").onclick = function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "error";
    }
}
