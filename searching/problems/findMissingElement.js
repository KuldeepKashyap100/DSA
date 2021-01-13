// time -> O(n^2) | space -> O(1)
const findMissingElementPolynomial = (input) => {
    let n = input.length;
    while(n > 0) {
        let found = false;
        for(let i = 0; i < input.length; i++) {
            if(input[i] === n)
                found = true;
        }
        if(!found) {
            console.log(n);
            return;
        }
        n--;
    }
}

// time -> O(nlogn) | space -> O(1)
const findMissingElementLinearLogarthmic = (input) => {
    input.sort((a, b) => a - b);
    for(let i = 0; i < input.length; i++) {
        if(input[i] !== i + 1) {
            console.log(i + 1);
            return;
        }
    }
}

// time -> O(n) | space -> O(n) 
const findMissingElementLinear = (input) => {
    const hashMap = new Map();
    for(let i = 0; i < input.length; i++) {
        hashMap.set(input[i], true);
    }

    for(let i = 0; i < input.length; i++) {
        if(!hashMap.has(i+1)) {
            console.log(i + 1);
            return;
        }
    }
}

// time -> O(n) | space -> O(1)
const findMissingElementLinearImprovedSpace = (input) => {
    const n = input.length + 1;
    let sumOfAllElements = n * (n + 1) / 2;
    for(let i = 0; i < input.length; i++) {
        sumOfAllElements -= input[i];
    }
    console.log(sumOfAllElements);
}

// above solution can cause int overflow (i.e sum goes above the allowed range of int)
// time -> O(n) | space -> O(n) 
const findMissingBestSolution = (input) => {
    let xorOfAllElements = 0;
    let xorOfN = 0;
    for(let i = 1; i <= input.length + 1; i++) {
        xorOfN = xorOfN ^ i;
    }

    for(let i = 0; i < input.length; i++) {
        xorOfAllElements = xorOfAllElements ^ input[i];
    }
    console.log(xorOfAllElements ^ xorOfN);
}


let input = [1, 2, 4, 6, 3, 7, 8];
findMissingElementPolynomial(input);
findMissingElementLinearLogarthmic(input);
input = [1, 2, 4, 6, 3, 7, 8];
findMissingElementLinear(input);
findMissingElementLinearImprovedSpace(input);
findMissingBestSolution(input);