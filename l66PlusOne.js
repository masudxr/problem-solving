var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    let value = digits[i];
    if (value < 9) {
      digits[i] += 1;
      break;
    } else {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      }
    }
  }

  return digits;
};
let digits = [1,2,3];
let xx = plusOne(digits);
console.log(xx);