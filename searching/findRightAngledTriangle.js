/**
 * find i, j, k indices such that input[i]^2 + input[j]^2 = input[k]^2
 * time -> O(n^3) |  space -> O(1)
 */
const findRightAngleTriangle = (input) => {
    for(let i = 0; i < input.length; i++) {
        for(let j = i + 1; j < input.length; j++) {
            for(let k = j + 1; k < input.length; k++) {
                if(Math.pow(input[i], 2) + Math.pow(input[j], 2) === Math.pow(input[k], 2)) {
                    console.log(input[i], input[j], input[k]);
                    return;
                }
            }
        }
    }
}

// time -> O(n^2) | space -> (n^2)
const findRightAngleTriangleUsingHashing= (input) => {
    const hashMap = new Map();
    for(let i = 0; i < input.length; i++) {
        for(let j = i + 1; j < input.length; j++) {
            hashMap.set(Math.pow(input[i], 2) + Math.pow(input[j], 2), [i, j]);
        }
    }
    for(let i = 0; i < input.length; i++) {
        if(hashMap.has(Math.pow(input[i], 2))) {
            const [p, q] = hashMap.get(Math.pow(input[i], 2));
            console.log(input[p], input[q], input[i]);
        }
    }
}

// time -> O(n^2) | space -> O(1)
const findRightAngleTriangleUsingSorting = (input) => {
    input.sort((a, b) => a - b).forEach((_, i) => input[i] = Math.pow(_,2));
    for(let i = input.length - 1; i > 1; i--) {
        let left = 0, right = i - 1;
        while(left < right) {
            const currentSum = input[left] + input[right];
            if(currentSum === input[i]) {
                console.log(input[left], input[right], input[i]);
                return;
            }
            if(currentSum < input[i]) left++;
            if(currentSum > input[i]) right--;
        }
    }
}


const input = [8, 2, 3, 4, 7, 6, 5, 1];
findRightAngleTriangle(input);
findRightAngleTriangleUsingHashing(input);
findRightAngleTriangleUsingSorting(input);;