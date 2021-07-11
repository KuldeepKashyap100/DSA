// time -> O(N) | space -> O(1)

const findNumberOccuringOddNumberOfTimesInLinearTimeConstantSpace = (input) => {
    let xorOfAllElements = input[0];
    for(let i = 1; i < input.length; i++) {
        xorOfAllElements ^= input[i];
    }
    console.log(xorOfAllElements);
}

const input = [1, 2, 3, 2, 3, 1, 3];
findNumberOccuringOddNumberOfTimesInLinearTimeConstantSpace(input);
