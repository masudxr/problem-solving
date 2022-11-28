var numberOfMatches = function(n) {
    console.log('n:', n);

let matches =0;

while(n){
    if(n%2==0){
        n= n/2;
        matches += n;
        console.log(matches);
    }
    else{
        n = n-1;
        if(n==0){
            return matches;
        }
        else{
        n= n/2;
        matches +=n + 1;
        }
    }
}
};

let n = 7;
let xx = numberOfMatches(n);

console.log('matches:', xx);

