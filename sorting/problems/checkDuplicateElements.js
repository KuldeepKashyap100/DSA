
// O(N^2)
const checkDuplicateElements = (input) => {
    for(let i = 0; i < input.length; i++) {
        for(let j = i; j < input.length; j++) {
            if(input[i] === input[j]) {
                console.log(input[i]);
                return input[i];
            }
        }
    }
}

// time -> O(NlogN + N)
// space -> O(1)
const checkDuplicateElementsEfficient = (input) => {
    const heap = new Heap(input);
    heap.heapSort();
    for(let i = 1; i < input.length; i++) {
        if(input[i] ==input[i - 1]) {
            console.log(input[i]);
            return;
        }
    }
}

class Heap {
    constructor(input) {
        this.list = input;
        this.length = this.list.length;
    }
    getParent(childIndex) {
        if(childIndex <=0 || childIndex >= this.list.length) return null;
        return Math.floor((childIndex - 1)/2);
    }
    getLeftChild(parentIndex) {
        const leftChild = Math.floor(2*parentIndex + 1);
        if(leftChild >= this.length) return null;
        return leftChild;
    }
    getRightChild(parentIndex) {
        const rightChild = Math.floor(2*parentIndex + 2);
        if(rightChild >= this.length) return null;
        return rightChild;
    }
    percolateDown(index) {
        const leftChild = this.getLeftChild(index);
        const rightChild = this.getRightChild(index);

        let minIndex = index;
        if(leftChild && this.list[minIndex] > this.list[leftChild])
            minIndex = leftChild;
        if(rightChild && this.list[minIndex] > this.list[rightChild])
            minIndex = rightChild;
        
        if(minIndex !== index) {
            [this.list[minIndex], this.list[index]] = [this.list[index], this.list[minIndex]];
            this.percolateDown(minIndex);
        }
    }
    buildHeap() {
        const lastParent = this.getParent(this.list.length - 1);
        for(let i = lastParent; i>=0; i--){
            this.percolateDown(i);
        }
    }
    heapSort() {
        this.buildHeap();
        // we are going to exclue greatest element as the go to back of the array by decrementing the length
        const storedlength = this.length;
        for(let i = this.length - 1; i>0; i--) {
            // exchange last and first element because first it is the greatest element and we are sorting
            [this.list[0], this.list[i]] = [this.list[i], this.list[0]];
            this.length--;
            this.percolateDown(0);
        }
        this.length = storedlength;
    }
}


const input = [12, 34, 54, 2, 3,34];
// checkDuplicateElements(input);
checkDuplicateElementsEfficient(input);

