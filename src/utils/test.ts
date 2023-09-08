var dominantIndex = function(nums) {
    const newNums = [...nums].sort((a,b) => b - a)
    let max = newNums[0]
    let res = nums.indexOf(max)
    return max >= newNums[1] + newNums[1] ? res : -1
};