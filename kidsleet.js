var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies)
    return candies.map(e=> e+extraCandies>=max ? true: false)
    
};