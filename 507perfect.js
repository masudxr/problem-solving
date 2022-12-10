// 507. Perfect Number
var checkPerfectNumber = function(num) {
    let Arr = [];
    let sum =0;

for (let i=1; i<num; i++){
    if(num%i ==0){
        Arr.push(i);
    }
}
for (let j=0; j<Arr.length; j++){
    sum += Arr[j];
}
if(sum == num){
    return true;
}
else{
   return false;
}
};
let num = 27;
let xx = checkPerfectNumber(num)
console.log(xx);