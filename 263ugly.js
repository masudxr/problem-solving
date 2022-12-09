var isUgly = function(n) {
    if (n <= 0){
        return false;
    }
    while (n%5 === 0) {
        console.log('First n', n);
        n = n/5;
        console.log('2nd n:', n);
    }

    while (n%2 === 0) {
        console.log('First n2', n);
        n = n/2;
        console.log('2nd n2:', n);
    }

    while (n%3 === 0) {
        console.log('First n3', n);
        n = n/3;
        console.log('2nd n3:', n);
    }
    n === 1;

// let IsUgly = true;
// for (let i=2; i<=n; i++){
//     if (n % i == 0){
//         console.log('First entry:',i);
//         if(i == 2 || i == 3 || i == 5){
//         IsUgly = true;
//         // console.log(true)
//         console.log('first if i', i);
//         }else{
//             for (let j=2; j<=i/2; j++){
//                 console.log('i: ', i)
//                 console.log('j: ', j)
//                 if (i % j ==0){
//                     if(j == 2 || j == 3 || j == 5){
//                         console.log('else if inside:', j);
//                         IsUgly = true;
//                     }else{
//                         // console.log(false);
//                         console.log('else inside:', j);
//                         IsUgly = false;
//                     }
//                 }
//             }
//         }
//     }
//     else{
//         if(i == 2 || i == 3 || i == 5){
//             IsUgly = true;
//             console.log('first else if inside:', i);

//         }else{
//             IsUgly = false;
//             console.log('first else else inside:', i);

//         }
//     }
// }
if(n === 1){
    // console.log('outside:', true)
    return true;
}
else{
    // console.log('outside:',false)
    return false;
}
};
let n = 14;
let xx = isUgly(n);
console.log(xx);
