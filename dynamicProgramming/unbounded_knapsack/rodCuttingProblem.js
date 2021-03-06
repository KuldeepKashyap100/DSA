/**
 * Given a rod of length n inches and an array of prices 
 * that contains prices of all pieces of size smaller than n. 
 * Determine the maximum value obtainable by cutting up the rod 
 * and selling the pieces. 
 * 
 * if rod lengths are not sequential pass the length array and use this array,
 * instead of using constant length variable.
 */

// time -> O(n^2) | space -> O(n^2)
const rodCuttingProblem = (prices, rodLength) => {
    const table = new Array(rodLength + 1).fill().map(_ => new Array(rodLength + 1).fill(0));

    for(let i = 1; i <= rodLength; i++) {
        const usingCurrentRodLength = i;
        const currentPrice = prices[i - 1];

        for(let j = 1; j <= rodLength; j++) {
            const toMakeRodLength = j;
            if(toMakeRodLength >= usingCurrentRodLength) {
                const itemIncluded = currentPrice + table[i][toMakeRodLength - usingCurrentRodLength];
                const itemExcluded = table[i - 1][toMakeRodLength];

                table[i][j] = Math.max(itemIncluded, itemExcluded);
                continue;
            }
            table[i][j] = table[i - 1][toMakeRodLength];
        }
    }

    console.log(table);
}

let prices = [1, 5, 8, 9, 10, 17, 17, 20];
let rodLength = 8;
rodCuttingProblem(prices, rodLength);
