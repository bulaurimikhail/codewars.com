//////////////////////////////////////////////////////////////////////
//////////////////////////////01.09.2026//////////////////////////////
//////////////////////////////////////////////////////////////////////

//Even or Odd
/*function evenOrOdd(number) {
    return number % 2 === 0 ? "even" : "odd"
}
console.log(evenOrOdd(3)); //odd
console.log(evenOrOdd(0)); //
console.log(evenOrOdd(64)); //even
console.log(evenOrOdd(12)); //even
console.log(evenOrOdd(5)); //odd
*/

//Vowel Count
/*function getCount(str) {
    let count = 0;
    const vowels = 'aeiou'

    for (const letter of str) {
        if (vowels.includes(letter)) {
            console.log(letter)
            count++
        }
    }
    return count;
}
console.log(getCount('Hello'))
*/

//Disemvowel Trolls
/*function disemvowel(str) {
    const vowels = 'aAeEiIoOuU'
    let result = ''
    for (letter of str) {
        if (vowels.includes(letter)) {
            continue
        } else {
            result += letter
        }
    }
    return result;
}
console.log(disemvowel("This website is for losers LOL!"));
*/

//Square Every Digit
/*function squareDigits(num) {
    const str = String(num)
    result = ''
    for (const digit of str) {
        result += digit ** 2;
    }
    return +result;
}
console.log(squareDigits(765));
*/

//Multiply
/*function multiply(a, b) {
    return a * b
}
console.log(multiply(2, 3));
*/

//Highest and Lowest
/*function highAndLow(numbers) {
    let array = numbers.split(' ').map((el) => +el).sort((a, b) => a - b)
    numMin = array[0];
    numMax = array[array.length - 1];
    return `${numMax} ${numMin}`
}
console.log(highAndLow2("1 2 -3 4 5 10 -5 101"))
function highAndLow(numbers) {
    let arr = numbers.split(' ').map((Number))
    let minNumber = Math.min(...arr)
    let maxNumber = Math.max(...arr)
    return maxNumber + ' ' + minNumber
}
*/

//Descending Order
/*function descendingOrder(n) {
    let str = n.toString().split('').map(Number).sort((a, b) => b - a).join('')
    return +str
}
console.log(descendingOrder(123456789));
*/

//Return Negative
/*function makeNegative(num) {
    return num > 0 ? -num : num
}
console.log(makeNegative(1));    // return -1
console.log(makeNegative(-5));   // return -5
console.log(makeNegative(0));    // return 0
console.log(makeNegative(0.12)); // return -0.12
*/

//////////////////////////////////////////////////////////////////////
//////////////////////////////02.09.2026//////////////////////////////
//////////////////////////////////////////////////////////////////////

//Sum of positive
/*function positiveSum(arr) {
    let sum = 0;
    for (const el of arr) {
        if (el > 0) {
            sum += el
        } else {
            continue
        }
    }
    return sum
}
function positiveSum2(arr) {
    return sum = arr.filter((el) => el > 0).reduce((sum, el) => sum += el, 0)
}
console.log(positiveSum2([1, -4, 7, 12]));
*/

//Reversed Strings
/*function solution(str) {
    let arr = str.split('')
    let newArr = [];
    for (const el of arr) {
        newArr.unshift(el)
    }
    return newArr.join('')
}
console.log(solution('world'))
function solution2(str) {
    return str.split('').reverse().join('')
}
console.log(solution2('hello world'))
*/

//Convert a Number to a String!
/*function numberToString(num) {
    return num.toString()
}
console.log(numberToString(123))
*/

//List Filtering
/*function filter_list(l) {
    return l.filter((el) => {
        return typeof (el) === 'number'
    })
}
console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 'a', 'b', 0, 15]));
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
*/

//Convert boolean values to strings 'Yes' or 'No'.
/*function boolToWord(bool) {
    return bool ? 'Yes' : 'No'
}
console.log(boolToWord(false));
console.log(boolToWord(true));
*/

//Get the Middle Character
/*function getMiddle(s) {
    if (s.length % 2 === 0) {
        return s[s.length / 2 - 1] + s[s.length / 2]
    } else {
        return s[Math.floor(s.length / 2)]
    }
}
console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
*/

//////////////////////////////////////////////////////////////////////
//////////////////////////////08.09.2026//////////////////////////////
//////////////////////////////////////////////////////////////////////

//You're a square!
/*var isSquare = function (n) {
    if (Math.sqrt(n) === Math.floor(Math.sqrt(n))) {
        return true
    } else {
        return false
    }
}
console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(1));
console.log(isSquare(25));
console.log(isSquare(11));
*/

//Mumbling
/*function accum(s) {
    let arr = s.split('');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let part1 = arr[i].toUpperCase()
        let part2 = arr[i].repeat(i).toLowerCase();
        newArr.push(part1 + part2);
    }
    return newArr.join('-');
}
console.log(accum("abcd")); //"A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); //"R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); //"C-Ww-Aaa-Tttt"

function accum2(s) {
    const result = [];
    for (let i = 0; i < s.length; i++) {
        result.push(
            s[i].toUpperCase() + s[i].toLowerCase().repeat(i)
        );
    }
    return result.join('-');
}
console.log(accum2("abcd")); //"A-Bb-Ccc-Dddd"
console.log(accum2("RqaEzty")); //"R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum2("cwAt")); //"C-Ww-Aaa-Tttt"
*/

//Isograms
/*function isIsogram(str) {
    const arr = str.toLowerCase().split('')
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false
            }
        }
    }
    return true
}
console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("aba")); //false
console.log(isIsogram("moOse")); //false - ignore letter case
console.log(isIsogram("misha")); //false - ignore letter case
*/

//Square(n) Sum
/*function squareSum(numbers) {
    let sum = 0;
    for (const i of numbers) {
        sum += i ** 2
    }
    return sum
}
console.log(squareSum([1, 2])); //3
console.log(squareSum([1, 2, 3, 4])); //30
console.log(squareSum([2, 2, 2, 2])); //16
console.log(squareSum([1, 1, 1])); //3
*/


//////////////////////////////////////////////////////////////////////
//////////////////////////////09.09.2026//////////////////////////////
//////////////////////////////////////////////////////////////////////

//Exes and Ohs
/*function XO(str) {
    let x = 0;
    let o = 0;
    for (const el of str.toLowerCase()) {
        if (el === 'x') {
            x++;
        }
        if (el === 'o') {
            o++;
        }
        console.log('x: ', x, 'o: ', o);
    }
    return x === o;
}
console.log(XO('ooxx'));
console.log(XO('xooxx'));
console.log(XO('zpzpzpp'));
console.log(XO('zzoo'));
*/

//Remove First and Last Character
/*function removeChar(str) {
    let newStr = str.substring(1, (str.length - 1))
    return newStr
};
console.log(removeChar('eloquent'));
console.log(removeChar('country'));
console.log(removeChar('person'));
console.log(removeChar('ab'));
console.log(removeChar('xyz'));
*/

//Opposite number
/*function opposite(number) {
    return -1 * number;
}
console.log(opposite(1));
console.log(opposite(14));
console.log(opposite(-34));
console.log(opposite(-45));
*/

//Jaden Casing Strings
/*Object.defineProperty(
    String.prototype,
    'toJadenCase',
    {
        value:
            function toJadenCase() {
                return this
                    .split(' ')
                    .map((word) => {
                        return word[0].toUpperCase() + word.slice(1);
                    })
                    .join(' ')
            }
    }
);
console.log('most trees are blue'.toJadenCase());
*/

//////////////////////////////////////////////////////////////////////
//////////////////////////////10.09.2026//////////////////////////////
//////////////////////////////////////////////////////////////////////

//String repeat - kata/57a0e5c372292dd76d000d7e
/*Description:
Write a function that accepts a non-negative integer n and a string s as parameters,
and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/
/*function repeatStr(n, s) {
    return s.repeat(n);
}
console.log(repeatStr(6, 'I'));
console.log(repeatStr(5, 'Hello'));
*/

//Shortest Word - kata/57cebe1dc6fdc20c57000ac9
/*Description:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
/*function findShort(s) {
    return s.split(' ').map((word) => word.length).sort((a, b) => a - b)[0]
}
console.log(findShort('Hello World'));
console.log(findShort('How Are You'));
console.log(findShort('I Love You'));
*/

//Complementary DNA - kata/554e4a2f232cdd87d9000038
/*Description:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells
and carries the "instructions" for the development and functioning
of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other,
as "C" and "G". Your function receives one side of the DNA
(string, except for Haskell); you need to return the other complementary side.
DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/
/*function dnaStrand(dna) {
    return dna.split('')
        .map((letter) => {
            if (letter === 'A') {
                return 'T'
            } else if (letter === 'T') {
                return 'A'
            } else if (letter === 'G') {
                return 'C'
            } else if (letter === 'C') {
                return 'G'
            }
        })
        .join('')
}
console.log(dnaStrand('ATTGC'));
console.log(dnaStrand('GTAT'));
*/
/*function dnaStrand2(dna) {
    const pairs = {
        A: 'T',
        T: 'A',
        G: 'C',
        C: 'G'
    };
    return dna
        .split('')
        .map(letter => pairs[letter])
        .join('');
}
console.log(dnaStrand2('ATTGC'));
console.log(dnaStrand2('GTAT'));
*/

//Credit Card Mask - kata/5412509bd436bd33920011bc
/*Description:
Usually when you buy something, you're asked whether your credit card number,
phone number or answer to your most secret question is still correct.
However, since someone could look over your shoulder, you don't want
that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all
but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
*/
// return masked string
/*function maskify(cc) {
    return cc.substring(0, cc.length - 4).replace(/./g, '#') + cc.substring(cc.length - 4, cc.length);
}
console.log(maskify('4556364607935616'));
console.log(maskify('64607935616'));
console.log(maskify('1'));
console.log(maskify(''));
*/

//Find the smallest integer in the array - kata/55a2d7ebe362935a210000b2
/*Description:
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata,
that the supplied array will not be empty.
*/
/*function findSmallestInt(arr) {
    return arr.sort((a, b) => a - b)[0]
}
console.log(findSmallestInt([34, 15, 88, 2]));
console.log(findSmallestInt([34, -345, -1, 100]));
*/

//Grasshopper - Summation - kata/55d24f55d7dd296eb9000030
/*Description:
Summation
Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/
/*var summation = function (num) {
    let number = 0;
    let arr = [];
    for (let i = 0; i < num + 1; i++) {
        number += i
        console.log(number)
    }
    for (const j of arr) {
        number += j
    }
    return number
}
console.log(summation(2));
console.log(summation(8));
*/

//////////////////////////////////////////////////////////////////////
//////////////////////////////14.09.2026//////////////////////////////
//////////////////////////////////////////////////////////////////////

//Remove String Spaces - kata/57eae20f5500ad98e50002c5
/*Description:
Write a function that removes the spaces from the string, then return the resultant string.

Examples (Input -> Output):

"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
*/
/*function noSpace(x) {
    return x = x.split(' ').join('');
}
let stringFirst = "8 j 8   mBliB8g  imjB8B8  jl  B";
let stringSecond = "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd";
let stringThird = "8aaaaa dddd r     ";
console.log(noSpace(stringFirst));
console.log(noSpace(stringSecond));
console.log(noSpace(stringThird));
*/

//Counting sheep... - kata/54edbc7200b811e956000556
/*Description:
Consider an array/list of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/
/*function countSheeps(sheep) {
    return sheep.reduce((acc, el) => acc + (el === true ? 1 : 0), 0);
}
const sheeps = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];
console.log(countSheeps(sheeps));
*/

//Sum of two lowest positive integers - kata/558fc85d8fd1938afb000014
/*Description:
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/
/*function sumTwoSmallestNumbers(numbers) {
    let numbersSorted = numbers.sort((a, b) => a - b);
    console.log(numbersSorted);
    return numbersSorted[0] + numbersSorted[1];
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))
*/

//Beginner Series #3 Sum of Numbers - kata/55f2b110f61eb01779000053
/*Description:
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/
/*function getSum(a, b) {
    let arr = [];
    const start = Math.min(a, b);
    const end = Math.max(a, b)
    for (let i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr.reduce((acc, el) => acc += el)
}
console.log(getSum(3, 1))
*/

//////////////////////////////////////////////////////////////////////
//////////////////////////////15.09.2026//////////////////////////////
//////////////////////////////////////////////////////////////////////

//Friend or Foe? - kata/55b42574ff091733d900002f
/*Description:
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]

Input = ["Peter", "Stephen", "Joe"]
Output = []
Input strings will only contain letters.
Note: keep the original order of the names in the output.
*/
/*function friend(friends) {
    return friends.filter((name)=> name.length === 4)
}
*/

//////////////////////////////////////////////////////////////////////
//////////////////////////////16.09.2026//////////////////////////////
//////////////////////////////////////////////////////////////////////

//String ends with? - kata/51f2d1cafc9c0f745c00037d
/*Description:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

Inputs: "abc", "bc"
Output: true

Inputs: "abc", "d"
Output: false
*/
/*function solution(str, ending) {
    return str.substring(str.length - ending.length) === ending;
}
console.log(solution('abc', 'bc'));
console.log(solution('abc', 'd'))
*/

//Convert a String to a Number! - kata/544675c6f971f7399a000e79
/*Description:
Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/
/*const stringToNumber = function(str){
  return Number(str);
}
*/

//Two to One
/*Description:
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/
/*function longest(s1, s2) {
    return [...s1.split(''), ...s2.split('')].sort().filter((el, i, arr) => el !== arr[i - 1]).join('');
}
let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";
console.log(longest(a, b));
*/

//Categorize New Member - kata/5502c9e7b3216ec63c0001aa
/*Description:
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/
/*function openOrSenior(data) {
    let result = [];
    for (const memeber of data) {
        if (memeber[0] >= 55 && memeber[1] > 7) {
            result.push('Senior');
        } else {
            result.push('Open');
        }
    }
    return result
}
let a = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];
console.log(openOrSenior(a));
*/
/*function openOrSenior2(data) {
    return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open')
}
console.log(openOrSenior2([[23, 5], [56, 12], [32, 20]]))
*/

//Basic Mathematical Operations - kata/57356c55867b9b7a60000bd7
/*Description:
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/
/*function basicOp(operation, value1, value2) {
    let add = value1 + value2;
    let sub = value1 - value2;
    let mul = value1 * value2;
    let div = value1 / value2;
    return operation === '+' ? add : operation === '-' ? sub : operation === '*' ? mul : div
}
console.log(basicOp('/', 49, 7))
*/

//Abbreviate a Two Word Name - kata/57eadb7ecd143f4c9c0000a3
/*Description:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/
/*function abbrevName(name) {
    return name.split(' ').map((el) => el.substring(0, 1).toUpperCase()).join('.')
}
console.log(abbrevName('Sam Harris'));
console.log(abbrevName('patrick feeney'))
*/

//Find the next perfect square! - kata/56269eb78ad2e4ced1000013
/*Description:
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

Examples ( Input --> Output )
121 --> 144
625 --> 676
114 --> -1  #  because 114 is not a perfect square
*/
/*function findNextSquare(sq) {
    const root = Math.sqrt(sq);
    if (root === Math.floor(root)) {
        return (root + 1) * (root + 1)
    } else {
        return -1
    }
}
console.log(findNextSquare(144));
console.log(findNextSquare(121));
console.log(findNextSquare(109));
*/

//////////////////////////////////////////////////////////////////////
//////////////////////////////17.09.2026//////////////////////////////
//////////////////////////////////////////////////////////////////////

//Keep Hydrated! - kata/582cb0224e56e068d800003c
/*Description:
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/
/*function litres(time) {
    return Math.floor(time * 0.5)
}
console.log(litres(11.8))
*/

//Printer Errors - kata/56541980fa08ab47a0000040
/*Description:
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/
/*function printerError(s) {
    let colorLetters = 'abcdefghijklm';
    let errorCount = 0;
    let arr = s.split('');
    for (letter of arr) {
        if (!colorLetters.includes(letter)) {
            errorCount++
        }
    }
    return `${errorCount}/${s.length}`
}
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
*/

//Opposites Attract - kata/555086d53eac039a2a000083
/*Description:
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/
/*function lovefunc(flower1, flower2) {
    return (flower1 % 2 !== flower2 % 2)
}
console.log(lovefunc(2, 8))
*/

//Century From Year - kata/5a3fe3dde1ce0e8ed6000097
/*Description:
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28
Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here
*/
/*function century(year) {
    return Math.ceil(year / 100)
}
console.log(century(2000))
*/

//Convert number to reversed array of digits - kata/5583090cbe83f4fd8c000051
/*Description:
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]
*/
/*function digitize(n) {
    return n.toString().split('').reverse().map(el => +el);
}
console.log(digitize(35231));
*/

//Returning Strings - kata/55a70521798b14d4750000a4
/*Description:
Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/
/*function greet(name){
  return `Hello, ${name} how are you doing today?`
}
*/

//Binary Addition - kata/551f37452ff852b7bd000139
/*Description:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/
/*function addBinary(a, b) {
    return (a + b).toString(2)
}
console.log(addBinary(3, 3))
*/

//Проверка синхронизации на ноутбуке 14:04




//////////////////////////////////////////////////////////////////////
///////////Задачки от сайта freeCodeCamp - оценки студентов///////////
//////////////////////////////////////////////////////////////////////
/*function getAverage(scores) {
    let sum = 0;
    for (const score of scores) {
        sum += score;
    };
    return sum / scores.length
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function studentMsg(totalScores, studentScore) {
    let classAverage = getAverage(totalScores);
    let studentGrade = getGrade(studentScore);
    if (studentGrade !== "F") {
        return `Class average: ${ classAverage }. Your grade: ${ studentGrade }. You passed the course.`
    } else {
        return `Class average: ${ classAverage }. Your grade: ${ studentGrade }. You failed the course.`
    }
}
*/

