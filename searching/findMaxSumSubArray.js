// time -> O(n ^ 3)
const findMaxSumSubArrayCubic = (array) => {
    let maxSum = -Infinity;
    for(let left = 0; left < array.length; left++) {
        for(let right = left; right < array.length; right++) {
            let localSum = 0;
            for(let k = left; k <= right; k++) {
                localSum += array[k];
            }
            maxSum = Math.max(maxSum, localSum);
        }
    }
    console.log(maxSum);
}

// time -> O(n ^ 2)
const findMaxSumSubQuadratic = (array) => {
    let maxSum = -Infinity;
    for(let left = 0; left < array.length; left++) {
        let localSum = 0;
        for(let right = left; right < array.length; right++) {
            localSum += array[right];
            maxSum = Math.max(maxSum, localSum);
        }   
    }
    console.log(maxSum);
}

// time -> O(n) 
// dynamic programming
const findMaxSumLinear = (array) => {
    const bestSumAtIdx = [];
    bestSumAtIdx[0] = array[0];
    // find max sum at each idx i.e subproblem
    for(let i = 1; i < array.length; i++) {
        bestSumAtIdx[i] = Math.max(bestSumAtIdx[i - 1] + array[i], array[i]);
    }

    let maxSum = -Infinity;
    // now iterate the best results list and get max sum
    for(let i = 0; i < bestSumAtIdx.length; i++) {
        maxSum = Math.max(maxSum, bestSumAtIdx[i]);
    }
    console.log(maxSum);
}


findMaxSumSubArrayCubic([1, -2, 3, 4]);
findMaxSumSubQuadratic([1, -2, 3, 4]);
findMaxSumLinear([1, -2, 3, 4]);