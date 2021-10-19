// https://www.youtube.com/watch?v=5P84A0YCo_Y
/**
 * On the first row, we write a 0. Now in every subsequent row, 
 * we look at the previous row and replace each occurrence of 0 with 01, 
 * and each occurrence of 1 with 10.
 * Given row N and index K, return the K-th indexed symbol in row N. 
 * (The values of K are 1-indexed.) (1 indexed).
 */
const getKthSymbol = (n, k) => {
    if(n===1 && k===1)
        return 0;
    const mid = Math.pow(2, n-1)/2;
    if(k<= mid) {
        return getKthSymbol(n-1, k)
    }
    else {
        const symbol = getKthSymbol(n-1, k-mid);
        return symbol===0? 1: 0;
    }
}

console.log(getKthSymbol(4, 5));