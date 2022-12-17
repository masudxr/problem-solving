var numberOfSteps = function(num) {
    let count = 0;
    while (num){
    if (num%2==0){
        count +=1;
        num  = num/2;
    }
    else{
        count +=1;
        num = num-1;
    }
}
return count;
};

let num= 123;
let x = numberOfSteps(num);

console.log(x);