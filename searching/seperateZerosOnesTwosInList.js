const seperateZerosOnesTwosInList = (input) => {
    let left = 0, mid = 0, right = input.length - 1;
    while (mid <= right) {
        switch (input[mid]) {
            case 0:
                [input[left], input[mid]] = [input[mid], input[left]];
                left++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                [input[right], input[mid]] = [input[mid], input[right]];
                right--;
                break;
        }
    }
}

let input = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
seperateZerosOnesTwosInList(input);
console.log(input);