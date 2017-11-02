document.addEventListener("DOMContentLoaded", function() {
  // Saves all number buttons
  var numberButtons = document.querySelectorAll('.buttonNum');

  //numbers input for calculation
  var number1 = 0;
  var number2 = 0;
  var operation;

  // display numbers on click
  for (var i = 0; i < numberButtons.length; i++) {
    var numberButton = numberButtons[i];
    numberButton.addEventListener('click', function(event) {
      var display = document.getElementById("screen");

      number1 = (number1 *  10) + parseInt(this.value);
      display.innerHTML = number1;
    });
  }

  var operatorButtons = document.querySelectorAll('.operator');

  // display operator on click
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

  // performs and displays calculation on click
  equalsButton[0].addEventListener('click', function(event) {
    var display = document.getElementById("screen");
    var answer;
    if (number1 != 0)
    {
      answer = calculation(number1, number2, operation);
    }
    display.innerHTML = answer;
    number1 = 0;
  });

  var clearButton = document.querySelectorAll('.buttonClear');

  // clears display on click
  clearButton[0].addEventListener('click', function(event) {
    var display = document.getElementById("screen");
    display.innerHTML = "Sparta Calculator";
    number1 = 0;
    number2 = 0;
  });
});

// calculates answer by splitting based on the operator
function calculation(number1, number2, operation) {
  if(operation === "+") {
    return add(number1, number2);
  } else if (operation === "-") {
    return subtract(number1, number2);
  } else if (operation === "*") {
  return multiply(number1, number2);
  } else {
    return divide(number1, number2);
  }
}

// function to add
function add(number1, number2) {
  return number1 + number2;
}

// function to subtract
function subtract(number1, number2) {
  return number1 - number2;
}

// function to multiply
function multiply(number1, number2) {
  return number1 * number2;
}

// function to divide
function divide(number1, number2) {
  return number1 / number2;
}
