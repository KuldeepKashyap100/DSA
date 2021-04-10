const Stack = require("../Stack").LinkedListStack;


// time -> o(1) space < o(n)
class AdvancedStack {
    constructor() {
        this.elementStack = new Stack();
        this.minStack = new Stack();
    }
    push(data) {
        this.elementStack.push(data);
        if(this.minStack.getTop()>=data || !this.minStack.getTop()) {
            this.minStack.push(data);
        }
    }
    pop() {
        let ele = this.elementStack.pop();
        if(ele === this.minStack.getTop())
            this.minStack.pop();
        return ele;
    }
    getMinimum() {
        return this.minStack.getTop();
    }
}

let adStack = new AdvancedStack();
adStack.push(8);
adStack.push(6);
adStack.push(2);
adStack.push(1);
adStack.push(5);

adStack.pop();
adStack.pop();




console.log(adStack.getMinimum());
