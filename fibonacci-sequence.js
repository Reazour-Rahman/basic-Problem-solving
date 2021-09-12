// 0,1,1,2,3,5,8,13,21,34,55,89,144
/* 3rd = 2nd + 1st
   4th = 3rd + 2nd 
   5th = 4th + 3rd
   15th = 14th + 13th
   200th = 199th + 198th
   nth = (n-1)th + (n-1)th


*/
// var fibo = [0, 1];
// for (let i = 0; i <=10; i++) {
//     fibo[i] = fibo[i - 1] + [i - 1];
// }
// console.log (fibo);

// function fibonacciSeries(number) {
//     var fibo = [0, 1];
//     for (let i = 2; i <number; i++) {
//         fibo[i]  = fibo[i -1] + fibo [i-2];
//     }
//     return fibo
// }
// var fiboSeries = fibonacciSeries(13);
// console.log(fiboSeries);

function fibonacciSeries(number) {
    if (typeof number != 'number') {
        return 'please give a number'
    }
    if (number < 1 ) {
        return 'Please give a positive number'
    }
    var fibo = [0, 1];
    for (let i = 2; i <number; i++) {
        fibo[i]  = fibo[i -1] + fibo [i-2];
    }
    return fibo
}
var fiboSeries = fibonacciSeries(13);
console.log(fiboSeries);

