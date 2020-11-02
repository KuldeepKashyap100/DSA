const getDepth = (parentArr) => {
    let maxDepth = -1;
    for(let i=0;i<parentArr.length;i++) {
        let j=i;
        let currentDepth = 0;
        while(parentArr[j] !== -1) {
            j = parentArr[j];
            currentDepth++;
        }
        if(currentDepth >  maxDepth)
            maxDepth = currentDepth;
    }
    return maxDepth;
}

console.log(getDepth[-1, 0, 1, 6, 6, 0, 0, 2, 7]);
//                    0, 1, 2, 3, 4, 5, 6, 7, 8