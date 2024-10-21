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
buttons.forEach(button => {
    button.addEventListener('click', function() {
        appendToDisplay(this.textContent);
    });
});


document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if ('0123456789'.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        document.getElementById("equal").click();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if ('+-*/.'.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Escape') {
        document.getElementById("clear").click();
    }
});