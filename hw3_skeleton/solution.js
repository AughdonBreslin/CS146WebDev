/*******************
 * Aughdon Breslin *
 ******************/

document.getElementById("output").innerText='0';
var currentOp = "";
var result = document.getElementById("output");
var buffer = 0;

/** 
 * Resets the state of the calculator and the display
 */
function resetCalc() {
   result.innerText = 0;
   buffer = 0;
   currentOp = "";
}

/** GOOD
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str) {
   document.getElementById("output").innerText = str;
}

/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */
function getResult() {
   return result.innerText;
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
   if (result.innerText <= 99999999 && result.innerText >= -99999999){
      if (result.innerText == 0){
         result.innerText = num;
      }
      else{
         result.innerText += num;
      }
   }
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
   buffer = getResult();
   result.innerText = 0;
   currentOp = op;

}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
   if (currentOp == '*'){
      result.innerText = buffer * result.innerText;
   }
   else if (currentOp == '/'){
      if(result.innerText != 0){
         result.innerText = buffer / result.innerText;
      }
      else{
         result.innerText = 'ERROR'; 
      }
   }
   else if (currentOp == '-'){
      result.innerText = buffer - result.innerText;
   }
   else if (currentOp == '+'){
      result.innerText = buffer + result.innerText;
   }
   return result.innerText;
}