/**
 * On the kth pass through the list, take the kth item,
 * and insert it into its rightful place among the first
 * k items in the array.
 */
const insertionSort = (input) => {
    for(let i = 1; i < input.length; i++) {
        const currentElement = input[i];
        let j;
        for(j = i - 1; currentElement < input[j] && j >= 0  ;j--) {
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