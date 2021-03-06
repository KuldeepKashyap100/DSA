/**
 * Find minimum number of coins required to make the sum.
 */
const coinChangeProblem = (coins, sum) => {
    const table = new Array(coins.length + 1).fill().map(_ => new Array(sum + 1).fill(0));
    for(let i = 0; i <= sum; i++) table[0][i] = Infinity;
    for(let i = 1; i <= coins.length; i++) table[i][0] = 0;

    for(let i = 1; i <= coins.length; i++) {
        const currentCoin = coins[i - 1];
        for(let j = 1; j <= sum; j++) {
            const currentSum = j;
            if(currentSum >= currentCoin) {
                const includeCoin = table[i][currentSum - currentCoin];
                const excludeCoin = table[i - 1][currentSum];

                table[i][j] = Math.min(includeCoin + 1, excludeCoin);
                continue;
            }
            const excludeCoin = table[i - 1][currentSum];
            table[i][j] = excludeCoin;
        }
    }
    console.log(table);
}

let coins = [3, 4, 5];
let sum = 5;
// coins = [1, 5, 6, 8];
// sum = 11;
coinChangeProblem(coins, sum);