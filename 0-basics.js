"use strict"

let a;  //Allocate a variable without an initial value
        //(a is automatically initialized to `undefined`)

let b = 1; // Allocate a variable with an initial value

b = '123434' //Reassign the value of `b` to a new value

a = 2; // Set the value of `a` to `2`

// Allocate a constant
// Same behaviour as with `let` but reasignments aren't allowed
const myConst = 'immutable value';

//myConst = "not allowed"

// ^^^ this is an error, can't reassign a `const`

// Boolean values
let boolTrue = true;
let boolFalse = false;

// Special value of type `Number`
let inf = Infinity // ∞

let person = "Ruslan";
let age = '21';

// name = Ruslan, age = 21
let text1 = "name = " + person + ", age = " + age;

// A shortcut version:
let text2 = `name = ${person}, age = ${age}`;


let enteredTextOrNull = prompt();

alert("You entered: " + enteredTextOrNull);

// `:` is read as `has type`

// 0 : Number

// So the above line can be read as: `zero has type Number`

// -3 : Number
// 3.1415 : Number
// 5 + 7 : Number
// 111111111111111111111n : bigint
// "fadf" : String
// true : boolean
// false : boolean
// undefined : undefined
// null : object

// Expressions and their types printed to console
console.log(`0 : ${typeof(0)}`);
console.log(`5 + 7 : ${typeof(5 + 7)}`);
console.log(`Infinity : ${typeof(Infinity)}`);
console.log(`111111111111111n : ${typeof(1111111111111n)}`);
console.log(`"ok" : ${typeof("ok")}`);
console.log(`true : ${typeof(true)}`);
console.log(`undefined : ${typeof(undefined)}`);
console.log(`text2 : ${typeof(text2)}`);
