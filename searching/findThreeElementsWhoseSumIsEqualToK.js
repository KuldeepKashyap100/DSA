// time -> O(n^3) | space -> O(1)
const findElements = (input, sum) => {
    for(let i = 0; i < input.length; i++) {
        for(let j = i + 1; j < input.length; j++) {
            for(let k = j + 1; k < input.length; k++) {
                if(input[i] + input[j] + input[k] === sum) {
                    console.log(input[i], input[j], input[k]);
                    return;
                }
            }
        }
    }
}

// time -> O(nlogn + n^2) | space -> O(1)
const findElementsImproved = (input, sum) => {
    for(let i = 0; i < input.length; i++) {
        let left = i + 1, right = input.length - 1;
        while(left < right) {
            currenSum = input[i] + input[left] + input[right];
            if(currenSum === sum) {
                console.log(input[i], input[left], input[right]);
                return;
            }
            if(currenSum < sum) left++;
            if(currenSum > sum) right--;
        }
    }
}

const input = [5, 2, 9, 11, 66];
findElements(input, 18);
findElementsImproved(input, 18);