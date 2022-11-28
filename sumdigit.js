// let value = 234;
//     let sum = 1;
//     let sum1 = 0;
// while (value) {
//     // console.log('value:', value);
//     // console.log('  ',value % 10);
   
//     sum *= value % 10;
//     sum1 += value % 10;

//     // console.log('value2:', value);
//     // console.log('sum:', sum);
//     value = Math.floor(value / 10);
//     // console.log('value3:', value);
// }

// let result = sum - sum1;
// console.log(result);



var subtractProductAndSum = function(n) {
    let sum = 1;
    let sum1 = 0;
while (n) {
    sum *= n % 10;
    sum1 += n % 10;

    n = Math.floor(n / 10);

}
let result = sum - sum1;
return result;
};

let x = subtractProductAndSum(4421);
console.log(x);


