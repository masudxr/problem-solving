// 2180. Count Integers With Even Digit Sum


var countEven = function (num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count += sumOfDigit(i) % 2 === 0;
  }
  return count;
};

function sumOfDigit(num){
  let sum =0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

let num = 36;
let xx = countEven(num);
console.log(xx);