"use strict"

//Function that prints `hi #i` `n` times, where `i` goes from 1 to `n`
function sayHi(n){
  let count = 0; //Have many times we've said `hi` already
  while (count < n){
    console.log("hi #" + String(count + 1));
    count = count + 1;
  }
}

//sayHi(Number(prompt("How many times do you want to say 'hi' ?")));


//Function that calculates the factorial of n.
function factorial(n){
  let product = 1;
  let k = 1;
  while (k <= n){
    product = product * k;
    k = k + 1;
  }

  return product;
}


// .----------------.  .----------------.
// | .--------------. || .--------------. |
// | |       __     | || |     __       | |
// | |     .' _/    | || |    \_ `.     | |
// | |     | |      | || |      | |     | |
// | |    < <       | || |       > >    | |
// | |     | |_     | || |     _| |     | |
// | |     `.__\    | || |    /__.'     | |
// | |              | || |              | |
// | '--------------' || '--------------' |
// '----------------'  '----------------'

//Write the function recursively
function factorialR(n){
  if (n <= 1){
    return 1;
  }else{
    return n * factorialR(n - 1)
  }
}

//Prints the factorial of 5
//console.log(String(factorial(5)))

//Prints every digit of n in reverse order
function printDigits(n){
  while(n > 0){
    let remainder = n % 10; // n mod 10 (gets the last (decimal) digit of n)
    console.log(remainder);
    n = Math.floor(n / 10); // n div 10 (cuts off the last (decimal) digit of n)
  }
}

// printDigits(123456);
// console.log("----------");

//Prints every number from 1 to `n`, in that order
function countUpTo(n){
  let k = 1;
  while(k <= n){
    console.log(k);
    k = k + 1;
  }
}

// countUpTo(5);
// console.log("----------");

//Prints every number from `n` to 1, in that order
function countDownFrom(n){
  while(n !== 0){
    console.log(n);
    n = n - 1;
  }
}

// countDownFrom(5);
// console.log("----------");

//Prints all odd digits of `n` (backwards)
//Hint: use (k % 2 !== 0) to check whether the number (`k`) is odd
function printOdd(n){
  while(n !== 0){
     let digit = n % 10;
     if (digit % 2 !== 0){
       console.log(digit);
     }
     n = Math.floor(n / 10);
  }
}

// printOdd(12345);
// console.log("----------");

//Sums all digits of n, returning the result
function sumDigits(n){
  let sum = 0;
  while(n !== 0){
    sum = sum + (n % 10);
    n = Math.floor(n / 10);
  }

  return sum;
}

//Sums all digits of n recursively, returning the result
function sumDigitsR(n){
  if(n === 0){
    return 0;
  }else{
    let k = n % 10;
    let rest = sumDigitsR(Math.floor(n / 10));
    return k + rest;
  }
}

// console.log(sumDigits(12345));
// console.log("----------");

//Counts the number of digits in `n`, returning the result
function countDigits(n){
  let count = 0;
  while(n !== 0){
    count = count + 1;
    n = Math.floor(n / 10);
  }

  return count;
}

function countDigitsR(n){
  if(n == 0){
    return 0;
  }else{
    return 1 + countDigitsR(Math.floor(n / 10));
  }
}

// console.log(countDigits(12345));
// console.log("----------");

//Find and return the smallest digit of the number `n`
function smallestDigit(n){
  let smallest = 9;
  while(n !== 0){
    let k = n % 10;
    if(smallest > k){
      smallest = k;
    }
    n = Math.floor(n / 10);
  }

  return smallest;
}

function smallestDigitR(n){
  if(n < 10){
    return n
  }else{
    let k = n % 10;
    let minRest = smallestDigitR(Math.floor(n / 10));
    if(k < minRest){
      return k
    }else{
      return minRest
    }
  }
}

// console.log(smallestDigitR(533142))

//Checks if the number `n` has exactly `num` digits.
//Returns a Boolean value (true/false).
function hasDigits(n, num){
  return countDigits(n) == num;
}

//Checks if the number `n` has a property such that each its
//successive digit is less than or equal to the preceding one.
//E.g. 54420, 931, 11111111, 0.
//But not: 45, 12, 5434.
function isMonotonicallyDecreasing(n){
  let prev = 0;
  while(n > 0){
    let k = n % 10;
    if(k <= prev){
      return false;
    }else{
      prev = k;
      n = Math.floor(n / 10);
    }
  }
  return true;
}

//console.log(isMonotonicallyDecreasing(194321));
//console.log(isMonotonicallyDecreasing(94321));

function tenToPower(n){
  return 10 ** countDigits(n)
}

function reverse(n){
  let reversed = 0;
  while(n !== 0){
    let k = n % 10;
    reversed = reversed + tenToPower(n - 1) * k;
    n = Math.floor(n / 10);
  }

  return reversed;
}

//console.log(reverse(1002340230))

//Checks whether the number is a palindrome, returns the Boolean value.
//See https://en.wikipedia.org/wiki/Palindrome
//and https://en.wikipedia.org/wiki/Palindromic_number
function isPalindrome(n){
  return reverse(n) === n
}

// console.log(isPalindrome(100122313221001));
// console.log(isPalindrome(1001223113221001));
// console.log(isPalindrome(1021));

//Converts the number `n` to its string representation, returns the result.
//Do not use the built-in Number to String conversion !
//Hint: Traverse through every digit of `n` and add it (the digit) up sequentially to a string buffer.
//E.g. 27 -> '27'
//     12345 -> '12345'
function numberToString(n){
  let str = "";
  while(n != 0){
    let k = n % 10;
    str = k + str;
    n = Math.floor(n / 10);
  }
  return str;
}

// console.log(numberToString(1234));

//Counts how many times the digit `i` occurs in `n`
function countOccurrencesOfDigit(n, i){
  let count = 0;
  while(n > 0){
    let k = n % 10;
    if(k === i){
      count = count + 1
    }
    n = Math.floor(n / 10);
  }

  return count;
}

//Returns the most occuring digit of the number `n`.
//If there are multiple digits that occur the same number of times the most among others,
//Returns the largest one
//E.g. for the input number 13443223 returns 3
//     for the input number 251125   returns 5
//     for the input number 451712   returns 1
function printTheMostOccuringDigit(n){
  let maxNum = 0;
  let i = 0;
  let maxI = 0;
  while(i < 10){
    let num = countOccurrencesOfDigit(n, i);
    if(num >= maxNum){
      maxNum = num
      maxI = i;
    }
    i = i + 1;
  }

  return maxI;
}

//Given a positive number `n`, and a decimal digit `d`,
//tranforms the number `n` in such a way, that each its digit `q`
//is summed with `d` modulo 10 ((q + d) mod 10), returns the resulting number.
//Examples:
//n = 1234, d = 5: 6789
//n = 76983, d = 2: 98105
function sumEach(n, d){
  //TODO Homework
}

//Given two positive integers `n` and `k`, not both zero,
//finds and returns their greatest common divisor (gcd), using one
//of the Eclidean algorithms.
//Hint: consult wikipedia: https://ru.wikipedia.org/wiki/Наибольший_общий_делитель
//                         https://ru.wikipedia.org/wiki/Алгоритм_Евклида
//Warning! Solutions for this task may be easily found throught the internet,
//so be careful not to spoil it!
function gcd(n, k){
  //МОЖНО НЕ ДЕЛАТЬ
  //TODO Homework
}

// console.log(printTheMostOccuringDigit(13443223));
// console.log(printTheMostOccuringDigit(251125));
// console.log(printTheMostOccuringDigit(451712));

//Является ли xs постфиксом(суффиксом) xss.
//xss, xs - натуральные числа
function isPostfixNatural(xss, xs){
  while (xs !== 0){
    let a = xss % 10;
    let b = xs % 10;
    if (a !== b){
      return false;
    }else{
      xss = Math.floor(xss / 10);
      xs = Math.floor(xs / 10);
    }
  }
  return true;
}

//Является ли xs вхождением xss.
//xss, xs - натуральные числа
function isInfixNatural(xss, xs){
  while(xss !== 0){
    if(isPostfix(xss, xs)){
      return true;
    }else{
      xss = Math.floor(xss / 10);
    }
  }
  return false;
}
// console.log(isInfix(1234, 23));
// console.log(isInfix(134, 23));

//Вернуть цифру, находящуюся под номером i (отсчет с нуля, с левой стороны) в числе n
//Примеры:
//digitAt(123, 0) = 1
//digitAt(123, 1) = 2
//digitAt(123, 2) = 3
function digitAt(n, i){
  //TODO Homework
}
