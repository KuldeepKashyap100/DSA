
// time -> O(n^2) | space -> O(1)
const findDuplicateElementsPolynomial = (input) => {
    for(let i = 0; i < input.length; i++) {
        for(let j = i + 1; j < input.length; j++) {
            if(input[i] === input[j]) {
                console.log(input[i]);
                return;
            }
        }
    }
}

// time -> O(nlogn) | space -> O(1)
const findDuplicateElementsLinearLogarithmic = (input) => {
    input.sort((a,b) => a-b);
    for(let i = 1; i < input.length; i++) {
        if(input[i] === input[i - 1]) {
            console.log(input[i]);
            return;
        }
    }
}

// time -> O(n) | space -> O(n)
const findDuplicateElementsLinear = (input) => {
    const hashMap = new Map();
    for(let i = 0; i < input.length; i++) {
        if(hashMap.has(input[i])) {
            console.log(input[i]);
            return;
        }
        hashMap.set(input[i], 1);
    }
}

/**
 * time -> O(n) | space -> O(1)
 * applicable only if all the elements are in the range [0, n-1]
 * and all the elements are positive
 */
const findDuplicateElementsLinearImprovedSpace = (input) => {
    for(let i = 0; i < input.length; i++) {
        if(input[Math.abs(input[i])] < 0) {
            console.log(Math.abs(input[i]));
            return;
        }
        input[Math.abs(input[i])] = -input[Math.abs(input[i])];
    }
}

let input = [3,5,2,4,6,1,2];
findDuplicateElementsPolynomial(input);
findDuplicateElementsLinearLogarithmic(input);
findDuplicateElementsLinear(input);
input = [3,2,5,4,6,1,2]
findDuplicateElementsLinearImprovedSpace(input);


