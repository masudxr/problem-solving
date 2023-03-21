function Compare(x, y) {
const xxx = Object.keys(x);
const yyy = Object.keys(y);

const xLen = xxx.length
const yLen = yyy.length

if(xLen != yLen){
    return false
}

if(xLen == yLen){
    return (JSON.stringify(x) === JSON.stringify(y))
}

// if(xLen == yLen){
//     let match =0;
//     xxx.forEach(i => {
//         if(x[i] == y[i]){
//             console.log(x[i])
//             console.log(y[i])
//         match++
//         }

//     })
//     console.log(match)
//     console.log(xLen)
//     if(match == xLen){
//         return true
//     } else {
//         return false
//     }
// }
}
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    address: {
        city: 'Gotham'
    }
  };
  const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    address: {
        city: 'Gotham',
        postCode: 3069
    }
  };

let x = {a:5, b:7}
Object.keys(x)
let y = {a:5, b:3}

// const xx = Compare(x,y)
const xx = Compare(person2,person)
console.log(xx)
// Compare(person2,person)


