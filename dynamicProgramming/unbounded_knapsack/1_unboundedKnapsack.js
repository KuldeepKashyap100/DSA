/**
 * Given a unboundedKnapsack weight W and a set of n items with certain value vali and weight wti, 
 * we need to calculate the maximum amount that could make up this quantity exactly. 
 * This is different from classical unboundedKnapsack problem, 
 * here we are allowed to use unlimited number of instances of an item.
 */
const unboundedKnapsack = (values, weights, capacity) => {
    const table = Array.from({length: weights.length + 1}, _ => new Array(capacity + 1).fill(-1));

    const maximizedValueSum = unboundedKnapsackUtil(values, weights, capacity, weights.length);
    unboundedKnapsackMemoization(values, weights, capacity, weights.length, table);
    unboundedKnapsackBottomUpApproach(values, weights, capacity);
    console.log(maximizedValueSum, table);
}

// Recursive approach
function unboundedKnapsackUtil(values, weights, capacity, totalItemsAvailable) {
    if(capacity === 0 || totalItemsAvailable === 0) return 0;
    const currentWeight = weights[totalItemsAvailable - 1];
    const currentValue = values[totalItemsAvailable - 1];

    if(currentWeight <= capacity) {
        // even if we included the item it not yet processed completely (unlike o/1 knapsack),
        // beacuse we have multiple instances of same item that's why can select it again
        const included = unboundedKnapsackUtil(values, weights, capacity - currentWeight, totalItemsAvailable);
        const notIncluded = unboundedKnapsackUtil(values, weights, capacity, totalItemsAvailable - 1);

        return Math.max(currentValue + included, notIncluded);
    }
    return unboundedKnapsackUtil(values, weights, capacity, totalItemsAvailable - 1);
}

// Recursive + memoization
// time -> O(NC) | space -> O(NC)
const unboundedKnapsackMemoization = (values, weights, capacity, totalItemsAvailable, table) => {
    // base condition
    if(capacity === 0 || totalItemsAvailable === 0) return 0;

    // return memoized output if available
    if(table[totalItemsAvailable][capacity] !== -1) return table[totalItemsAvailable][capacity];

    const currentWeight = weights[totalItemsAvailable - 1];
    const currentValue = values[totalItemsAvailable - 1];

    if(currentWeight <= capacity) {
        const included = unboundedKnapsackMemoization(values, weights, capacity - currentWeight, totalItemsAvailable, table);
        const notIncluded = unboundedKnapsackMemoization(values, weights, capacity, totalItemsAvailable - 1, table);

        return table[totalItemsAvailable][capacity] = Math.max(currentValue + included, notIncluded);
    }
    return table[totalItemsAvailable][capacity] = unboundedKnapsackMemoization(values, weights, capacity, totalItemsAvailable - 1, table);
}

// Bottom up approach
// time -> O(NC) | space -> O(NC)
const unboundedKnapsackBottomUpApproach = (values, weights, capacity) => {
    const table = new Array(weights.length + 1).fill().map(_ => new Array(capacity + 1).fill(0));
    for(let i = 1; i <= weights.length; i++) {
        for(let j = 1; j <= capacity; j++) {
            const currentWeight = weights[i - 1];
            const currentValue = values[i - 1];

            if(j >= currentWeight) {
                const itemIncluded = currentValue + table[i][j - currentWeight];
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

let values = [10, 40, 50, 70];
let weights = [1, 3, 4, 5];
let capacity = 8;

// values = [1, 4, 5, 6];
// weights = [2, 3, 6, 7];
// capacity = 10;
unboundedKnapsack(values, weights, capacity);