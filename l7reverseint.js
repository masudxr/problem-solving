var reverse = function (x) {
    let sum = '';
    let midx = 0;
    let value2 = x;
    // console.log('1:', x)
    // console.log('2:', value2)

    if (value2 < 0) {
        value2 += (-value2);
        // console.log('VLue:', value2)
        x = value2 - (x)
        // console.log('final Value:', x)
        sum = '-';
        while (x) {
            midx = x % 10;
            if (midx == 0 && sum == '-') {
                sum = sum;
                // console.log('sum2: ',sum);
            } else {
                sum += `${midx}`;
            }
            // console.log('sum: ',sum);
            // console.log('x: ',midx);
            x = Math.floor(x / 10);
            // console.log('value: ',value);
            if(-(2**31) > sum || sum > 2**31-1){
                return '0';
            }
        }
    } else {
        while (x) {
            midx = x % 10;
            if (midx == 0 && sum == '') {
                sum = sum;
                // console.log('sum2: ',sum);
            } else {
                sum += `${midx}`;
 
            }
            // console.log('sum: ',sum);
            // console.log('x: ',midx);
            x = Math.floor(x / 10);
            // console.log('value: ',value);
             if(-(2**31) > sum || sum > 2**31-1){
                    return '0';
                }
        }
    }
    console.log(sum);

        return sum;
};
var x = -2147483659;
let mov = reverse(x);

console.log('final:', mov);


// -2,147,483,648 
// 2,147,483,647
// 1534236469
console.log(-(2**31))
console.log((2**31)-1)