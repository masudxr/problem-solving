/* eslint-disable no-self-assign */
var reverse = function (x) {
  let sum = '';
  let midx = 0;
  let value2 = x;
  if (value2 < 0) {
    value2 += (-value2);
    x = value2 - (x);
    sum = '-';
    while (x) {
      midx = x % 10;
      if (midx == 0 && sum == '-') {
        // eslint-disable-next-line no-self-assign
        sum = sum;
      } else {
        sum += `${midx}`;
      }
      x = Math.floor(x / 10);
      if(-(2**31) > sum || sum > 2**31-1){
        return '0';
      }
    }
  } else {
    while (x) {
      midx = x % 10;
      if (midx == 0 && sum == '') {
        sum = sum;
      } else {
        sum += `${midx}`;
      }
      x = Math.floor(x / 10);
      if(-(2**31) > sum || sum > 2**31-1){
        return '0';
      }
    }
  }
  return sum;
    
};

let x = 123;
let xx = reverse(x);
console.log(xx);