let arr = window.prompt('Write something!')

// let date = new Date()
// let day = date.getDay()
// let time = date.getHours()
// let hours = date.getMinutes()
// let seconds = date.getSeconds()
//
// const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
//
//
//
// console.log(`${time}:${hours <= 9 ? `0${hours}` : hours}:${seconds}`, Days[4] )
//
//
//
//
// 2umash
// let first = 4
// let second = 5
// let third = 3
// let answer = (first * second * third)
// console.log(answer)
//

// let first = document.querySelector('.first')
// let second = document.querySelector('.second')
// let result = document.getElementById('result')
//
// function calculate() {
//     result.innerHTML = first * second;
// }

// let button = document.getElementById('button')
//
// function copy_current_page(){
//     window.copy()
// }
// 5
// function myFunction() {
//   /* Get the text field */
//   let copyText = document.getElementById("myInput");
//
//   /* Select the text field */
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); /* For mobile devices */
//
//    /* Copy the text inside the text field */
//   navigator.clipboard.writeText(copyText.value);
//
//   /* Alert the copied text */
//   alert("Copied the text: " + copyText.value);
// }
// 6
// for (let year = 2014; year <= 2050; year++)
//     {
//     let d = new Date(year, 11, 1);
//     if ( d.getDay() === 0 )
//         console.log("1st January is being a Sunday  "+year);
//     }

// function number(n) {
//     let res = 0
//     if (n <= 13) {
//         res = 13 - n
//     } else {
//         res = (n - 13) * 2
//     }
//     return res
// }
// console.log(number(25))

// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
// function test(a, b) {
//     return (a < 0 && b > 0) || (a > 0 && b < 0)
// }
//
// console.log(test(2, -22));
// console.log(test(-2, 2));


// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

// function pro(a) {
//     console.log(a % 3 === 0 || a % 7 === 0)
// }
//
// pro(13)

//  Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
// function max(num) {
//     first = num.substring(0, 1);
//     return first + num + first;
// }
//
// console.log(max('SANOAT QURILISH BANK'));
// console.log(max('abc'));

// x = 'SANOAT QURILISH BANK'
//
// x = x.substring(7, 15)
// console.log(x)

// // 1
let list = arr.split(" ").map(i => Number(i))

let minFirst = 0
let minSecond = 0

for (let i = 0; i < list.length + 1; i++) {
    if (list[i] <= list[i + 1]) {
        minSecond = list[i + 1]
    } 
}



// 2 Write a JavaScript program to check two given numbers and return true if one of the number
// is 50 or if their sum is 50.
// function number(a, b) {
//   return ((a == 50 || b == 50) || (a + b == 50));
// }
// console.log(number(40, 20))


// 3
// function plus (a, b) {
//   if (a == b) {
//     return 3 * (a + b);
//     }
//   else {
//     return (a + b);
//    }
//  }
// console.log(plus(10, 10));

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// readline.question('Enter value', name => {
//   console.log(`Hey there ${name}!`);
//   readline.close();
// });