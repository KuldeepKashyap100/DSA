const Stack = require("../stack/Stack").LinkedListStack;

// brute force time -> o(n^2) space -> o(1)
// const maximumAreaHistogram = (inputArr) => {
//     let maxArea = 0;
//     for(let i=0; i<inputArr.length;i++) {
//         let count = 0,leftIndex=i+1;
//         while(inputArr.length>leftIndex && inputArr[i]<=inputArr[leftIndex]) {
//             leftIndex++;
//         }
//         let area = (leftIndex-i) * inputArr[i];
//         if(maxArea < area) maxArea = area;
//     }
//     return maxArea;
// }

// using stacks time -> o(n) space -> o(1)
const maximumAreaHistogram = (inputArr) => {
    let maxArea = 0;
    let stack = new Stack();
    let nslIndexArr = [];
    let nsrIndexArr = [];

    // calculate nearest left index array
    for(let i=0; i<inputArr.length;i++) {
        // let area = 0;
        if(stack.isEmpty()) {
            nslIndexArr[i] = -1;
        }
        else if(!stack.isEmpty() && inputArr[i]<=stack.getTop().element) {
            while(!stack.isEmpty() && inputArr[i]<=stack.getTop().element) {
                stack.pop();
            }
            if(stack.isEmpty()) nslIndexArr[i] = -1;
            else nslIndexArr[i] = stack.getTop().index;
        }
        else if(!stack.isEmpty() && inputArr[i]>stack.getTop().element){
            nslIndexArr[i] = stack.getTop().index;
        }
        stack.push({element: inputArr[i], index: i});
    }
    // console.log(nslIndexArr);


    // calculate nearest right index array
    stack = new Stack();
    for(let i=inputArr.length-1;i>=0;i--) {
        if(stack.isEmpty()) {
            nsrIndexArr[i] = inputArr.length;
        }
        else if(!stack.isEmpty() && inputArr[i]<=stack.getTop().element) {
            while(!stack.isEmpty() && inputArr[i]<=stack.getTop().element) {
                stack.pop();
            }
            if(stack.isEmpty()) nsrIndexArr[i] = inputArr.length;
            else nsrIndexArr[i] = stack.getTop().index;
        }
        else if(!stack.isEmpty() && inputArr[i]>stack.getTop().element) {
            nsrIndexArr[i] = stack.getTop().index;
        }
        stack.push({element: inputArr[i], index: i});
    }
    // console.log(nsrIndexArr);
    for(let i=0; i<inputArr.length;i++) {
        // -1 because both indexes are exculusive
        area = inputArr[i] * (nsrIndexArr[i]-nslIndexArr[i]-1);
        // console.log(area);
        if(maxArea < area) maxArea = area;
    }
    return maxArea;
}

// const maximumArea = maximumAreaHistogram([3,2,5,6,1,4,4]);
// const maximumArea = maximumAreaHistogram([2,4,8,10,8,4,2]);

// console.log(maximumArea);

module.exports = maximumAreaHistogram;