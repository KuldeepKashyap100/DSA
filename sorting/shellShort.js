/**
 * time -> depends on the gap sequence
 * worst case -> Depends on gap sequence
 * average case -> O(nlog^2n) or or n^(3/2)
 * best case -> O(n)
 */

const shellShort = (input) => {
    // let gap;
    // for(gap = 1; gap < input.length / 9; gap = 3 * gap + 1);

    // for(; gap > 0; gap = Math.floor(gap / 3)) {
    //     insertionSort(input, gap);
    // }

    //or

    for(let gap = Math.floor(input.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        insertionSort(input, gap);
    }
    
}

const insertionSort = (input, gap) => {
    for(let i = gap; i < input.length; i++) {
        const currentElement = input[i];
        let j = i -1;
        while(currentElement < input[j] && j >= 0) {
            input[j + 1] = input[j];
            j--;
        }
        input[j + 1] = currentElement;
    }
}

const input = [12, 34, 54, 2, 3, 12, 34, 54, 2, 3, 12, 34, 54, 2, 3];
shellShort(input);

console.log(input);