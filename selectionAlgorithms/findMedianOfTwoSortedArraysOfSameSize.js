// time -> O(n) |  space -> O(1)
const findMedianOfTwoSortedArraysOfSameSize = (firstList, secondList) => {
    let firstMedian = -1, secondMedian = -1;
    let i = 0, j = 0;
    for(let count = 0; count <= firstList.length; count++) {
        if(firstList[i] < secondList[j]) {
            firstMedian = secondMedian;
            secondMedian = firstList[i];
            i++;
        }
        else {
            firstMedian = secondMedian;
            secondMedian = secondList[j];
            j++;
        }
    }
    console.log((firstMedian + secondMedian) / 2);
}

/**
 * https://www.geeksforgeeks.org/median-of-two-sorted-arrays/
 * efficient appraoch:
 * median must be b/w medianA and medianB. so we can recusively reduce this range. 
 * base case -> a = [a1, b1] b = [b1, b2]
 * after merging -> [min(a1, b1), {max(a1, b1), min(a2,b2)}, max(a2, b2)]
 * median -> (max(a1, b1), min(a2,b2)) / 2
 * time -> O(logn) | space -> O(1)
 */
const efficientApproach = (firstList, firstListLeft, firstListRight, secondList, secondListLeft, secondListRight) => {
    if(firstListRight - firstListLeft === 1 || secondListRight - secondListLeft === 1) {
        const mid = (Math.max(firstList[firstListLeft], secondList[secondListLeft]) + Math.min(firstList[firstListRight], secondList[secondListRight])) / 2;
        console.log(mid);
        return;
    }

    const midFirst = Math.floor((firstListLeft + firstListRight) / 2);
    const midSecond = Math.floor((secondListLeft + secondListRight) / 2);

    if(firstList[midFirst] === secondList[midSecond]) {
        console.log(firstList[midFirst]);
        return;
    }


    if(firstList[midFirst] < secondList[midSecond]) efficientApproach(firstList, midFirst, firstListRight, secondList, secondListLeft, midSecond);
    else efficientApproach(firstList, firstListLeft, midFirst , secondList, midSecond, secondListRight);

}


let first = [1, 12, 15, 26, 38];
let second = [2, 13, 17, 30, 45];
// first = [1, 2, 3, 4, 5];
// second = [6, 7, 8, 9, 10];
// first = [1, 2, 3, 6]; 
// second = [4, 6, 8, 10]; 
findMedianOfTwoSortedArraysOfSameSize(first, second);
efficientApproach(first, 0, first.length -1, second, 0, second.length - 1)