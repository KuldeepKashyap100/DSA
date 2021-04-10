const Stack = require("../Stack").LinkedListStack;

const nearestGreatestToRight = (inputArr) => {
    const stack = new Stack();
    const result = [];
    for(let i=inputArr.length-1;i>=0;i--) {
        if(!stack.isEmpty() && stack.getTop()<=inputArr[i]) {
            while(!stack.isEmpty() && stack.getTop()<inputArr[i]) stack.pop();
            if(stack.isEmpty())
                result[i] = -1;
            else    
                result[i] = stack.getTop();
        }
        else if(!stack.isEmpty() && stack.getTop()>inputArr[i]){
            result[i] = stack.getTop();
        }
        else if (stack.isEmpty()) {
            result[i] = -1;
        }
        stack.push(inputArr[i]);
    }
    return result;
}

console.log(nearestGreatestToRight([1,3,2,4]));