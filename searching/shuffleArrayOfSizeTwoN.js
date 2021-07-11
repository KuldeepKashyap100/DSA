/**
 * shuffle array of 2n, a1,b1,a2,b2... without using extra space.
 * time -> O(N^2) | space -> O(1)
 */

const shuffle = () => {
    const n = input.length / 2;

    let leftPointer = 1;
    for(let i = n; i < 2 * n; i++) {
        for(let j = i ; j > leftPointer; j--) {
            [input[j-1], input[j]] = [input[j], input[j - 1]];
        }
        leftPointer = leftPointer + 2;
    }
    console.log(input);
}


const shuffleDivideAndConquer = (input, left, right) => {
    if(left > right) return;
    if(right - left === 1) return;

    const mid = Math.floor((left + right) / 2);
    // swap elements around middle
    const middleIndexOfFirstList = Math.floor((left + mid) / 2);
    let startOfSecondList = mid + 1;
    for(let i = middleIndexOfFirstList + 1; i <= mid; i++) {
        [input[i], input[startOfSecondList]] = [input[startOfSecondList], input[i]];
        startOfSecondList++;
    }
    shuffleDivideAndConquer(input, left, mid);
    shuffleDivideAndConquer(input, mid + 1, right);
}

let input = [1, 3, 5, 7, 2, 4, 6, 8];
shuffle(input);
input = [1, 3, 5, 7, 2, 4, 6, 8];
shuffleDivideAndConquer(input, 0, input.length - 1);
console.log(input);
