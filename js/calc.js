document.addEventListener("DOMContentLoaded", function() {

  var numberButtons = document.querySelectorAll('.buttonNum');

  var number1 = 0;
  var number2 = 0;

  for (var i = 0; i < numberButtons.length; i++) {
    var numberButton = numberButtons[i];
    numberButton.addEventListener('click', function(event) {
      var display = document.getElementById("screen");

      number1 = (number1 *  10) + parseInt(this.value);
      display.innerHTML = number1;
    });
  }

  var operatorButtons = document.querySelectorAll('.operator');

  var operation;

  for (var i = 0; i < operatorButtons.length; i++) {
    var operatorButton = operatorButtons[i];
    operatorButton.addEventListener('click', function(event) {
      var display = document.getElementById("screen");
      display.innerHTML = this.value;
      operation = this.value;
      number2 = number1;
      number1 = 0;
    });
  }

  var equalsButton = document.querySelectorAll('.equals');
  equalsButton[0].addEventListener('click', function(event) {
    var display = document.getElementById("screen");
    display.innerHTML = calculation(number1, number2, operation);
  });
});

function calculation(number1, number2, operation) {
  if(operation === "+") {
    return add(number1, number2);

}


function add(number1, number2) {
  return number1 + number2;
}
