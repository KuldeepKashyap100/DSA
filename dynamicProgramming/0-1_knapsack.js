const knapsack = (values, weights, capacity) => {
    const valueSum = knapsackUtil(values, weights, capacity, weights.length);
    const table = Array.from({length: weights.length + 1}, _ => new Array(capacity + 1).fill(-1));
    knapsackMemoization(values, weights, capacity, weights.length, table);
    console.log(table);
}

function knapsackUtil(values, weights, capacity, weightsLength) {
    if(capacity === 0 || weightsLength === 0) return 0;
    if(weights[weightsLength - 1] <= capacity) {
        const included = knapsackUtil(values, weights, capacity - weights[weightsLength - 1], weightsLength - 1);
        const notIncluded = knapsackUtil(values, weights, capacity, weightsLength - 1);

        return Math.max(values[weightsLength-1] + included, notIncluded);
    }
    return knapsackUtil(values, weights, capacity, weightsLength - 1);
}

const knapsackMemoization = (values, weights, capacity, weightsLength, table) => {
    if(capacity === 0 || weightsLength === 0) return 0;
    if(table[weightsLength][capacity] !== -1) return table[weightsLength][capacity];

    if(weights[weightsLength - 1] <= capacity) {
        const included = knapsackMemoization(values, weights, capacity - weights[weightsLength - 1], weightsLength - 1, table);
        const notIncluded = knapsackMemoization(values, weights, capacity, weightsLength - 1, table);

        return table[weightsLength][capacity] = Math.max(values[weightsLength-1] + included, notIncluded);
    }
    return table[weightsLength][capacity] = knapsackMemoization(values, weights, capacity, weightsLength - 1, table);
}

let values = [1, 4, 5, 6];
let weights = [2, 3, 6, 7];
let capacity = 10;
knapsack(values, weights, capacity);