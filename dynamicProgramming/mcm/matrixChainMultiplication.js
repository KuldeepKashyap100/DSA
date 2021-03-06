/**
 * https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/
 * https://www.youtube.com/watch?v=kMK148J9qEE&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=35
 * https://www.youtube.com/watch?v=D1U74eFLg_g
 * Given a sequence of matrices, find the most efficient way to multiply these matrices together. The problem is not actually to perform the multiplications, but merely to decide in which order to perform the multiplications.
 * We have many options to multiply a chain of matrices because matrix multiplication is associative. In other words, no matter how we parenthesize the product, the result will be the same. For example, if we had four matrices A, B, C, and D, we would have: 
 * (ABC)D = (AB)(CD) = A(BCD) = ...
 * However, the order in which we parenthesize the product affects the number of simple arithmetic operations needed to compute the product, or the efficiency. For example, suppose A is a 10 × 30 matrix, B is a 30 × 5 matrix, and C is a 5 × 60 matrix. Then,  
 * 
 * (AB)C = (10×30×5) + (10×5×60) = 1500 + 3000 = 4500 operations
 * A(BC) = (30×5×60) + (10×30×60) = 9000 + 18000 = 27000 operations.
 * 
 * Clearly the first parenthesization requires less number of operations.
 * Given an array p[] which represents the chain of matrices such that the 
 * ith matrix Ai is of dimension p[i-1] x p[i]. 
 * We need to write a function MatrixChainOrder() that 
 * should return the minimum number of multiplications needed to multiply the chain. 
 * 
 * number of Matrices = n - 1;
 * https://media.geeksforgeeks.org/wp-content/uploads/matrixchainmultiplication.png
 */

const matrixChainMultiplication = (arr) => {
    const minimumCostForMultiplication = matrixChainMultiplicationRecursive(arr, 1, arr.length - 1);
    console.log(minimumCostForMultiplication);
    const table = new Array(arr.length).fill().map(_ => new Array(arr.length).fill(-1));
    const minimumCost = matrixChainMultiplicationMemoized(arr, 1, arr.length - 1, table);
    console.log(minimumCost);
    matrixChainMultiplicationBottomUp(arr);
}

const matrixChainMultiplicationRecursive = (arr, startIdx, endIdx) => {
    if(startIdx >= endIdx) return 0;
    
    let totalCost = Infinity;
    for(let k = startIdx; k < endIdx; k++) {
        const leftPartitionMultiplicationCost = matrixChainMultiplicationRecursive(arr, startIdx, k, totalCost);
        const rightPartitionMultiplicationCost = matrixChainMultiplicationRecursive(arr, k + 1, endIdx, totalCost);
        
        const finalMatrixMutliplicationCost = arr[startIdx - 1] * arr[k] * arr[endIdx];
        const currentCost = leftPartitionMultiplicationCost + rightPartitionMultiplicationCost + finalMatrixMutliplicationCost;

        totalCost = Math.min(currentCost, totalCost);
    }

    // we can also start k from startIdx + 1 and end at endIdx
    /**
    for(let k = startIdx + 1; k <=endIdx; k++) {
        const leftPartitionMultiplicationCost = matrixChainMultiplicationRecursive(arr, startIdx, k - 1, totalCost);
        const rightPartitionMultiplicationCost = matrixChainMultiplicationRecursive(arr, k, endIdx, totalCost);
        
        const finalMatrixMutliplicationCost = arr[startIdx - 1] * arr[k - 1] * arr[endIdx];
        const currentCost = leftPartitionMultiplicationCost + rightPartitionMultiplicationCost + finalMatrixMutliplicationCost;

        totalCost = Math.min(currentCost, totalCost);
    }
    */

    return totalCost;
}


const matrixChainMultiplicationMemoized = (arr, startIdx, endIdx, table) => {
    if(startIdx >= endIdx) return 0;

    if(table[startIdx][endIdx] !== -1) return table[startIdx][endIdx];

    let totalCost = Infinity;
    for(let k = startIdx; k < endIdx; k++) {
        const leftPartitionCost = matrixChainMultiplicationMemoized(arr, startIdx, k, table);
        const rightPartitionCost = matrixChainMultiplicationMemoized(arr, k + 1, endIdx, table);
        const currentCost = leftPartitionCost + rightPartitionCost + arr[startIdx - 1] * arr[k] * arr[endIdx];

        totalCost = Math.min(currentCost, totalCost);
    }
    return table[startIdx][endIdx] = totalCost;
}

const matrixChainMultiplicationBottomUp = (arr) => {
    const table = new Array(arr.length).fill().map(_ => new Array(arr.length).fill(-1));
    const numberOfMatrix = arr.length - 1;
    /**
     * table[i][j] = Minimum number of scalar
     *  multiplications needed to compute the matrix
     * A[i]A[i+1]...A[j] = A[i..j] where
     * dimension of A[i] is arr[i-1] x arr[i] 
     * */

    // cost is zero when multiplying one matrix. (i.e for matrixChainLength = 1)
    for(let i = 1; i <= numberOfMatrix; i++) table[i][i] = 0;

    for(let matrixChainLength = 2; matrixChainLength <= numberOfMatrix; matrixChainLength++) {
        // i is number of combinations possible for length matrixChainLength(
        // i.e for 3 matrices and matrixChainLength = 2 only two combinations possible (AB)C and A(BC))
        for(let startIdx = 1; startIdx <= numberOfMatrix - matrixChainLength + 1; startIdx++) {
            // endIdx is always more than startIdx (that's how we are iterating daigonally)
            const endIdx = startIdx + (matrixChainLength - 1);
            table[startIdx][endIdx] = Infinity;
            if(endIdx === arr.length) continue;
            for(k = startIdx; k < endIdx; k++) {
                const cost = table[startIdx][k] + table[k + 1][endIdx] + arr[startIdx - 1] * arr[k] * arr[endIdx];
                table[startIdx][endIdx] = Math.min(cost, table[startIdx][endIdx]);
            }
        }
    }
    // console.log(table[1][arr.length - 1]);
    console.log(table);
}

let arr = [40, 20, 30, 10, 30];
// arr = [10, 20, 30, 40, 30]
matrixChainMultiplication(arr);