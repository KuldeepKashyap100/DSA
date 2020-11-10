
const findHowManyStructurallyUniqueBst = (n) => {
    if(n <= 1)
        return 1;
    let sum = 0;
    for(let root = 1; root <= n; root++) {
        const left = findHowManyStructurallyUniqueBst(root - 1);
        const right = findHowManyStructurallyUniqueBst(n - root);
        sum += left * right;
    }
    return sum;
}

const findHowManyStructurallyUniqueBstIterative = (n) => {
    const storedSum = new Array(n+1).fill(0);
    storedSum[0] = storedSum[1] = 1;
    for(let i = 2; i <= n; i++) {
        for(j = 0; j<i; j++) {
            storedSum[i] += storedSum[j] * storedSum[i - j -1];
        }
    }
    return storedSum[n];
}

console.log(findHowManyStructurallyUniqueBst(3));
console.log(findHowManyStructurallyUniqueBstIterative(3));
