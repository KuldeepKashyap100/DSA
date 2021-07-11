/**
 * time -> depends on the gap sequence
 * worst case -> Depends on gap sequence
 * average case -> O(nlog^2n) or or n^(3/2)
 * best case -> O(n)
 * Advantages: 
 * 1. Efficient for medium size lists(less than 5000 items).
 * 2. fastest of all O(n^2) algorithms.
 * 3. running time depes on the choice of increment sequence.
 */

const shellSort = (input) => {
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

        let j = i;
        for(; currentElement < input[j - gap] && j >= gap; j -= gap) {
            input[j] = input[j - gap];
        }
        input[j] = currentElement;
    }
}

const input = [12, 34, 54, 2, 3, 12, 34, 54, 2, 3, 12, 34, 54, 2, 3];
shellSort(input);
console.log(input);