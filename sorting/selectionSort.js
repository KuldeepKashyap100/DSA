
/**
 *  It is called selection sort because it repeatedly selects smallest element.
 *  It works well with small files.
 *  It is a in place sorting algo. so no additional space required. 
 *  It requires the minimum number of swaps.
 *  time -> worst case -> O(N^2) 
 */
const selectionSort = (input) => {
    for(let i = 0; i < input.length; i++) {
        let min = i;
        // find smallest element
        for(let j = i + 1; j < input.length; j++) {
            if(input[j] < input[min])
                min = j;
        }
        // swap smallest element
        [input[i], input[min]] = [input[min], input[i]];
    }
}

const input = [64, 34, 25, 12, 22, 11, 90];
selectionSort(input);

console.log(input);

/**
 * why selection sort is not stable?
 * Basically in selection sort, swap that occurs at the end of each "round" 
 * can change the relative order of items having the same value.
 * 
 * for example, suppose you sorted 4 2 3 4 1 with selection sort.
 * the first "round" will go through each element looking for the minimum element. 
 * it will find that 1 is the minimum element. 
 * then it will swap the 1 into the first spot. this will cause the 4 in the first spot to go into the last spot: 1 2 3 4 4
 * 
 * To make this stable, instead of swaping values, insert the 'least' value instead.
 */
