document.addEventListener("DOMContentLoaded", function() {

  var numberButtons = document.querySelectorAll('.buttonNum');

  for (var i = 0; i < numberButtons.length; i++) {
    var numberButton = numberButtons[i];
    numberButton.addEventListener('click', function(event) {
      var display = document.getElementById("screen");
      display.innerHTML = this.value;
    });
  }

  var operatorButtons = document.querySelectorAll('.operator');

  for (var i = 0; i < operatorButtons.length; i++) {
    var operatorButton = operatorButtons[i];
    operatorButton.addEventListener('click', function(event) {
      var display = document.getElementById("screen");
      display.innerHTML = this.value;
    });
  }

});
