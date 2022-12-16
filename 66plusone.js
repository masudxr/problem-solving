// while (num) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
// }

var plusOne = function(digits) {
    digits[digits.length-1] =digits[digits.length-1]+1;
    return digits;
};
let digits = [9];
let xx = plusOne(digits);
console.log(xx);




