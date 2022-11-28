let Arr = [2,3,4,5,7];

let Arr2= [];
let sum = 0;
for (let i=0; i<Arr.length;i++){
    sum = sum+Arr[i];
    Arr2.push(sum);
}
console.log(Arr2);