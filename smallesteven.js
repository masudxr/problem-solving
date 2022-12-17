var smallestEvenMultiple = function(n) {
    for (let i=1; i<=1000; i++){
    if (i%n ==0 && i%2==0){
       return i;
    }
}
};
let x = smallestEvenMultiple(77);
console.log(x);