// time -> O(n) | space -> O(1)

const sepearte = (input) => {
    let left = 0, right = input.length - 1;
    while(left < right) {
        while(input[left]%2 === 0 && left < right) left++;
        while(input[right]%2 !== 0 && left < right) right--;
        if(left < right) {
            [input[left], input[right]] = [input[right], input[left]];
        }
    }
}

const input = [13, 12, 34, 45, 9, 8, 90, 3];
sepearte(input);
console.log(input);