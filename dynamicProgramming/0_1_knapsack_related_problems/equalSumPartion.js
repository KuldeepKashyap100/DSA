/**
 * Partition problem is to determine whether a given set can be partitioned into two subsets,
 * such that the sum of elements in both subsets is the same. 
 */
const equalSumPartion = (items) => {
    const totalSum = items.reduce((a, b) => a + b);
    if(totalSum % 2 !== 0) return console.log(false);

    const sumOfEqualPartition = totalSum / 2;
    console.log(isSubsetSumPresent(items, sumOfEqualPartition, items.length));
}

function isSubsetSumPresent(items, partitionSum, totalItems) {
    if(!partitionSum) return true;
    if(partitionSum && !totalItems) return false;

    const currentItem = items[totalItems - 1];
    if(partitionSum >= currentItem) {
        const itemIncluded = isSubsetSumPresent(items, partitionSum - currentItem, totalItems - 1);
        const itemExcluded = isSubsetSumPresent(items, partitionSum, totalItems - 1);

        return itemIncluded || itemExcluded;
    }

    const itemExcluded = isSubsetSumPresent(items, partitionSum, totalItems - 1);
    return itemExcluded;
}

let items = [1, 5, 11, 5];
equalSumPartion(items);