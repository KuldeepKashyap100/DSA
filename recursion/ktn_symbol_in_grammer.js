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