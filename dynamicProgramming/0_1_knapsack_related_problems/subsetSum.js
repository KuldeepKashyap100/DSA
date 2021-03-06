/**
 * Given a set of non-negative integers, and a value sum, 
 * determine if there is a subset of the given set with sum equal to given sum. 
 **/

const subsetSum = (items, sum) => {
    // recursive
    const subsetPresent = subsetSumUtil(items, sum, items.length);
    // memoization
    const table = new Array(items.length + 1).fill().map(_ => new Array(sum + 1).fill(0));
    // base condition
    for(let i = 1; i <= sum; i++) table[0][i] = false;
    for(let i = 0; i <= items.length; i++) table[i][0] = true;
    subsetSumMemoized(items, sum, items.length, table);
    console.log(subsetPresent, table);

    subsetSumBottomUp(items, sum, items.length);
}
// Recursive approach
function subsetSumUtil(items, sum, totalItemsAvailable) {
    if(!sum) return true;
    if(sum && !totalItemsAvailable) return false;

    const currentItem = items[totalItemsAvailable - 1];
    if(sum >= currentItem) {
        const itemIncluded = subsetSumUtil(items, sum - currentItem, totalItemsAvailable - 1);
        const itemExcluded = subsetSumUtil(items, sum, totalItemsAvailable - 1);

        return itemIncluded || itemExcluded;
    }
    const itemExcluded = subsetSumUtil(items, sum, totalItemsAvailable - 1);
    return itemExcluded;
}

// Recursive + memoization
function subsetSumMemoized(items, sum, totalItemsAvailable, table) {
    if(!sum) return true;
    if(sum && !totalItemsAvailable) return false;
    if(table[totalItemsAvailable][sum] !== 0) return table[totalItemsAvailable][sum];

    const currentItem = items[totalItemsAvailable - 1];
    if(sum >= currentItem) {
        const itemIncluded = subsetSumMemoized(items, sum - currentItem, totalItemsAvailable - 1, table);
        const itemExcluded = subsetSumMemoized(items, sum, totalItemsAvailable - 1, table);
        return table[totalItemsAvailable][sum] = itemIncluded || itemExcluded;
    }

    const itemExcluded = subsetSumMemoized(items, sum, totalItemsAvailable - 1,table);
    return table[totalItemsAvailable][sum] = itemExcluded;
}

// bottom up approach
function subsetSumBottomUp(items, sum) {
    const table = new Array(items.length + 1).fill().map(_ => new Array(sum + 1).fill(0));
    // base condition
    for(let i = 1; i <= sum; i++) table[0][i] = false;
    for(let i = 0; i <= items.length; i++) table[i][0] = true;

    for(let i = 1; i <= items.length; i++) {
        const currentItem = items[i - 1];
        for(let j = 1; j <= sum; j++) {
            const currentSum = j;
            if(currentItem > currentSum) {
                // item not included
                const itemExcluded = table[i - 1][j];
                table[i][j] = itemExcluded;
                continue;
            }
            const itemIncluded = table[i - 1][j - currentItem];
            const itemExcluded = table[i - 1][j];
            table[i][j] = itemIncluded || itemExcluded; 
        }
    }
    console.log(table);
}
let items = [2, 3, 7, 8, 10];
items = [2, 3, 5, 6, 8, 10];
let sum = 14;
subsetSum(items, sum);