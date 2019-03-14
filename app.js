let billInput = document.getElementById('billTotal');
let tipPercentInput = document.getElementById('tipPercent');
let splitInput = document.getElementById('number-of-people');

let billValue = false;
let tipPercentValue = false;
let splitValue = false;

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

function calculateTip() {
    if (billValue && tipPercentValue && splitValue) {
        let tipTotal = billValue * tipPercentValue;
        let finalTotal = (billValue + tipTotal) / splitValue;

        document.getElementById('newTipTotal').innerHTML = tipTotal;
        document.getElementById('newTotalWithTip').innerHTML = finalTotal;
    }
}

