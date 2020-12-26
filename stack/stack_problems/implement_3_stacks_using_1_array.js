// time -> o(n) because of shifting space -> o(1)
class TripleStack {
    constructor(capacity) {
        this.array = new Array(capacity).fill(null);
        this.firstStackTop = -1;
        this.secondStackTop = this.array.length;
        this.startThirdIndex = -1;
        this.thirdStackTop = -1;
    }
    pushFirst(data) {
        if(this.firstStackTop+1 === this.startThirdIndex) {
            this.shiftThirdRight();
        }
        if(this.firstStackTop+1<this.secondStackTop && (this.firstStackTop+1 < this.startThirdIndex || this.startThirdIndex === -1))
            this.array[++this.firstStackTop] = data;
        else 
            throw new Error("First stack overflow");
    }
    pushSecond(data) {
        if(this.secondStackTop-1 === this.thirdStackTop) {
            this.shiftThirdLeft();
        }
        if(this.secondStackTop-1> this.firstStackTop && this.secondStackTop-1 > this.thirdStackTop)
            this.array[--this.secondStackTop] = data;
        else 
            throw new Error("Second stack overflow");
    }
    //shifting should happen here also
    pushThird(data) {
        if(this.startThirdIndex === -1) {
            this.startThirdIndex = this.firstStackTop+1;
            this.thirdStackTop = this.startThirdIndex - 1; 
        }
        if(this.thirdStackTop+1<this.secondStackTop)
            this.array[++this.thirdStackTop] = data;
        else 
            throw new Error("Third stack overflow");
    }
    
    shiftThirdRight() {
        if(this.thirdStackTop+1 === this.secondStackTop) {
            throw new Error("Cannot shift third Stack right.");
        }
        for(let i=this.thirdStackTop; i>=this.startThirdIndex; i--) {
            this.array[i+1] = this.array[i];
        }
        this.array[this.startThirdIndex] = null;
        this.startThirdIndex++;
        this.thirdStackTop++;
    }
    shiftThirdLeft() {
        if(this.startThirdIndex-1 === this.firstStackTop) {
            throw new Error("Cannot shift third Stack left");
        }
        for(let i=this.startThirdIndex; i<=this.thirdStackTop; i++) {
            this.array[i-1] = this.array[i];
        }
        this.array[this.thirdStackTop] = null;
        this.startThirdIndex--;
        this.thirdStackTop--;
    }

    popFirst() {
        this.array[this.firstStackTop] = null;
        this.firstStackTop--;
    }
    popSecond() {
        this.array[this.secondStackTop] = null;
        this.secondStackTop++;
    }
    popThird() {
        this.array[this.thirdStackTop] = null;
        this.thirdStackTop--;
    }
    
    display() {
        console.log(this.array);
    }
}



const stack = new TripleStack(5);

stack.pushFirst(1);
stack.pushFirst(2);
stack.pushFirst(3);


stack.pushThird(4);
// stack.pushThird(5);
// stack.pushThird(6);

stack.popFirst();

stack.display();


stack.pushSecond(1);
stack.pushSecond(2);
// stack.pushSecond(6);




stack.display();
