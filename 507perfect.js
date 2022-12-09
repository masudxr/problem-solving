// 507. Perfect Number

let p = 28

for (let i=1; i<p; i++){
    let Arr = [];
    let sum =0;

    if(p%i ==0){
        Arr.push(i);
    }
    for (let j=0; j<Arr.length; j++){
        sum += Arr[j];
    }
    if(sum ==p){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
