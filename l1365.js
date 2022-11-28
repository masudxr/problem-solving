// How Many Numbers Are Smaller Than the Current Number

var smallerNumbersThanCurrent = function(nums) {
    let a = [];
    for (let i=0;i<nums.length; i++){
    let b = [];
    for(let j=0; j<nums.length; j++){
        if (nums[i]>nums[j]){
            b.push(nums[j])
        // console.log(nums[i]);
        }
    }
    a.push(b.length);
}
    return a;
};

let nums = [6,5,4,8,9,3];
let k = smallerNumbersThanCurrent(nums);
console.log(k)


