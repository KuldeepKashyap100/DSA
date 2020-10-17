const maximumAreaHistogram = require('./maximum_area_histogram');

const maxAreaBinaryMatrix = (matrix) => {
    const lastRowSum = new Array(matrix.length).fill(0);
    const maximumAreaHistogramArr = [];
    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<matrix[i].length; j++) {
            if(i===matrix.length-1 && matrix[i][j]===0) 
                lastRowSum[j] = 0;
            else
                lastRowSum[j] = lastRowSum[j] + matrix[i][j];
        }
        // console.log(lastRowSum);
        maximumAreaHistogramArr.push(maximumAreaHistogram(lastRowSum));
    }
    // console.log(maximumAreaHistogramArr);
    return maximumAreaHistogramArr.sort((a,b) => b-a)[0];
}

const binaryMatrix =[   [0, 1, 1, 0],
                        [1, 1, 1, 1],
                        [1, 1, 1, 1],
                        [1, 1, 0, 0]
                    ];

const maxArea = maxAreaBinaryMatrix(binaryMatrix);
console.log(maxArea);