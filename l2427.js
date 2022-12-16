// Common Factors
var commonFactors = function (a, b) {
  let c = [];
  let d = [];
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      c.push(i);
    }
  }
  for (let j = 1; j <= b; j++) {
    if (b % j == 0) {
      d.push(j);
    }
  }
  let f = [];
  for (let m = 0; m < c.length; m++) {
    for (n = 0; n < d.length; n++) {
      if (c[m] == d[n]) {
        f.push(c[m]);
      }
    }

  }
  return f.length;
};
let a = 6;
let b = 24;
let mon = commonFactors(a, b);
console.log(mon);