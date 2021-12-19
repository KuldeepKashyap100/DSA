const Stack = require("../Stack").LinkedListStack;

// find consecutive smaller or equal values before it.

// time -> o(n^2) and space --> o(1)
// const findSpans = (array) => {
//     let count, spanArr = [];
//     // for(let [index, item] of array.entries()) {
//     //     count = 1;
//     //     while(index>=0 && item>= array[index-1]) {
//     //         count++;
//     //         index--;
//     //     }
//     //     spanArr.push(count);
//     // }

//     // alt logic
//     for(let [index, item] of array.entries()) {
//         count = 1;
//         while(index >=count && item >= array[index-count]) {
//             count++;
//         }
//         spanArr[index] = count;
//     }
//     return spanArr;
// }

// using stack 
// const findSpans = (array) => {
//     const stack = new Stack();
//     const span = [];
//     let p;
//     for(let i=0;i<array.length;i++) {
//         while(!stack.isEmpty() && array[i] > array[stack.getTop()]) {
//             stack.pop();
//         }
//         if(stack.isEmpty()) p = -1;
//         else p = stack.getTop();

//         span[i] = i - p;
//         stack.push(i);
//     }
//     return span;
// }



// easily understandable written by self
// find nearest greater to left(index) of every element
// and then subtract the current index from it to get sum consecutive elements
const findSpans = (array) => {
    const stack = new Stack();
    const span = [];
    for(let i=0;i<array.length;i++) {
        if(stack.isEmpty()) {
            span[i] = 1;
        }
        else if(!stack.isEmpty() && stack.getTop().element<array[i]) {
            // count = 1;
            while(!stack.isEmpty() && stack.getTop().element<array[i]) {
                // count++;
                stack.pop();
            }
            span[i] = i - stack.getTop().index;
        }
        else if(!stack.isEmpty() && stack.getTop().element>array[i]) {
            span[i] = 1;
        }
        // pushing pair
        stack.push({element: array[i], index: i});
    }
    return span;
}


const spans = findSpans([6,3,4,5,2]);
// const spans = findSpans([100,80,60,70,60,75,85]);

console.log(spans);