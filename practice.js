class Node {
    constructor(value,  weight = 1) {
        this.value = value;
        this.next = null;
        this.weight = weight;
    }
}

class Graph {
    constructor(vertices, edges, directed = false) {
        this.vertices = vertices;
        this.edges = edges;
        this.adjacencyList = Array.from(Array(vertices),(value, index) => { 
            const newNode = new Node(index);
            newNode.next = newNode;
            return newNode;
        });
        this.directed = directed;
    }
    readEdges(listOfEdges = []) {
        for(let i=0; i < this.edges; i++) {
            const input = listOfEdges[i];
            let [ startVertex, endVertex, weight ] = input;
            const newNode = new Node(endVertex, weight);
            this.insertNode(this.adjacencyList[startVertex], newNode);
            newNode.next = this.adjacencyList[startVertex];
            if(!this.directed) {
                const newNode = new Node(startVertex, weight);
                this.insertNode(this.adjacencyList[endVertex], newNode);
                newNode.next = this.adjacencyList[endVertex];
            }
        }
    }
    insertNode(head, node) {
        let temp = head;
        while(temp.next !== head) {
            temp = temp.next;
        }
        temp.next = node;
    }
    dfs() {
        this.visitedList = new Array(this.vertices).fill(false);
        for(let i = 0; i < this.adjacencyList.length; i++) {
            if(!this.visitedList[i])
                this.dfsUtil(i);
        }
    }
    dfsUtil(vertex) {
        const fromVertex = this.adjacencyList[vertex];
        console.log(fromVertex.value);
        this.visitedList[fromVertex.value] = true;
        let toVertex = fromVertex.next;
        while(fromVertex !== toVertex) {
            if(!this.visitedList[toVertex.value])
                this.dfsUtil(toVertex.value);
            toVertex = toVertex.next;
        }
    }

    bfs() {
        this.visitedList = new Array(this.vertices).fill(false);
        for(let i = 0; i < this.adjacencyList.length; i++) {
            if(!this.visitedList[i])
                this.bfsUtils(i);
        }
    }
    bfsUtils(vertex) {
        const queue = [];
        queue.push(vertex);
        this.visitedList[vertex] = true;
        while(queue.length) {
            const fromVertex = this.adjacencyList[queue.shift()];
            console.log(fromVertex.value);
            let toVertex = fromVertex.next;
            while(fromVertex !== toVertex) {
                if(!this.visitedList[toVertex.value]) {
                    queue.push(toVertex.value);
                    this.visitedList[toVertex.value] = true;
                }
                toVertex = toVertex.next;
            }
        }
    }
    topologicalSort() {
        const sortedList = [];
        const inOrderDegree = new Array(this.vertices).fill(0);
        // calculate inorderdegree
        for(let i = 0; i < this.adjacencyList.length; i++) {
            const fromVertex = this.adjacencyList[i];
            let toVertex = fromVertex.next;
            while(toVertex !== fromVertex) {
                inOrderDegree[toVertex.value]++;
                toVertex = toVertex.next;
            }
        }
        const queue = [];
        inOrderDegree.forEach((degree, index) => {
            if(degree === 0) queue.push(index);
        });
        while(queue.length) {
            const fromVertex = this.adjacencyList[queue.shift()];
            sortedList.push(fromVertex.value);
            let toVertex = fromVertex.next;
            while(toVertex !== fromVertex) {
                if(--inOrderDegree[toVertex.value] === 0)
                    queue.push(toVertex.value);
                toVertex = toVertex.next;
            }
        }
        console.log(sortedList);
    }
    // time -> O(E + V)
    shortestPathUnweightedGraph(souceVertex) {
        const distance = new Array(this.vertices).fill(-1);
        const path = new Array(this.vertices);
        distance[souceVertex] = 0;
        path[souceVertex] = null;

        const queue = [this.adjacencyList[souceVertex]];
        while(queue.length) {
            const fromVertex = queue.shift();
            let toVertex = fromVertex.next;
            while(toVertex !== fromVertex) {
                if(distance[toVertex.value] === -1) {
                    distance[toVertex.value] = distance[fromVertex.value] + 1;
                    path[toVertex.value] = fromVertex.value;
                    queue.push(this.adjacencyList[toVertex.value]);
                }
                toVertex = toVertex.next;
            }
        }
        console.log(distance);
        console.log(path);
    }
    // time -> O(Elogv)
    dijkstra(sourceVertex) {
        const set = new Set(Array(this.vertices).fill().map((_, i) => i));
        const pq = new MinPriorityQueue();
        const distance = new Array(this.vertices).fill(Number.MAX_VALUE);
        const path = new Array(this.vertices);
        distance[sourceVertex] = 0;
        path[sourceVertex] = null;
        pq.enQueue(new QueueNode(this.adjacencyList[sourceVertex], 0));
        
        while(set.size) {
            const fromVertex = pq.deQueue().value;
            let toVertex = fromVertex.next;
            set.delete(fromVertex.value);

            while(toVertex !== fromVertex) {
                const currentDistance = distance[fromVertex.value] + toVertex.weight;
                if(set.has(toVertex.value) && distance[toVertex.value] > currentDistance) {
                    distance[toVertex.value] = currentDistance;
                    path[toVertex.value] = fromVertex.value;
                    pq.enQueue(new QueueNode(this.adjacencyList[toVertex.value], toVertex.weight));
                }
                toVertex = toVertex.next;
            }
        }
        console.log(distance);
        console.log(path);
        
    }
    // time -> O(V.E)
    bellmanFord(sourceVertex) {
        const distance = Array(this.vertices).fill(Number.MAX_VALUE);
        const path = Array(this.vertices);
        distance[sourceVertex] = 0;
        path[sourceVertex] = -1;

        // for v-1 times
        for(let i = 0; i < this.vertices - 1; i++) {
            // traverse all edges
            for(let j = 0; j < this.adjacencyList.length; j++) {
                const fromVertex = this.adjacencyList[j];
                let toVertex = fromVertex.next;
                while(toVertex !== fromVertex) {
                    const currentDistance = distance[fromVertex.value] + toVertex.weight;
                    if(distance[toVertex.value] > currentDistance) {
                        distance[toVertex.value] = currentDistance;
                        path[toVertex.value] = fromVertex.value;
                    }
                    toVertex = toVertex.next;
                }
            }
        }

        for(let j = 0; j < this.adjacencyList.length; j++) {
            const fromVertex = this.adjacencyList[j];
            let toVertex = fromVertex.next;
            while(toVertex !== fromVertex) {
                if(distance[toVertex.value] > distance[fromVertex.value] + toVertex.weight)
                    throw new Error("negative weight Cycle present");
                toVertex = toVertex.next;
            }
        }
        console.log(distance);
        console.log(path);
    }
    // time -> O(ElogV)
    primsAlgo(sourceVertex) {
        const distance = new Array(this.vertices).fill(Number.MAX_VALUE);
        const edges = new Array(this.vertices);
        const pq = new MinPriorityQueue();
        distance[sourceVertex] = 0;
        edges[sourceVertex] = null;
        pq.enQueue(new QueueNode(this.adjacencyList[sourceVertex], 0));

        while(pq.length) {
            const fromVertex = pq.deQueue().value;
            let toVertex = fromVertex.next;
            while(toVertex !== fromVertex) {
                if(distance[toVertex.value] > toVertex.weight) {
                    distance[toVertex.value] = toVertex.weight;
                    edges[toVertex.value] = "" + fromVertex.value + toVertex.value;
                    pq.enQueue(new QueueNode(this.adjacencyList[toVertex.value], toVertex.weight));
                }
                toVertex = toVertex.next;
            }
        }
        console.log(distance);
        console.log(edges);
    }
    // time -> O(ElogE + E)
    kruskals() {
        const distance = [];
        const edges = [];

        const sortedEdgeList = [];
        const disjointSet = new DisjointSet();
        this.adjacencyList.forEach(fromVertex => {
            disjointSet.makeSet(fromVertex.value);
            let toVertex = fromVertex.next;
            while(toVertex !== fromVertex) {
                sortedEdgeList.push([fromVertex.value, toVertex.value, toVertex.weight]);
                toVertex = toVertex.next;
            }
        });
        sortedEdgeList.sort((a, b) => a[2] - b[2]);

        sortedEdgeList.forEach(edge => {
            const [fromVertex, toVertex, weight] = edge;
            if(disjointSet.find(fromVertex) === disjointSet.find(toVertex)) return;

            disjointSet.union(fromVertex, toVertex);
            distance.push(weight);
            edges.push("" + fromVertex + toVertex);
        });
        console.log(distance);
        console.log(edges);
    }
}
class DisjointSet {
    constructor() {
        this.map = {};
    }
    makeSet(item) {
        this.map[item] = new SetNode(item);
    }
    find(item) {
        if(!this.map[item]) return null;
        return this.getParentAndCompressPath(this.map[item]).value;
    }
    union(firstSet, secondSet) {
        const firstParent = this.getParentAndCompressPath(this.map[firstSet]);
        const secondParent = this.getParentAndCompressPath(this.map[secondSet]);
        if(firstParent === secondParent) return;

        if(firstParent.rank >= secondParent.rank) {
            if(firstParent.rank === secondParent.rank)
                firstParent.rank++;
            secondParent.parent = firstParent;
        }
        else {
            firstParent.parent = secondParent;
        }
    }
    getParentAndCompressPath(node) {
        if(node === node.parent)
            return node;
        node.parent = this.getParentAndCompressPath(node.parent);
        return node.parent;
    }
}
class MinPriorityQueue {
    constructor(size) {
        this.array = new Array(size);
        this.length = 0;
    }
    enQueue(node) {
        const { priority, value } = node;
        this.length++;
        let insertIdx = this.length - 1;
        let parentIdx = this.getParentIdx(insertIdx);
        while(insertIdx >= 0 && parentIdx >= 0 && this.array[parentIdx].priority > priority) {
            this.array[insertIdx] = this.array[parentIdx];
            insertIdx = parentIdx;
            parentIdx = this.getParentIdx(insertIdx);
        }
        this.array[insertIdx] = node;
    }
    deQueue() {
        const elementDeleted = this.array[0];
        this.array[0] = this.array[this.length - 1];
        this.length--;
        this.siftDown(0);
        return elementDeleted;
    }
    siftDown(parentIdx) {
        const leftChildIdx = this.getLeftChildIdx(parentIdx);
        const rightChildIdx = this.getRightChildIdx(parentIdx);

        let minIdx = parentIdx;
        if(leftChildIdx >= 0 && this.array[minIdx].priority > this.array[leftChildIdx].priority)
            minIdx = leftChildIdx;
        if(rightChildIdx >= 0 && this.array[minIdx].priority > this.array[rightChildIdx].priority)
            minIdx = rightChildIdx;
        if(minIdx !== parentIdx) {
            [this.array[minIdx], this.array[parentIdx]] = [this.array[parentIdx], this.array[minIdx]];
            this.siftDown(minIdx);
        }
    }
    getLeftChildIdx(parentIdx) {
        const childIdx = 2 * parentIdx + 1;
        if(childIdx >= this.length) return -1;
        return childIdx;
    }
    getRightChildIdx(parentIdx) {
        const childIdx = 2 * parentIdx + 2;
        if(childIdx >= this.length) return -1;
        return childIdx;
    }
    getParentIdx(childIdx) {
        if(childIdx <= 0 || childIdx >= this.length) return -1;
        return Math.floor((childIdx - 1) / 2);
    }
    display() {
        console.log(this.array.slice(0, this.length));
    }
}
class QueueNode {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}
class SetNode {
    constructor(value) {
        this.value = value;
        this.parent = this;
        this.rank = 0;
    }
}

// basic examples
// const graphMeta = {vertex: 7, edgeList: [ [0,1], [0, 3], [1, 3], [1, 4], [2, 0], [2, 5], [3, 5], [3, 6], [4, 6], [6, 5] ]};
// const graphMeta = {vertex: 5, edgeList: [ [0, 1, 4], [0, 2, 1], [1, 4, 4], [2, 1, 2], [2, 3, 4], [3, 4, 4] ]};
// const graphMeta = {vertex: 5, edgeList: [ [1, 4, 2], [3, 1, 1], [1, 3, 2], [0, 1, -1], [0, 2, 4], [3, 2, 5], [1, 2, 3], [4, 3, -3] ]};

// negative edges
// const graphMeta = {vertex: 3, edgeList: [ [0, 1, 8], [1, 2, -5], [0, 2, 6] ]};
// const graphMeta = {vertex: 4, edgeList: [ [0, 1, 1], [0, 2, 0], [0, 3, 99], [1, 2, 1], [3, 1, -300] ]};


// graph with negative cycle
// const graphMeta = {vertex: 3, edgeList: [ [0, 1, 2], [1, 2, -4], [2, 0, 1] ]};

// const graph = new Graph(graphMeta.vertex, graphMeta.edgeList.length, true);
// graph.readEdges(graphMeta.edgeList);

// graph.shortestPathUnweightedGraph(2);
// graph.dijkstra(0);
// graph.bellmanFord(0);
// graph.primsAlgo(0);
// graph.kruskals();



class Sorting {
    constructor(array = []) {
        this.array = array;
    }
    bubbleSort() {
        for(let i = this.array.length - 1; i >=0; i--) {
            for(let j = 0; j < i; j++) {
                if(this.array[j] > this.array[j + 1])
                   [this.array[j], this.array[j + 1]] = [this.array[j + 1], this.array[j]];
            }
        }
    }
    selectionSort() {
        for(let i = 0; i < this.array.length; i++) {
            let minIdx = i;
            for(let j = i + 1; j < this.array.length; j++) {
                if(this.array[j] < this.array[minIdx])
                    minIdx = j;
            }
            [this.array[i], this.array[minIdx]] = [this.array[minIdx], this.array[i]];
        }
    }
    insertionSort() {
        for(let i = 1; i < this.array.length; i++) {
            const currentElement = this.array[i];
            let j = i - 1;
            for(; j >= 0 && this.array[j] > currentElement; j--)
                this.array[j + 1] = this.array[j];

            this.array[j + 1] = currentElement;
        }
    }
    shellSort() {
        for(let gap = Math.floor(this.array.length / 2); gap > 0; gap--)
            this.shellSortUtil(gap)
    }
    shellSortUtil(gap) {
        for(let i = gap; i < this.array.length; i++) {
            const currentElement = this.array[i];
            let j = i;
            for(; j >= 0 && this.array[j - gap] > currentElement; j -= gap)
                this.array[j] = this.array[j - gap];

            this.array[j] = currentElement;
        }
    }
    mergeSort() {
        this.mergeSortUtil(0, this.array.length - 1);
    }
    mergeSortUtil(left, right) {
        if(left >= right) return;
        const mid = Math.floor(left + (right - left) / 2);
        this.mergeSortUtil(left, mid);
        this.mergeSortUtil(mid + 1, right);
        this.merge(left, mid, mid + 1, right);
    }
    merge(leftStart, leftEnd, rightStart, rightEnd) {
        const auxArray = [];
        let idx = 0, startIdx = leftStart;
        while(leftStart <= leftEnd && rightStart <= rightEnd) {
            if(this.array[leftStart] <= this.array[rightStart])
                auxArray[idx++] = this.array[leftStart++];
            else
                auxArray[idx++] = this.array[rightStart++];
        }
        while(leftStart <= leftEnd)
            auxArray[idx++] = this.array[leftStart++];

        while(rightStart <= rightEnd)
            auxArray[idx++] = this.array[rightStart++];
        
        for(let i = startIdx; i <= rightEnd; i++)
            this.array[i] = auxArray[i - startIdx];
    }
    quickSort() {
        this.quickSortUtil(0, this.array.length - 1);
    }
    quickSortUtil(left, right) {
        if(left >=  right) return;
        let startIdx = left, endIdx = right, pivotIdx = left, pivot = this.array[pivotIdx];
        while(startIdx < endIdx) {
            while(this.array[startIdx] <= pivot)
                startIdx++;
            while(this.array[endIdx] > pivot)
                endIdx--;
            if(startIdx < endIdx)
                [this.array[startIdx], this.array[endIdx]] = [this.array[endIdx], this.array[startIdx]];
        }
        [this.array[endIdx], this.array[pivotIdx]] = [this.array[pivotIdx], this.array[endIdx]];

        this.quickSortUtil(left, endIdx - 1);
        this.quickSortUtil(endIdx + 1, right);
    }
    countingSort() {
        const sortedArray = new Array(this.array.length);
        const countList = new Array(Math.max(...this.array) + 1).fill(0);

        for(let item of this.array) 
            countList[item]++;
        for(let i = 1; i < countList.length; i++)
            countList[i] += countList[i- 1];
        for(let i = this.array.length - 1; i >=0; i--) {
            const currentItem = this.array[i];
            const newIdx = --countList[currentItem];
            sortedArray[newIdx] = currentItem;
        }
        this.array = sortedArray;
    }
    bucketSort() {
        const totalBuckets = Math.floor(Math.max(...this.array) + 1);
        // make buckets
        const buckets = new Array(Math.floor(totalBuckets)).fill().map(_ => []);

        // place elements in buckets
        for(let i = 0; i < this.array.length; i++) {
            const bucketIdx = Math.floor(this.array[i] / 10);
            buckets[bucketIdx].push(this.array[i]);
        }
        
        for(let i = 0; i < buckets.length; i++) {
            const bucket = buckets[i];

            // insertion sort
            for(let i = 1; i < bucket.length; i++) {
                const currentItem = bucket[i];
                let j = i - 1;
                for(; currentItem < bucket[j] && j >= 0; j--)
                    bucket[j + 1] = bucket[j];
                bucket[j + 1] = currentItem;
            }
        }

        // merge buckets
        for(let index = 0, bucketIdx = 0; bucketIdx < buckets.length; bucketIdx++) {
            const bucket = buckets[bucketIdx];
            for(let elementIdx = 0; elementIdx < bucket.length; elementIdx++) {
                this.array[index++] = bucket[elementIdx];
            }
        }
    }
    radixSort() {
        const maxNumberDegree = Math.max(...this.array).toString().length;

        // from lsb to msb
        for(let place = 1; place < (10 ** maxNumberDegree); place *= 10) {
            // count sort
            const count = new Array(10).fill(0);
            const sortedArray = new Array(this.array.length);
            for(const item of this.array) {
                const currentDigit = Math.floor(item / place) % 10;
                count[currentDigit]++;
            }

            for(let i = 1; i < count.length; i++) {
                count[i] += count[i - 1];
            }

            for(let i = this.array.length - 1; i >=0; i--) {
                let currentPlaceDigit = Math.floor(this.array[i] / place) % 10;
                const currentItemIdx = --count[currentPlaceDigit];
                sortedArray[currentItemIdx] = this.array[i];
            }
            this.array = sortedArray;
        }

    }
    display() {
        console.log(this.array);
    }
}

const sorting = new Sorting([170, 45, 75, 90, 802, 24, 2, 66]);
// sorting.bubbleSort();
// sorting.selectionSort();
// sorting.insertionSort();
// sorting.shellSort();
// sorting.mergeSort();
// sorting.quickSort();
// sorting.countingSort();
// sorting.bucketSort();
sorting.radixSort();
sorting.display();