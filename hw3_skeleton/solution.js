/*******************
 * Aughdon Breslin *
 ******************/

document.getElementById("output").innerText='0';
var currentOp = "";
var result = 0;
var buffer = 0;

/** 
 * Resets the state of the calculator and the display
 */
function resetCalc() {
   setDisplay('0');
   buffer = 0;
   result = 0;
   currentOp = "";
}

/**
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
   return result;
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
   if (parseInt(result.toString() + num) <= 999999999 && parseInt(result.toString() + num) >= -999999999){
      if (result == 0){
         result = num;
      }
      else{
         result = parseInt(result.toString() + num);
      }
      setDisplay(result);
   }
   else{
      setDisplay(999999999);
   }
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
   if (result !=0){
      buffer = result;
      result = 0;
   }
   setDisplay(0);
   currentOp = op;

}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
   if (currentOp == '*'){
      result = buffer * result;
      setDisplay(result);
   }
   else if (currentOp == '/'){
      if(result != 0){
         result = parseInt(buffer / result);
         setDisplay(result);
      }
      else{
         result = 0;
         setDisplay('ERROR');
      }
   }
   else if (currentOp == '-'){
      result = buffer - result;
      setDisplay(result);
   }
   else if (currentOp == '+'){
      result = buffer + result;
      setDisplay(result);
   }
   if (result > 999999999){
      setDisplay(999999999);
   }
}