/**
 * find frequencies of all the elements without using extra space.
 * assume all the elements are in the range [0, n-1] and positive.
 * where n is the size of the array.
 */

// we can sort and then count it will take O(nlogn).

//Alternative better approach
// time -> O(n) | space -> O(1)

const findFrequencies = (input) => {
    let position = 0;
    while(position < input.length) {
        const expectedPosition = input[position] - 1;
        if(input[position] > 0 && input[expectedPosition] > 0) {
            [input[position], input[expectedPosition]] = [input[expectedPosition], input[position]];
            input[expectedPosition] = -1;
        }
        else if(input[position] > 0) {
            input[expectedPosition]--;
            input[position] = 0;
        }
        else {
            position++;
        }
    }
}

const input = [5, 4, 2, 5, 2];
findFrequencies(input);
console.log(input);