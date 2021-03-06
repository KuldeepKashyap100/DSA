/**
 * problem - Given weights and values of n items, 
 * put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
 **/

// time -> O(2^n) | space -> O(n)
const knapsack = (values, weights, capacity) => {
    const table = Array.from({length: weights.length + 1}, _ => new Array(capacity + 1).fill(-1));

    const maximizedValueSum = knapsackUtil(values, weights, capacity, weights.length);
    knapsackMemoization(values, weights, capacity, weights.length, table);
    console.log(maximizedValueSum, table);
    knapsackBottomUpApproach(values, weights, capacity);
}

// Recursive approach
function knapsackUtil(values, weights, capacity, totalItemsAvailable) {
    if(capacity === 0 || totalItemsAvailable === 0) return 0;
    const currentWeight = weights[totalItemsAvailable - 1];
    const currentValue = values[totalItemsAvailable - 1];

    if(currentWeight <= capacity) {
        const included = knapsackUtil(values, weights, capacity - currentWeight, totalItemsAvailable - 1);
        const notIncluded = knapsackUtil(values, weights, capacity, totalItemsAvailable - 1);

        return Math.max(currentValue + included, notIncluded);
    }
    return knapsackUtil(values, weights, capacity, totalItemsAvailable - 1);
}

// Recursive + memoization
// time -> O(NC) | space -> O(NC)
const knapsackMemoization = (values, weights, capacity, totalItemsAvailable, table) => {
    // base condition
    if(capacity === 0 || totalItemsAvailable === 0) return 0;

    // return memoized output if available
    if(table[totalItemsAvailable][capacity] !== -1) return table[totalItemsAvailable][capacity];

    const currentWeight = weights[totalItemsAvailable - 1];
    const currentValue = values[totalItemsAvailable - 1];

    if(currentWeight <= capacity) {
        const included = knapsackMemoization(values, weights, capacity - currentWeight, totalItemsAvailable - 1, table);
        const notIncluded = knapsackMemoization(values, weights, capacity, totalItemsAvailable - 1, table);

        return table[totalItemsAvailable][capacity] = Math.max(currentValue + included, notIncluded);
    }
    return table[totalItemsAvailable][capacity] = knapsackMemoization(values, weights, capacity, totalItemsAvailable - 1, table);
}

// Bottom up approach
// time -> O(NC) | space -> O(NC)
const knapsackBottomUpApproach = (values, weights, capacity) => {
    const table = new Array(weights.length + 1).fill().map(_ => new Array(capacity + 1).fill(0));
    for(let i = 1; i <= weights.length; i++) {
        const currentWeight = weights[i - 1];
        const currentValue = values[i - 1];
        
        for(let j = 1; j <= capacity; j++) {
            if(j >= weights[i - 1]) {
                const itemIncluded = currentValue + table[i - 1][j - currentWeight];
                const itemExcluded = table[i - 1][j];
                table[i][j] = Math.max(itemIncluded, itemExcluded);
                continue;
            }
            const itemExcluded = table[i - 1][j];
            table[i][j] = itemExcluded;
        }
    }
    console.log(table)
}

let values = [1, 4, 5, 6];
let weights = [2, 3, 6, 7];
let capacity = 10;
knapsack(values, weights, capacity);