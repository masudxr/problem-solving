// Calculate Money in Leetcode Bank

var totalMoney = function(n) {
  let count =0;
  let sum =0;
  let m = 7;
    
  for (let i=1; i<=n; i++){
    let j = 1;
    for (; j<=m; j++){
      sum += j;
      // console.log('Sum:', sum);
      // console.log('i:', i);
      // console.log('j:', j);
      n -= 1;
      // console.log('n:', n);
      if (j == m )
      {
        count+=1;
        j = count;
        m = m+1;
        // console.log('Count:', count);
      }
      // console.log('m:', m);
      // console.log('After increment j:', j);
    
      if(n == 0){
        break;
      }
    
    }
  } 
  return sum;
};

let n = 9;
let xx = totalMoney(n);
console.log(xx);