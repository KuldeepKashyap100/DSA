// O(N^2)
const whoWinsElection = (input) => {
    let currentCandidate, maxVotes = 0, maxCandidate, currentVotes;
    for(let i = 0; i < input.length; i++) {
        currentCandidate = input[i];
        currentVotes = 1;
        for(j = i + 1; j < input.length; j++) {
            if(currentCandidate === input[j]) {
                currentVotes++;
            }
            if(maxVotes < currentVotes) {
                maxCandidate = currentCandidate;
                maxVotes = currentVotes;
            }
        }
    }
    console.log(maxCandidate, maxVotes);
}

// O(NlogN + N)
const whoWinsElectionEfficient = (input) => {
    const heap = new Heap(input);
    heap.heapSort();

    let currentCandidate = input[0], maxVotes = 0, maxCandidate, currentVotes = 1;
    for(let i = 1; i < input.length; i++) {
        if(currentCandidate === input[i]) {
            currentVotes++;
        }
        else {
            currentCandidate = input[i];
            currentVotes = 1;
        }
        if(maxVotes < currentVotes) {
            maxVotes = currentVotes;
            maxCandidate = currentCandidate;
        }
    }

    console.log(maxCandidate, maxVotes);
}

/**
 * If the number of candidates is less but number of votes are high then we can use count sort it will sort in O(N).
 * time -> O(N + N)
 * space -> O(N)
 */

const whoWinsElectionMostEfficient = (input) => {
    const max = Math.max(...input);
    countingSort(input, max + 1);

    let currentCandidate = input[0], maxVotes = 0, maxCandidate, currentVotes = 1;
    for(let i = 1; i < input.length; i++) {
        if(currentCandidate === input[i]) {
            currentVotes++;
        }
        else {
            currentCandidate = input[i];
            currentVotes = 1;
        }
        if(maxVotes < currentVotes) {
            maxVotes = currentVotes;
            maxCandidate = currentCandidate;
        }
    }

    console.log(maxCandidate, maxVotes);
}

const countingSort = (input, max) => {
    const count = new Array(max).fill(0);
    const sortedList = [];

    for(let i = 0; i < input.length; i++) {
        count[input[i]]++;
    }

    for(let i = 1; i < input.length; i++) {
        count[i] = count[i] + count[i - 1];
    }

    for(let i = input.length - 1; i >= 0; i--) {
        sortedList[--count[input[i]]] = input[i];
    }

    for(let i = 0; i < input.length; i++) {
        input[i] = sortedList[i];
    }

};


class Heap {
    constructor(input) {
        this.list = input;
        this.length = this.list.length;
    }
    getParent(childIndex) {
        if(childIndex <= 0 || childIndex >= this.length)
            return null;
        return Math.floor((childIndex - 1)/2);
    }
    getLeftChild(parentIndex) {
        const leftChild = Math.floor(2*parentIndex + 1);
        return leftChild >= this.length ? null : leftChild;
    }
    getRightChild(parentIndex) {
        const rightChild = Math.floor(2*parentIndex + 2);
        return rightChild >= this.length ? null : rightChild;
    }
    percolateDown(index) {
        const leftChild = this.getLeftChild(index);
        const rightChild = this.getRightChild(index);

        let maxIndex = index;
        if(leftChild && this.list[maxIndex] < this.list[leftChild])
            maxIndex = leftChild;
        if(rightChild && this.list[maxIndex] < this.list[rightChild])
            maxIndex = rightChild;
        if(maxIndex !== index) {
            [this.list[index], this.list[maxIndex]] = [this.list[maxIndex], this.list[index]];
            this.percolateDown(maxIndex);
        }
    }
    buildHeap() {
        const firstParent = this.getParent(this.length - 1);
        for(let i = firstParent; i >= 0; i--) {
            this.percolateDown(i);
        }
    }
    heapSort() {
        this.buildHeap();
        const originalLength = this.length;
        for(let i = this.length - 1; i > 0; i--) {
            [this.list[i], this.list[0]] = [this.list[0], this.list[i]];
            this.length--;
            this.percolateDown(0);
        }
        this.length = originalLength;
    }
}

// whoWinsElection([1, 3, 2, 1, 2, 2, 1, 3, 1, 3, 3, 3]);
// whoWinsElectionEfficient([1, 3, 2, 1, 2, 2, 1, 3, 1, 3, 3, 3]);
whoWinsElectionMostEfficient([1, 3, 2, 1, 2, 2,2, 1, 3, 1, 3, 3,2, 3, 2]);

