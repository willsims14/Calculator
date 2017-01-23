/*  TO DO
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

var num1, num2;


// Add event listener
document.getElementById("+").addEventListener("click", function(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    doMath(num1, num2, add);
});

// Subtract Event Listener
document.getElementById("-").addEventListener("click", function(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    doMath(num1, num2, subtract);
});

// Multiply Event Listener
document.getElementById("*").addEventListener("click", function(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    doMath(num1, num2, multiply);
});

// Divide Event Listener
document.getElementById("/").addEventListener("click", function(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    doMath(num1, num2, divide);
});




function doMath(num1, num2, operationType){
    var outputDiv = document.getElementById("output");
    var result = operationType(num1, num2);
    outputDiv.innerHTML = result;
}



function add(number1, number2){
    return (number1 + number2);
}

function subtract(number1, number2){
    return (number1 - number2);
}

function multiply(number1, number2){
    return (number1 * number2);
}

function divide(number1, number2){
    return (number1 / number2);
}


