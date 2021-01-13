// time -> O(logn) | space -> O(1)
const findTrailingZerosInFactorial = (n) => {
    let count = 0;
    for(let i = 5; Math.floor(n/i) > 0; i *=5) {
        count += Math.floor(n/i);
    }
    console.log(count);
}

findTrailingZerosInFactorial(30);