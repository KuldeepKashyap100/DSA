// time -> O(N^2) | space -> O(1)
const findElementAppearsMaximumInListPolynomial = (input) => {
    let count, max = 0, element;
    for(let i = 0; i < input.length; i++) {
        count = 1;
        for(let j = i + 1; j < input.length; j++) {
            if(input[i] === input[j]) count++;
            if(max < count) {
                element = input[i];
                max = count;
            }
        }
    }
    console.log(element, max);
}

// time -> O(nlogn) | space -> O(1)
const findElementAppearsMaximumInListLinearLogarthmic = (input) => {
    input.sort((a, b) => a - b);
    let count = 1, max = 0, element;
    for(let i = 1; i < input.length; i++) {
        if(input[i] === input[i - 1]) count++;
        else count = 1;
        if(max < count) {
            element = input[i];
            max = count;
        }
    }
    console.log(element, max);
}

// time -> O(n) | space -> o(n)
const findElementAppearsMaximumInListLinear = (input) => {
    const hashMap = new Map();
    for(let i = 0; i < input.length; i++) {
        if(!hashMap.has(input[i])) hashMap.set(input[i], 1);
        else hashMap.set(input[i], hashMap.get(input[i]) + 1);
    }
    let max = 0, element;
    hashMap.forEach((value, key)=> {
        if(max < value) {
            max = value;
            element = key;
        }
    })
    console.log(element, max);
}

// time -> O(n) | space -> O(1)
// applicable only if all the elements are in the range [0, n-1]
// and all the elements are positive
const findElementAppearsMaximumInListLinearImprovedSpace = (input) => {
    for(let i = 0; i < input.length; i++) {
        const currentValueIndex = input[i] % input.length;
        input[currentValueIndex] += input.length;
    }
    let max = 0, element;
    for(let i = 0; i < input.length; i++) {
        const currentCount = Math.floor(input[i] / input.length);
        if(max < currentCount) {
            max = currentCount;
            element  = input[i] % input.length; 
        }
    }
    console.log(element, max);
}


let input = [1, 3, 2, 1, 2, 2, 2, 1, 3, 1, 3, 3, 2, 3, 2];
findElementAppearsMaximumInListPolynomial(input);
findElementAppearsMaximumInListLinearLogarthmic(input);
input = [1, 3, 2, 1, 2, 2, 2, 1, 3, 1, 3, 3, 2, 3, 2];
findElementAppearsMaximumInListLinear(input);
findElementAppearsMaximumInListLinearImprovedSpace(input);