// time -> O(2n) | space -> O(1)
const sepearte = (input) => {
    const zeroCount = 0;
    let count = 0;
    for(let i = 0; i < input.length; i++) {
        if(input[i] === 0 ) count++;
    }
    for(let i = 0; i < input.length; i++) { 
        if(count) {
            input[i] = 0;
            count--;
        }
        else input[i] = 1;
    }
}

// time -> O(n) | space -> O(1)
const sepearteEfficient = (input) => {
    let left = 0, right = input.length - 1;
    while(left < right) {
        while(input[left] === 0 && left < right) left++;
        while(input[right] !== 0 && left < right) right--;
        if(left < right) {
            [input[left], input[right]] = [input[right], input[left]];
        }
    }
}

let input = [1, 1, 1, 0, 1, 1, 0, 0, 0];
sepearte(input);
console.log(input);

input = [1, 1, 1, 0, 1, 1, 0, 0, 0];
sepearteEfficient(input);
console.log(input);