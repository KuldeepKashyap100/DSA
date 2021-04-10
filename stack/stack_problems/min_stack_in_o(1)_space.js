const Stack = require("../Stack").LinkedListStack;


// time -> o(1) space < o(1)
class AdvancedStack {
    constructor() {
        this.elementStack = new Stack();
        this.min;
    }
    push(data) {
        if(this.elementStack.isEmpty()) {
            this.elementStack.push(data);
            this.min = data;
            return;
        }
        if(this.min <= data) 
            this.elementStack.push(data);
        else if(this.min > data) {
            this.elementStack.push(2*data - this.min);
            this.min = data;
        }
    }
    pop() {
        if(this.min > this.elementStack.getTop()) {
            const prevMin = this.min;
            this.min = 2 * this.min - this.elementStack.pop();
            return prevMin;
        }
        return this.elementStack.pop();
    }
    getMinimum() {
        return this.min;
    }
}

let adStack = new AdvancedStack();
adStack.push(8);
adStack.push(6);
adStack.push(2);
adStack.push(1);
adStack.push(5);

console.log(adStack.pop());
console.log(adStack.pop());
console.log(adStack.pop());
console.log(adStack.pop());







console.log(adStack.getMinimum());
