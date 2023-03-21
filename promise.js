const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve('This is for count Data when count have something');
    } else {
        reject('this is for fetch no count data');
    }
});
countValue.then((value)=>{
    console.log(value)
})

console.log(countValue);