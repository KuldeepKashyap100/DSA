// https://www.geeksforgeeks.org/trapping-rain-water/
// time -> O(n^2) | space -> O(1)
const findTotalWaterAreaBruteForce = (heights) => {
    let totalSurfaceArea = 0;
    for(let i = 0; i < heights.length; i++) {
        const leftMaxIdx = findMaxLeft(heights, i);
        const rightMaxIdx = findMaxRight(heights, i);

        if(leftMaxIdx !== i && rightMaxIdx !== i)
            totalSurfaceArea += Math.min(heights[leftMaxIdx], heights[rightMaxIdx]) - heights[i];
    }
    function findMaxLeft(heights, targetIdx) {
        let leftMaxIdx = targetIdx;
        for(let i = targetIdx; i >= 0; i--) {
            if(heights[i] > heights[leftMaxIdx])
                leftMaxIdx = i;
        }
        return leftMaxIdx;
    }
    function findMaxRight(heights, targetIdx) {
        let rightMaxIdx = targetIdx;
        for(let i = targetIdx; i < heights.length; i++) {
            if(heights[rightMaxIdx] < heights[i])
                rightMaxIdx = i;
        }
        return rightMaxIdx;
    }
    console.log(totalSurfaceArea);
}

// time o(n) | space o(n)
const findTotalWaterAreaDynamicProg = (heights) => {
    let maxValue = heights[0];
    const maxLeftArr = [];
    const maxRightArr = [];
    for(let i=0;i<heights.length;i++) {
        if(maxValue<heights[i])
            maxValue = heights[i];
        maxLeftArr.push(maxValue)
    }

    maxValue = heights[heights.length-1];
    for(let i=heights.length-1;i>=0;i--) {
        if(maxValue<heights[i])
            maxValue = heights[i];
        maxRightArr[i] = maxValue;
    }

    let totalArea = 0, minHeight;
    for(let i=0;i<heights.length;i++) {
        minHeight = Math.min(maxRightArr[i], maxLeftArr[i]);
        totalArea += minHeight - heights[i];
    }
    console.log(totalArea);
}

const findTotalWaterAreaDynamicProgImprovedSpace = (heights) => {
    let leftMaxIdx = 0, leftMax = heights[leftMaxIdx];
    let rightMaxIdx = heights.length - 1, rightMax = heights[rightMaxIdx];
    let totalArea = 0;
    while(leftMaxIdx < rightMaxIdx) {
        if(heights[leftMaxIdx] < heights[rightMaxIdx]) {
            leftMaxIdx++;
            leftMax = Math.max(leftMax, heights[leftMaxIdx]);
            totalArea += leftMax - heights[leftMaxIdx];
        }
        else {
            rightMaxIdx--;
            rightMax = Math.max(rightMax, heights[rightMaxIdx]);
            totalArea += rightMax - heights[rightMaxIdx];
        }
    }
    console.log(totalArea);
}


/**
 * The concept here is that if there is a larger wall to the right 
 * then the water can be retained with height equal to the smaller wall on the left. 
 * time -> O(n) | space -> O(1)
 **/
const findTotalWaterAreaDifferentLogic = (heights) => {
    let totalArea = 0, wronglyCalculatedArea = 0;
    let maxPillar = 0;
    for(let i = 0; i < heights.length; i++) {
        if(heights[maxPillar] < heights[i]) {
           wronglyCalculatedArea = 0;
           maxPillar = i;
           continue;
        }
        totalArea += heights[maxPillar] - heights[i];
        wronglyCalculatedArea += heights[maxPillar] - heights[i];
    }
    if(maxPillar < heights.length - 1) {
        totalArea -= wronglyCalculatedArea;
        let backMaxPillar = heights.length - 1;
        for(let i = backMaxPillar; i >= maxPillar; i--) {
            if(heights[backMaxPillar] < heights[i]) {
                backMaxPillar = i;
                continue;
            }
            totalArea += heights[backMaxPillar] - heights[i];
        }
    }
    console.log(totalArea);
}

const findTotalWaterAreaUsingStack = (heights) => {
    const stack = [];
    let totalArea = 0;
    for(let i = 0; i < heights.length; i++) {
        while(stack.length && heights[getTopOfStack()] < heights[i]) {
            const heightStoredAtTop = heights[getTopOfStack()];
            stack.pop();

            if(!stack.length) break;

            const distance = i - getTopOfStack() - 1;
            
            const height = Math.min(heights[getTopOfStack()], heights[i]) - heightStoredAtTop;

            totalArea += distance * height;

        }
        stack.push(i);
    }

    console.log(totalArea);

    function getTopOfStack() {
        return stack[stack.length - 1];
    }

}


let area, heights = [3,0,0,2,0,4];
heights = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]
findTotalWaterAreaBruteForce(heights);
findTotalWaterAreaDynamicProg(heights);
findTotalWaterAreaDynamicProgImprovedSpace(heights);
findTotalWaterAreaDifferentLogic(heights);
findTotalWaterAreaUsingStack(heights);