let billInput = document.getElementById('billTotal');
let tipPercentInput = document.getElementById('tipPercent');
let splitInput = document.getElementById('number-of-people');

// if no data has been input, these variables equal the boolean false 
let billValue = false;
let tipPercentValue = false;
let splitValue = false;

// Once the this input has changed, the function checks for all three input variables to be true. 
// This happens on every input value change so the order in which the values are input does not matter.
billInput.onchange = function() {
    billValue = parseInt(billInput.value);
    calculateTip();
}


tipPercentInput.onchange = function() {
    tipPercentValue = parseFloat(document.querySelector('input[name = "tip"]:checked').value);
    calculateTip();
}

splitInput.onchange = function() {
    splitValue = parseInt(splitInput.value);
    calculateTip();
}

// Once all three input values are not false, the function calculates the two outputs.
function calculateTip() {
    if (billValue && tipPercentValue && splitValue) {
        let tipTotal = billValue * tipPercentValue;
        let finalTotal = (billValue + tipTotal) / splitValue;

        document.getElementById('newTipTotal').innerHTML = tipTotal;
        document.getElementById('newTotalWithTip').innerHTML = finalTotal;
    }
}

