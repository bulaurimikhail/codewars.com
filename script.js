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
//////////////////////////////11.09.2026//////////////////////////////
//////////////////////////////////////////////////////////////////////

//


//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

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

//Моя первая проверка. Файл изменён на компьютере. 16:25
//Проверка нс планшете. Файл изменён 16:28
//Отлично ёпта!