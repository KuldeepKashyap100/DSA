/**
 * Given a value N, if we want to make change for N cents, 
 * and we have infinite supply of each of S = { S1, S2, .. , Sm} valued coins, 
 * ex -> coins = [1, 2, 3]
 *        sum = 5
 * ways ={
 *  [1, 1, 1, 1, 1],
 *  [2, 2, 1]
 *  [3, 2],
 *  [3, 1, 1],
 *  [1, 1, 1, 2]
 * }
 * how many ways can we make the change? The order of coins doesn’t matter.
 * 
 * It is similar to countSubsetSum but for unbounded knapsack.
 */

 function numberOfWaysToMakeChange(coins, targetSum, idx) {
	if(targetSum < 0) return 0;
	if(targetSum === 0) return 1;
	
	let totalNumOfWays = 0;
	for(let coinIdx = idx; coinIdx < coins.length; coinIdx++) {
		const denom = coins[coinIdx];
		totalNumOfWays += numberOfWaysToMakeChange(coins, targetSum - denom, coinIdx);
	}
	
	return totalNumOfWays;
}

// time -> O(nd) | space -> O(n)
function numberOfWaysToMakeChange(n, denoms) {
    const ways = new Array(n + 1).fill(0);
      ways[0] = 1;
      
      for(const denom of denoms) {
          for(let amount = 1; amount <= n; amount++) {
              if(denom <= amount) {
                  ways[amount] += ways[amount - denom];
              }
          }
      }
      return ways[n];
  }
  
  // Do not edit the line below.
  exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;
  

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