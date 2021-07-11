/**
 * On the kth pass through the list, take the kth item,
 * and insert it into its rightful place among the first
 * k items in the array.
 * 
 * Advantages
 * 1. works for small data
 * 2. adaptive - if the list is presorted then insertion sort takes O(n + d) where d is no. of inversions.
 * 3. More efficient than bubble and selection.
 * 4. stable alog.
 * 5. In place.
 * 6. mostly used when the data is already sorted due to adaptiveness.
 */
const insertionSort = (input) => {
    for(let i = 1; i < input.length; i++) {
        const currentElement = input[i];
        let j = i - 1;
        for(; currentElement < input[j] && j >= 0; j--) {
            input[j + 1] = input[j];
        }
        input[j + 1] = currentElement;
    }
}

const input = [64, 34, 25, 12, 22, 11, 90];
insertionSort(input);

console.log(input);


/**
 *      $$$$$$$$$$
 *       $$$$
 *      $$$$
 *        $
 * $$$$$$$$$$
 *      $$$$$
 * $$$
 * $$
 * $
 * It starts with the shortest iteration and they gradually get longer,
 * but it does not bother running each iteration all the way. 
 * It stops when it finds the correct spot for the newly added element 
 * which on average happens on the middle. therefore no. of comparisons
 * approximately n^2/4
 */