// 263. Ugly Number

var isUgly = function(n) {
  if (n <= 0){
    return false;
  }
  while (n%5 === 0) {
    // console.log('First n', n);
    n = n/5;
    // console.log('2nd n:', n);
  }

  while (n%2 === 0) {
    // console.log('First n2', n);
    n = n/2;
    // console.log('2nd n2:', n);
  }

  while (n%3 === 0) {
    // console.log('First n3', n);
    n = n/3;
    // console.log('2nd n3:', n);
  }
  n === 1;
  if(n === 1){
    // console.log('outside:', true)
    return true;
  }
  else{
    // console.log('outside:',false)
    return false;
  }
};

let n = 6;
let xx = isUgly(n);
console.log(xx);