"use strict"

// A function that implements logical `and` operation.
function and(a, b){
  if(a === true){
    if(b === true){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

// console.log(and(false, true)); //false
// console.log(and(true, true)); //true

// Logical `not`
// not(true)  = false
// not(false) = true
function not(a){
  if (a === true){
    return false;
  }else{
    return true;
  }
}

// Logical `or` (+)
// false + false = false
// false + true  = true
// true  + false = true
// true  + true  = true
function or(a, b){
  if(a === false){
    if(b === true){
      return true;
    } else{
      return false;
    }
  }else{
    return true;
  }

}

//console.log(or(true, false));
//console.log(true === false);

// Logical `implication` (=>)
// false => false = true
// false => true  = true
// true  => true  = true
// true  => false = false
function implication(a, b){
  if(a === true){
    if(b === true){
      return true;
    }else{ // b === false
      return false;
    }
  }else{ // a === false
    return true;
  }
}

// Logical equivalence (<=>)
// true  <=> true  = true
// false <=> false = true
// true  <=> false = false
// false <=> true  = false
function equivalence(a, b){
  if (a === true){
    if(b === true){
      return true;
    }else{
      return false;
    }
  }else{
    if(b === true){
      return false;
    }else{
      return true;
    }
  }
}

// Check if `x` is a solution to the linear equation in one variable:
// `a * x = b`.
// The function should return `true` if indeed `x` is a solution,
// and `false` otherwise.
// Assume that `a`, `b` and `x` are of type `Number`
function checkIfLinearRoot(a, b, x){
  return a * x === b
}

// Check if `x` is a value of type `Number`
// Return `true` if it is, `false` - otherwise.
// Hint: use `typeof`,
// an example of its use may be found in `test.js`.
function isNumber(x){
  return typeof(x) === "number"
}

// Similarly to the above, but check for type `String`.
function isString(x){
  return typeof(x) === "string"
}

// If `obj` is a String, print to console: `String: ${obj}`
// If `obj` is a Number, print to console: `Number: ${obj}`
// Otherwise print to console: `I don't know you`
function greetObject(obj){
  if(isNumber(obj)){
    return `Number: ${obj}`
  }else{
    if(isString(obj)){
      return `String: ${obj}`
    }else{
      return "I don't know you"
    }
  }
}

//For example:
//greetObject("my string") would print "String: my string"
//greetObject(22) would print "Number: 22"
//greetObject(false) would print "I don't know you"

// Logical `excluding or`, acts like `(x + y) mod 2`
// (sum of two natural numbers modulo 2)

//xor(false, false) = false
//xor(true, false) = true
//xor(false, true) = true
//xor(true, true) = false
function xor(a, b){
  return not(equivalence(a, b)) //the `xor` operation is the converse of the `equivalence` operation
}

//Write a function that asks the user any question,
//and prompts for an affirmative or negative answer.
//(Use `alert` to ask a question and `confirm` to get an answer)
//Print back that the answer was correct or incorrect.

//Possible interaction:

//Web page: Can a person under the age of 18 drive a car in Russia ?
//User: `Gives a negative answer`
//Web page: you are correct !

//Web page: Can a person under the age of 18 drive a car in Russia ?
//User: `Gives a positive answer`
//Web page: you are not correct !

function ask(){
  let result = confirm("Can a person under the age of 18 drive a car in Russia ?");
  if (result){ //yes
    alert("You are not correct !")
  }else{ //no
    alert("You are correct !")
  }
}

