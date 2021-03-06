/**
 * Given a value N, if we want to make change for N cents, 
 * and we have infinite supply of each of S = { S1, S2, .. , Sm} valued coins, 
 * how many ways can we make the change? The order of coins doesn’t matter.
 */

const coinChangeProblem = (coins, sum) => {
    const table = new Array(coins.length + 1).fill().map(_ => new Array(sum + 1).fill(0));
    for(let i = 0; i <= coins.length; i++) table[i][0] = 1;

    for(let i = 1; i <= coins.length; i++) {
        const currentCoin = coins[i - 1];
        for(let j = 1; j <= sum; j++) {
            const currentSum = j;

            if(currentSum >= currentCoin) {
                const coinIncluded = table[i][currentSum - currentCoin];
                const coinExcluded = table[i - 1][currentSum];

                table[i][j] = coinIncluded + coinExcluded;
                continue;
            }
            const coinExcluded = table[i - 1][currentSum];
            table[i][j] = coinExcluded;
        }
    }

    console.log(table);
}



const coins = [1, 2, 3];
const sum = 5;
coinChangeProblem(coins, sum);