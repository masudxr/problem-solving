var isThree = function(n) {
    // let result = 1
    let Arr = [];
    for(let i = 1; i <= n; i++){
        if(n % i == 0){ 
            Arr.push(i);
        }
    }
    if(Arr.length == 3){
        return true;
    }
    else{
        return false;
    }
    
};

let n = 2;
let xx = isThree(n);
console.log(xx);