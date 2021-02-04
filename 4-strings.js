"use strict"

// =================A bit of theory =====================

//The notion of a character is synonymous with a string of length 1

//Function `.charAt` acts on a string, taking a zero-based index `i` as an argument.
//It returns the character in that string located at index `i`

"abc".charAt(1) == "b";
"abc" == "abc".charAt(0) + "abc".charAt(1) + "abc".charAt(2);
console.log("😀😉");

//Function `.codePointAt` is similar, but instead of returning a character, it yields
//the code point of said character

"abc".codePointAt(1) == 98;

//`.length` (which is not really a function) returns the number of characters in the operated
//string. However, it can't properly handle unicode strings: lengths returned by `.length` won't
//match up with the actual observed values

"😀😉".length != 2; //can't use the regular `.length` function on strings with unicode characters
"abc".length == 3;

//"\n" is a special control character that denotes a start of a new line

console.log("First line\nSecond line\nThird line")

// Checks whether the provided character `ch`
// is a lower-case latin letter
function isLowerLatin(ch){
  return "a".codePointAt(0) <= ch.codePointAt(0)
       && ch.codePointAt(0) <= "z".codePointAt(0)
}

// console.log(isLowerLatin("g"))
// console.log(isLowerLatin("T"))

//========================================================

// Checks whether the provided character `ch` (string of length 1)
// is an upper-case latin letter
function isUpperLatin(ch){
  return "A".codePointAt(0) <= ch.codePointAt(0)
       && ch.codePointAt(0) <= "Z".codePointAt(0)
}

// Checks whether the provided character `ch`
// is a digit
function isDigit(ch){
  return "0".codePointAt(0) <= ch.codePointAt(0)
       && ch.codePointAt(0) <= "9".codePointAt(0)
}

//Checks whether the provided string is made up of lower-case latin
//characters only
function isLowerLatinStr(str){
  //TODO homework
}

//Checks whether the provided string is made up of latin characters
//and/or digits
function isAlphanumericStr(str){
  //TODO homework
}
//isAlphanumericStr("abcZ22") == true
//isAlphanumericStr("2$") == false
//isAlphanumericStr("русский") == false

//Takes a string `str` and a non-negative integer `n`
//Duplicates the string `str` exactly `n` times,
//returning the result
function replicate(str, n){
  //TODO homework
}

//replicate("x", 4) == "xxxx"
//replicate("yes ! ", 3) == "yes ! yes ! yes ! "

//Является ли xs постфиксом(суффиксом) xss.
//xs, xss - строки
//(Мы уже делали подобное задание для натуральных чисел)
function isPostfixString(xss, xs){
  //TODO homework
}

//Является ли xs вхождением xss.
//xs, xss - строки
//(Мы уже делали подобное задание для натуральных чисел)
function isInfixString(xss, xs){
  //TODO homework
}
