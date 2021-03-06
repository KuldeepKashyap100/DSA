/**
 * Find number of subsets which satisfies s1 - s2 = givenDiff,
 * where s1 and s2 is sum of all number in subset.
 * 
 * now we know s1 + s2 = sigma(arr[i])
 * adding both eq.
 * 2s1 = sigma(arr[i]) + givenDiff;
 * s1 = (sigma(arr[i]) + givenDiff) / 2;
 * 
 * using the above formula we have to only find s1
 */

const countTheNumberOfSubsetWithGivenDifference = (items, givenDiff) => {
    const sum = items.reduce((a, b) => a + b);
    const s1 = (sum + givenDiff) / 2;

    const possibleSubsetsCount = getAllSubsetsInRange(items, s1);
    console.log(possibleSubsetsCount);
}

function getAllSubsetsInRange(items, sum) {
    const table = new Array(items.length + 1).fill().map(_ => Array(sum + 1).fill(0));
    for(let i = 0; i <= items.length; i++) table[i][0] = 1;
    
    for(let i = 1; i <= items.length; i++) {
        const currentItem = items[i - 1];
        for(let j = 1; j <= sum; j++) {
            const currentSum = j;
            if(currentSum >= currentItem) {
                const itemIncluded = table[i - 1][currentSum - currentItem];
                const itemExcluded = table[i - 1][currentSum];

                table[i][j] = itemIncluded + itemExcluded;
                continue;
            }
            const itemExcluded = table[i - 1][currentSum];
            table[i][j] = itemExcluded;

        }
    }
    return table[items.length][sum];
}

let items = [1, 1, 2, 3];
let diff = 1;
// result 3 beacuse {s1 = [1, 1, 2], s2 =[3]}, {s1 = [1, 2], s2 = [1, 3]}, {s1 = [1, 2], s2 = [1, 3]} 
// 1 in s1 in result-2 and result-3 are different because there are two 1's in input.
countTheNumberOfSubsetWithGivenDifference(items, diff);