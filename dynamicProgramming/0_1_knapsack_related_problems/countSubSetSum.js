/**
 * Given an array of integers, and a number ‘sum’, 
 * find the number of pairs of integers in the array whose sum is equal to ‘sum’.
 */
const countSubsetSum = (items, sum) => {
    const totalSubsets = countSubsetSumUtil(items, sum, items.length);
    const table = new Array(items.length + 1).fill().map(_ => new Array(sum + 1).fill(0));
    for(let i = 0; i < items.length + 1; i++) table[i][0] = 1;
    countSubsetSumMemoization(items, sum, items.length, table);
    console.log(totalSubsets, table);
    countSubsetSumBottomUp(items, sum);

} 
// Recursive
function countSubsetSumUtil(items, sum, totalItemsAvailable) {
    if(!sum) return 1;
    if(!totalItemsAvailable) return 0;

    const currentItem = items[totalItemsAvailable - 1];
    if(sum >= currentItem) {
        const itemIncluded = countSubsetSumUtil(items, sum - currentItem, totalItemsAvailable - 1);
        const itemExcluded = countSubsetSumUtil(items, sum, totalItemsAvailable - 1);
        
        return itemIncluded + itemExcluded;
    }
    const itemExcluded = countSubsetSumUtil(items, sum, totalItemsAvailable - 1);
    return itemExcluded;
}

// Recursive + memoization
function countSubsetSumMemoization(items, sum, totalItemsAvailable, table) {
    if(!sum) return 1;
    if(!totalItemsAvailable) return 0;

    if(table[totalItemsAvailable][sum]) return table[totalItemsAvailable][sum];

    const currentItem = items[totalItemsAvailable - 1];
    if(sum >= currentItem) {
        const itemIncluded = countSubsetSumMemoization(items, sum - currentItem, totalItemsAvailable - 1, table);
        const itemExcluded = countSubsetSumMemoization(items, sum, totalItemsAvailable - 1, table);

        return table[totalItemsAvailable][sum] = itemIncluded + itemExcluded;
    }
    const itemExcluded = countSubsetSumMemoization(items, sum, totalItemsAvailable - 1, table);
    return table[totalItemsAvailable][sum] = itemExcluded;
}

// bottom up approach
function countSubsetSumBottomUp(items, sum) {
    const table = new Array(items.length + 1).fill().map(_ => new Array(sum + 1).fill(0));
    for(let i = 0; i < items.length + 1; i++) table[i][0] = 1;
    
    for(let i = 1; i <= items.length; i++) {
        const currentItem = items[i - 1];
        for(let j = 1; j <= sum; j++) {
            const currentSum = j;
            if(currentSum >=  currentItem) {
                const itemIncluded = table[i - 1][currentSum - currentItem];
                const itemExcluded = table[i - 1][currentSum];

                table[i][j] = itemIncluded + itemExcluded;
                continue;
            }
            const itemExcluded = table[i - 1][currentSum];
            table[i][j] = itemExcluded;
        }
    }
    console.log(table);
}

let items = [2, 3, 7, 8, 10];
items = [2, 3, 5, 6, 8, 10];
let sum = 10;
countSubsetSum(items, sum);