// 1979. Find Greatest Common Divisor of Array

var findGCD = function(nums) {
    let mid =0;
    for (let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if (nums[i] > nums[j]){
                mid = nums[i];
                nums[i] = nums[j];
                nums[j] = mid;
            }
        }
    }
    for(let i=1; i<=nums[nums.length-1]; i++){
        console.log('nums:', nums[nums.length-1]);

        if(nums[0]%i == 0 && nums[nums.length-1]%i == 0){
            mid =i;
            console.log(i);
        }
    }
    return mid;    
};
let nums = [3, 3];
let xx = findGCD(nums);
console.log(xx);
