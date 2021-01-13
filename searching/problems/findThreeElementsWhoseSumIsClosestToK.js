// time -> O(n) | space -> O(1)
const findThreeElementsWhoseSumIsClosestToK = (input, k) => {
    input.sort((a, b) => a - b);
    let closestSum = Infinity;
    for(let i = 0; i < input.length - 2; i++) {
        let left = i + 1, right = input.length - 1;
        let positiveClosest = Infinity, negativeClosest = -Infinity;
        while(left < right) {
            const currentSum = input[i] + input[left] + input[right];
            if(Math.abs(k - closestSum) > Math.abs(k - currentSum)) closestSum = currentSum;
            if(currentSum > k) {
                right--;
            }
            else if(currentSum < k) {
                left++;
            }
        }
    }
    console.log(closestSum);
}


const input = [1, 2, 3, 4, -10];
findThreeElementsWhoseSumIsClosestToK(input, 10);
