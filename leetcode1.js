/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
const twoSum = function (nums, target) {
  const Arr = [];
  for (let i = 0; i < nums.length; i++) {
    // eslint-disable-next-line no-plusplus
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        Arr.push(i);
        Arr.push(j);
      }
    }
  }
  return Arr;
};
const nums = [2, 7, 11, 15];
const target = 9;
const xx = twoSum(nums, target);
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
