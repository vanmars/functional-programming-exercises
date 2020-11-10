# _Functional Programming Exercises_

_9 November 2020_

#### _Exercises for Epicodus to practice recursion and closures_

#### By _**Vanessa Stewart**_

## Description

#### Original Instructions for coin.js
Create a coin counter application that takes X amount of money (such as $4.99) and determines the exact amount of change needed in quarters, dimes, nickels and pennies. Do not worry about adding a user interface to the application. Instead, focus on writing good tests and functional code.

Part 1
Create a coin counter function that uses recursion to solve the problem.

Part 2
Create a coin counter function that uses a closure that can be used with functions for each type of change (quarters, nickels, dimes and pennies). You can use recursion if you like.

#### Original Instructions for roman.js
You've already had a chance to create an application to convert numbers into Roman numerals. This time, solve the problem recursively!

Roman numerals are based on seven symbols:

Symbol  Value
I       1
V       5
X       10
L       50
C       100
D       500
M       1,000

The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.

The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC.

You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC. You cannot count higher than 3,999 in Roman numerals.

Bonus: Can you solve this problem using closures and currying?

#### Original Instructions for prime.js
You may have solved this problem in C# or Ruby. This time, your goal is to solve it using recursion!

Given a number, write a method that returns all of the prime numbers less than that number.

This is a tricky problem and you should use the Sieve of Eratosthenes to solve it. Here's how the Sieve of Eratosthenes works to find a number up to a given number:

Create a list of numbers from 2 through n: 2, 3, 4, ..., number.
Initially, let prime equal 2, the first prime number.
Starting from prime, remove all multiples of prime from the list.
Increment prime by 1.
When you reach number, all the remaining numbers in the list are primes.

#### Original Instructions for wb.Closure1.js
Use a closure to create multiple functions for adding a prefix to a name. The prefix could be Doctor, Duchess, Sir, and so on.

It should be possible to create a new prefix function like this:

const prefixSir = addPrefix("Sir");

#### Original Instructions for wb.Recursion1.js
Write a recursive function that reverses the order of words in a sentence. For instance, "I am a cat" should become "cat a am I".

## Setup/Installation Requirements

* Clone this project using the 'git clone' command in terminal while in directory where you would like to keep the project.
* Run `cd functional-programming-exercises`  to navigate into new project
* Open the cloned repo in a text editor of your choice.
* Run `npm install to download all dependencies`

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_Connect with me at vamariestewart@gmail.com with ideas to improve this project._

## Technologies Used

* JavaScript
* JEST
* NPM
* Webpack

### License

Copyright (c) 2020 **_Vanessa Stewart_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
