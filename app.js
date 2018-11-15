document.getElementById('container').onchange = function() {
  var bill = Number(document.getElementById('billTotal').value);
  var tipPercent = Number(document.querySelector('input[name = "tip"]:checked').value);
  var split = Number(document.getElementsByName('number-of-people').value);
  var tipTotal = bill * tipPercent;
  var finalTotal = (bill + tipTotal) / split;

document.getElementById('newTipTotal').innerHTML = tipTotal;
document.getElementById('newTotalWithTip').innerHTML = finalTotal;

}
