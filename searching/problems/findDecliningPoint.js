// time -> O(N) | space -> O(1)
const findDecliningPoint = (input) => {
    for(let i = 0; i < input.length - 1; i++) {
        if(input[i] > input[i + 1]) {
            console.log(input[i]);
            return;
        }
    }
}

// time -> O(logn) | space -> O(1)
// variant of binary search without recursion
const findDecliningPointImproved = (input, left, right) => {
    while(left <= right) {
        if(left === right) return input[left];
        if(left === right - 1) return Math.max(input[left], input[right]);
        const mid = Math.floor(left + (right - left) / 2);
        if(input[mid] > input[mid - 1] && input[mid] > input[mid + 1])
            return input[mid];
        if(input[mid] > input[mid - 1] && input[mid] < input[mid + 1] )
            left = mid + 1;
        if(input[mid] < input[mid - 1] && input[mid] > input[mid + 1])
            right = mid - 1;
    }
}

// alternate solution move at the rate of 2.
// time -> O(logn) | space -> O(1)
const findDecliningPointMoveFaster = (input) => {
    for(let i = 0; i < input.length - 1; i = i + 2) {
        if(input[i] > input[i + 1]) {
            while(input[i] < input[i - 1]) i--;
            console.log(input[i]);
            return;
        }
    }
}

const input = [1, 2, 3, 3.5, 4, 4.5, 3, 2, 1];
findDecliningPoint(input);
console.log(findDecliningPointImproved(input, 0, input.length - 1));
findDecliningPointMoveFaster(input)