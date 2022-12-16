// 1588. Sum of All Odd Length Subarrays
var sumOddLengthSubarrays = function(arr) {
    let lenOfOdd = 1;
    let sum = 0;
    let len = arr.length;

    while (len >= lenOfOdd) {
        for (let i=0; i<len - lenOfOdd +1; i++) {
            console.log('lenofodd:', lenOfOdd)
            console.log('len:', len - lenOfOdd+1)
            for (let j=i; j<lenOfOdd +i; j++) {
                console.log('Array:',lenOfOdd +i);
                sum += arr[j];
            }
        }
        lenOfOdd += 2;
    }
    return sum;
};
let arr = [1,4,2,5,3];
let x = sumOddLengthSubarrays(arr);
console.log(x);