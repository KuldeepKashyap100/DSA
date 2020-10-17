// time o(n) and space o(n)
const findTotalWaterArea = (inputArr) => {
    let maxValue = inputArr[0];
    const maxLeftArr = [];
    const maxRightArr = [];
    for(let i=0;i<inputArr.length;i++) {
        if(maxValue<inputArr[i])
            maxValue = inputArr[i];
        maxLeftArr.push(maxValue)
    }
    console.log(maxLeftArr);

    maxValue = inputArr[inputArr.length-1];
    for(let i=inputArr.length-1;i>=0;i--) {
        if(maxValue<inputArr[i])
            maxValue = inputArr[i];
        maxRightArr[i] = maxValue;
    }
    console.log(maxRightArr);

    let totalArea = 0, minHeight;
    for(let i=0;i<inputArr.length;i++) {
        minHeight = maxRightArr[i]<maxLeftArr[i] ? maxRightArr[i] : maxLeftArr[i]
        totalArea = totalArea + minHeight - inputArr[i];
    }
    return totalArea;
}

const area = findTotalWaterArea([3,0,0,2,0,4]);
console.log(area);