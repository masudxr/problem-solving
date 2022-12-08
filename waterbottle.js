var numWaterBottles = function(numBottles, numExchange) {
    let bottle = numBottles;
    console.log('bottlestart:', numBottles);

    while(numBottles>= numExchange){
    console.log('bottle:', bottle);
    bottle += Math.floor(numBottles/numExchange);

    console.log('bottle2:', bottle);
    console.log('Math.floor(numBottles/numExchange):', Math.floor(numBottles/numExchange));
    console.log('Math.floor(numBottles%numExchange):', Math.floor(numBottles%numExchange));
    console.log('numBottles:', numBottles);

    numBottles = Math.floor(numBottles/numExchange) + (numBottles%numExchange);
    console.log('numBottles2:', numBottles);
    }
    return bottle;
};

let numBottles = 15;
let numExchange = 4;
let x = numWaterBottles(numBottles, numExchange);
console.log(x);