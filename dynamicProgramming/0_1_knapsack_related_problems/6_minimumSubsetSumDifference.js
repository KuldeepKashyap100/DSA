/**
 * Given a set of integers, the task is to divide it into two sets S1 and S2 
 * such that the absolute difference between their sums is minimum. 
 * 
 * ans.
 * If there is a set S with n elements, then if we assume Subset1 has m elements, 
 * Subset2 must have n-m elements and the value of abs(sum(Subset1) – sum(Subset2)) should be minimum.
 * 
 * Range of possible sums -> [0, sigma(arr[i])] (0 because we can consider 
 * null set and max sum by adding all elements).
 * 
 * we know s1 + s2 = sigma(arr[i]) (where s1 is sum of elements in s1 and s2 is sum of elements in s2).
 * then s2 = sigma(arr[i]) - s1;
 * 
 * we have to find abs(s2 - s1) = minDifference (put value if s2 in this eq)
 * then minDifference = sigma(arr[i]) - s1 - s1 = sigma(arr[i]) - 2s1
 * 
 * now we have to minimize this value -> sigma(arr[i]) - 2s1
 */

const minimumSubsetSumDifference = (items) => {
    const maxSumSubset = items.reduce((a, b) => a + b);
    // find all the possible sums using current array elements in range(0, sigma(arr[i]))
    let allSubsetSums = getAllSubsetsInRange(items, maxSumSubset);
    // convert boolean to int values
    allSubsetSums = convertIndexToNumber(allSubsetSums);
    
    // we only need the know s1 and which will be present in first half of the array
    allSubsetSums.splice(allSubsetSums.length / 2);

    // now we have to minimize sigma(arr[i]) - 2s1
    let maxDifference = maxSumSubset;
    const minDifference = allSubsetSums.reduce((minDifference, subSetSum) => {
        const currentDifferce = maxSumSubset - 2 * subSetSum
        if(minDifference >  currentDifferce) return currentDifferce;
        return minDifference;
    }, maxDifference);

    console.log(minDifference);
}

// it will return bottom row which means it will return which sums are possible in range (0 to range)
function getAllSubsetsInRange(items, range) {
    const table = new Array(items.length + 1).fill().map(_ => Array(range + 1).fill(false));
    for(let i = 0; i <= items.length; i++) table[i][0] = true;

    for(let i = 1; i <= items.length; i++) {
        const currentItem = items[i - 1];
        for(let j = 1; j <= range; j++) {
            const currentSum = j;
            if(currentSum >= currentItem) {
                const itemIncluded = table[i - 1][currentSum - currentItem];
                const itemExcluded = table[i - 1][currentSum];

                table[i][j] = itemIncluded || itemExcluded;
                continue;
            }
            const itemExcluded = table[i - 1][currentSum];
            table[i][j] = itemExcluded;
        }
    }
    // return last row which has all the subset sums possible
    return table[items.length];
}
function convertIndexToNumber(items) {
    return items.reduce((acc, item, index) => { 
        item && acc.push(index); 
        return acc;
    }, []);
}

let items = [1, 2, 7];
minimumSubsetSumDifference(items);