/**
 * find two elements in given array whose sum is equal to given sum.
 * time -> O(n^2) | space -> O(1)
 */

const findElementsPolynomial = (input, k) => {
    for(let i = 0; i < input.length; i++) {
        for(let j = i + 1; j < input.length; j++) {
            if(input[i] + input[j] === k) {
                console.log(input[i], input[j]);
                return
            }
        }
    }
}

// time -> O(nlongn) | space -> O(1)
const findElementsLinearLogarthmic = (input, k) => {
    input.sort((a,b) => a - b);
    let i = 0, j = input.length - 1;
    while(i < j) {
        const currentSum = input[i] + input[j];
        if(currentSum === k) {
            console.log(input[i], input[j]);
            return;
        }
        if(currentSum < k) i++;
        if(currentSum > k) j--;
    }
}

// we can also use hash map

const input = [5, 2, 9, 11, 66];
findElementsPolynomial(input, 13);
findElementsLinearLogarthmic(input, 13);
