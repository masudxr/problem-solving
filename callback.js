// const x = 10;
// function division(){
//     const man = 48;
//     const fun = 12;
//     let div = man/fun;
//     let fuck = div*5;
//     return fuck
// }
// function display (some){
//     console.log('callback here:', some);
//     let x = division()
//     console.log('call division function:', x)
// }
// function sum (a, b, callback, mul) {
//     let y = a + b;
//     let xxx = division()
//     let xx = xxx-y;
//     mul(xx)
//     callback(y);
// }
// sum(x, 9, display, multiply);
// console.log('fuck');
// function multiply(m){
//     let mul = m * x;
//     console.log('multiply:', mul);
// }
// // -----------------
let mark = 33;
function result(point){
    if(point < 33){
        failed();
    } else {
        passed();
    }
}
function failed(){
    console.log('failed !!')
}
function passed(){
    console.log('passed !!')
}
result(mark)

// ------------------

function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
function callMe() {
    console.log('Call me When im back !');
}
greet('Masud', callMe);
// ------------------
function greeting(name) {
   console.log(name);
}
  
function processUserInput(callback) {
    const name = "Thank You";
    callback(name);
}
  
  processUserInput(greeting);