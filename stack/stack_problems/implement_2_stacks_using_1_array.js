// there could be a better approach if top is not mainted on start and end of array so we don't have to shift the elements of the array.

class DoubleStack {
    constructor(capacity) {
        this.array = new Array(capacity).fill(null);
        this.firstStackIndex = -1;
        this.secondStackIndex = this.array.length;
    }
    pushFirst(data) {
        if(this.array.length - 1>this.firstStackIndex && this.firstStackIndex+1 !== this.secondStackIndex) {
            this.unShift(data);
            this.firstStackIndex++;
        }
        else {
            throw new Error("stack overflow");
        }
    }
    popFirst() {
        let curr = this.array[this.firstStackIndex], prev;
        this.array[this.firstStackIndex] = null;
        for(let i=this.firstStackIndex; i>0;i--) {
            prev = this.array[i-1];
            this.array[i-1] = curr;
            curr = prev
        }
        this.firstStackIndex--;
        return prev;
    }
    unShift(data) {
        let prev, curr;
        for(let i=0; i<=this.firstStackIndex+1;i++) {
            curr = this.array[i];
            this.array[i] = prev;
            prev = curr;
        }
        this.array[0] = data;
    }
    pushSecond(data) {
        if(this.secondStackIndex>0 && this.firstStackIndex  !== this.secondStackIndex - 1) {
            this.shift(data);
            this.secondStackIndex--;
        }
        else {
            throw new Error("stack overflow");
        }
    }
    shift(data) {
        let prev, curr;
        for(let i=this.array.length-1; i>=this.secondStackIndex-1; i--) {
            curr = this.array[i];
            this.array[i] = prev;
            prev = curr;
        }
        this.array[this.array.length - 1] = data;
    }
    popSecond() {
        let prev = this.array[this.secondStackIndex], curr;
        this.array[this.secondStackIndex] = null;
        for(let i=this.secondStackIndex+1; i<=this.array.length-1; i++) {
            curr = this.array[i];
            this.array[i] = prev;
            prev = curr;
        }
        return curr;
    }

    display() {
        console.log(this.array);
    }
}

const stack = new DoubleStack(5);
// stack.pushFirst(6);
// stack.pushFirst(2);
// stack.pushFirst(3);
// console.log(stack.popFirst());
// stack.pushFirst(4);
// stack.pushFirst(5);
// stack.pushFirst(6);
// stack.pushFirst(7);

stack.pushSecond(1);
stack.pushSecond(2);
stack.pushSecond(3);
stack.display();

console.log(stack.popSecond());


// stack.pushSecond(4);
// stack.pushSecond(5);
// stack.pushSecond(6);
// stack.pushSecond(7);


stack.display();
