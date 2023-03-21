function compareDigit(x,y){
    if(x == y){
        throw new Error ('X and Y are not the same values!')
    }
}
try{
    compareDigit(9,9)
} catch (err) {
    console.log(err.message)
}


// let xx= 9;
// let a = 10;
// try{
//    let sum = xyx + a;
//    console.log(sum);
// } catch (err) {
//     console.log(err.message)
// }
// // ----------
// let x = 5;
// try {
//   x = xy + x;
// }
// catch(error) {
//     console.log(error.message)
// }
// // -----------------
// if
// try{
//     x.length();
// } catch (err) {
//     console.log(err.name)
// }
// // -------------
// try{
//     (x == fun)
//     console.log(true)
// } catch (err) {
//     console.log(err.message)
// }