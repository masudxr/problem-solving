let Arr = [1,2,1];
let Arr2 = [];


for (let i=0; i<Arr.length;i++){
    Arr2.push(Arr[i]);
}
for (let i=0; i<Arr2.length;i++){
    Arr.push(Arr2[i]);
}
// Arr.push(Arr2)
console.log(Arr);
