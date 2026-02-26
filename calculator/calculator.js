let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function leadingZeros(expr){
    return expr.replace(/^0+(\d+)/, '$1')
}
function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}