// time -> O(n + m) | space -> O(n + m) 
const medianOfTwoSortedArraysOfDifferentSizeBruteForce = (firstList, secondList) => {
    let firstListIndex = 0, secondListIndex = 0, insertIndex = 0;
    const sortedList = [];
    while(firstListIndex < firstList.length && secondListIndex < secondList.length) {
        sortedList[insertIndex++] = firstList[firstListIndex] < secondList[secondListIndex] ? 
        firstList[firstListIndex++] : 
        secondList[secondListIndex++];
    }
    while(firstListIndex < firstList.length) sortedList[insertIndex++] = firstList[firstListIndex++];
    while(secondListIndex < secondList.length) sortedList[insertIndex++] = secondList[secondListIndex++];
    return sortedList.length % 2 !== 0 ? 
        sortedList[Math.floor((sortedList.length - 1)/2)] : 
        (sortedList[Math.floor((sortedList.length - 1) /2)] + sortedList[Math.ceil((sortedList.length - 1) /2)]) / 2;
}

// time -> O(logn) | space -> O(1)
const efficientApproach = (firstList, secondList) => {

}

let x = [1, 3, 8, 9, 15];
let y = [7, 11, 18, 19, 21, 25];
console.log(medianOfTwoSortedArraysOfDifferentSizeBruteForce(x, y));
x = [23, 26, 31, 35];
y = [3, 5, 7, 9, 11, 16];
console.log(medianOfTwoSortedArraysOfDifferentSizeBruteForce(x, y));