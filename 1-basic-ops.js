"use strict"

// Type conversions

let myTrue = true;
let myTrueString = String(myTrue); //convert the boolean value to its string representation, i.e. "true"
console.log("myTrueString = " + myTrueString); //show the string value in console

console.log("bigint " + String(123456789n)); // show the value of type `bigint` as a string
console.log("bigint'" + 123456789n); // works the same way as the above line, but the conversion to String is implicit

console.log("bad conversion " + String(Number("not a number")));
     // Here we try to convert a string, which is not a valid number, to a value of type
     // Number. Obviously we fail, printing the string representation of the value `NaN`

console.log('String "1" is not Number 1: ' + String(1 === "1"));
console.log("String and Number are equal, because the implicit conversion happens behind the scenes: " + String(1 == "1"));

//Basic math operations

let n = 1;
n += 5
// n = 6 here
n += 7;
// n = 13 here
n++;
// n = 14 here
console.log("n is " + String(n));

// Tests for equality & inequalities

console.log("masha < misha = " + String("masha" < "misha"));
console.log("misha < pasha = " + String("misha" < "pasha"));

console.log("1 != 2 = " + String(1 != 2));
console.log("(1 + 1 == 2) = " + String(1 + 1 == 2));
