document.getElementById('container').onchange = function () {
  var bill = Number(document.getElementById('billTotal').value);
  var tipPercent = Number(document.querySelector('input[name = "tip"]:checked').value);
  var tipTotal = bill * tipPercent;
  var finalTotal = tipTotal + bill;

  document.getElementById('newTipTotal').innerHTML = tipTotal;
  document.getElementById('newTotalWithTip').innerHTML = finalTotal;

};
