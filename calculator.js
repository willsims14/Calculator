/*  TO DO
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */


function getAndCheckNums(operationType){
    var outputDiv = document.getElementById("output");

    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var result = 0;

    switch(operationType){
        case "add":
            result = add(num1, num2);
            break;
        case "subtract":
            result = subtract(num1, num2);
            break;
        case "multiply":
            result = multiply(num1, num2);
            break;
        case "divide":
            result = divide(num1, num2);
            break;
    }

    console.log("Type: ", result);
    outputDiv.innerHTML = result;
}

 function multiply(number1, number2){
    return (number1 * number2);
 }

  function add(number1, number2){
    return (number1 + number2);
 }

  function subtract(number1, number2){
    return (number1 - number2);
 }

 function divide(number1, number2){
    return (number1 / number2);
 }


