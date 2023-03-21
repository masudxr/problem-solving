// function greet() {
//     console.log('Hello world');
// }
// function greet1() {
//     console.log('Hello world 2');
// }
// setTimeout(greet, 2000);
// console.log('This message is shown first');
// setTimeout(greet1, 500);
// console.log('This message is shown 2nd');
// -------------------
function showTime() {

    let dateTime= new Date();
    let time = dateTime.toLocaleTimeString();
    // console.log(dateTime)
    console.log('Current Time:', time)

    setTimeout(showTime, 60000)
    // let stop = setTimeout(showTime, 3000);
    // clearTimeout(stop); 
    // console.log('Stopped setTimeOut Function for using clearTimeOut function.');
}
// setTimeout(showTime, 3000);

showTime();
