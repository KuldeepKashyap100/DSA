/**
Given a binary matrix, find the maximum size rectangle binary-sub-matrix with all 1’s. 

Example: 

Input:
0 1 1 0
1 1 1 1
1 1 1 1
1 1 0 0
Output :
1 1 1 1
1 1 1 1
Explanation : 
The largest rectangle with only 1's is from 
(1, 0) to (2, 3) which is
1 1 1 1
1 1 1 1 
 */

const maximumAreaHistogram = require('./maximum_area_histogram');

const maxAreaBinaryMatrix = (matrix) => {
    const lastRowSum = new Array(matrix.length).fill(0);
    const maximumAreaHistogramArr = [];
    // convert 2d array to 1d array and then apply histogram algorithm
    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<matrix[i].length; j++) {
            if(matrix[i][j]===0) 
                lastRowSum[j] = 0;
            else
                lastRowSum[j] = lastRowSum[j] + matrix[i][j];
        }
        // console.log(lastRowSum);
        maximumAreaHistogramArr.push(maximumAreaHistogram(lastRowSum));
    }
    // console.log(maximumAreaHistogramArr);
    return Math.max(...maximumAreaHistogramArr);
}

const binaryMatrix =[   [0, 1, 1, 0],
                        [1, 1, 1, 1],
                        [1, 1, 1, 1],
                        [1, 1, 0, 0]
                    ];

const maxArea = maxAreaBinaryMatrix(binaryMatrix);
console.log(maxArea);