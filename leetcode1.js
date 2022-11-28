
var twoSum = function(nums, target) {
  let Arr =[];
for (let i =0; i<nums.length; i++){
  for(let j=i+1; j<nums.length; j++){
  if(nums[i]+nums[j] == target){
      Arr.push(i);
      Arr.push(j);

  }
}
} 
return Arr; 
};
let nums = [2,7,11,15];
let target = 9;
let xx = twoSum(nums, target);
console.log(xx);



// const readline = require('node:readline');
// const util = require('node:util');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const question = util.promisify(rl.question).bind(rl);

// async function main() {
//   const ans = await question();

//   console.log('=>', ans);
// }

// main()
//   .then(() => rl.close())
//   .catch((e) => console.log(e));