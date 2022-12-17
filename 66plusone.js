// var plusOne = function (digits) {
//     if (digits[0] >= 9 && digits.length > 1) {

//     }
//     if (digits.length == 1 || digits[0] >= 9) {
//         digits[digits.length - 1] = digits[digits.length - 1] + 1;
//         let num = digits[digits.length - 1];
//         // console.log('xx:', num)
//         let Arr = [];
//         while (num) {
//             let xy = num % 10;
//             num = Math.floor(num / 10);
//             Arr.push(xy)
//         }
//         let Arr2 = [];
//         for (let i = Arr.length - 1; i >= 0; --i) {
//             // console.log(Arr[i]);
//             Arr2.push(Arr[i]);
//         }
//         return Arr2;
//     } else {
//         digits[digits.length - 1] = digits[digits.length - 1] + 1;
//         return digits;
//     }
// };
// let digits = [9, 9];
// let xx = plusOne(digits);
// console.log('final result:', xx);


// for (let i=0; i<digits.length; i++){
//     console.log('kh', digits[i])
//     let x = digits[i]
//     console.log('xx',x)
// }


var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        let value = digits[i];
        if (value < 9) {
            digits[i] += 1;
            break;
        } else {
            digits[i] = 0;

            // If we get all the way to the largest digit and it's a 9, we'll just add a one to the front.
            if (i === 0) {
                digits.unshift(1);
            }
        }
    }

    return digits;
};
let digits = [9, 9];
let xx = plusOne(digits);
console.log('final result:', xx);