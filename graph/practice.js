const Graph = require("./Graph").GraphAdjacencyList;

// shortestpath unweighted graph
// time -> O(E + V)
const shortestPathUnweightedGraph = (graph, vertex) => {
  const queue = [];
  const distance = new Array(graph.adjacencyList.length).fill(-1);
  const path = [];
  distance[vertex] = 0;
  path[vertex] = null;

  queue.push(graph.adjacencyList[vertex]);
  while(queue.length) {
    const fromVertex = queue.shift();
    let toVertex = fromVertex.next;
    while(fromVertex !== toVertex) {
      if(distance[toVertex.data] === -1) {
        distance[toVertex.data] = distance[fromVertex.data] + 1;
        path[toVertex.data] = fromVertex.data;
        queue.push(graph.adjacencyList[toVertex.data]);
      }
      toVertex = toVertex.next;
    }
  }
  console.log(distance);
  console.log(path);
}

const PriorityQueue = function() {
  this.array = [];
  //small number have highest priority
  this.priority = [];

  this.getParent = (childIndex) => {
    if(childIndex <= 0 || childIndex >= this.array.length)
      return -1;
    return Math.floor((childIndex - 1)/2);
  }
  this.getLeftChild = (parentIndex) => {
    const childIndex = (2*parentIndex + 1);
    if(childIndex >= this.array.length)
      return -1;
    return childIndex;
  }
  this.getRightChild = (parentIndex) => {
    const childIndex = (2*parentIndex + 2);
    if(childIndex >= this.array.length)
      return -1;
    return childIndex;
  }
  this.enqueue = (data, priority) => {
    this.array.push(data);
    this.priority.push(priority);
    let insertedIndex = this.array.length - 1; 
    let parentIndex = this.getParent(insertedIndex);
    // smaller value of priority means high priority
    while(insertedIndex > 0 && this.priority[parentIndex] > this.priority[insertedIndex]) {
      [this.array[parentIndex], this.array[insertedIndex]] = [this.array[insertedIndex], this.array[parentIndex]];
      [this.priority[parentIndex], this.priority[insertedIndex]] = [this.priority[insertedIndex], this.priority[parentIndex]];
      insertedIndex = parentIndex;
      parentIndex = this.getParent(parentIndex);
    }
  }
  this.dequeue = () => {
    const itemToBeDeleted = this.array[0];
    this.array[0] = this.array[this.array.length - 1];
    this.priority[0] = this.priority[this.priority.length - 1];
    this.array.pop();
    this.priority.pop();
    this.percolateDown(0);
    return itemToBeDeleted;
  }
  this.percolateDown = (index) => {
    const leftChild = this.getLeftChild(index);
    const rightChild = this.getRightChild(index);
    let maxPriorityIndex;
    if(this.priority[index] > this.priority[leftChild]) 
      maxPriorityIndex = leftChild;
    else
      maxPriorityIndex = index;
    if(this.priority[maxPriorityIndex] > this.priority[rightChild])
      maxPriorityIndex = rightChild;
    if(maxPriorityIndex !== index) {
      [this.array[maxPriorityIndex], this.array[index]] = [this.array[index], this.array[maxPriorityIndex]];
      [this.priority[maxPriorityIndex], this.priority[index]] = [this.priority[index], this.priority[maxPriorityIndex]];
      this.percolateDown(maxPriorityIndex);
    }
  }
}


// in both original and modified stop criteria is different in original when all the target nodes reached it will stop
// modified will stop when pq becomes empty
// time -> O(ElogV)
const originalDijkastraAlgo = (graph, sourceVertex) => {
  const set = new Set();
  const pq = new PriorityQueue();

  const distance = [];
  const path = [];
  for(let i=0; i < graph.adjacencyList.length; i++) {
    distance[i] = Infinity;
    set.add(i);
  }
  path[sourceVertex] = null;
  distance[sourceVertex] = 0;
  pq.enqueue(graph.adjacencyList[sourceVertex], 0);

  while(set.size) {
    const fromVertex = pq.dequeue();
    set.delete(fromVertex.data);
    let toVertex = fromVertex.next;
    while(fromVertex !== toVertex) {
      if(set.has(toVertex.data) && distance[toVertex.data] > distance[fromVertex.data] + toVertex.weight) {
        distance[toVertex.data] = distance[fromVertex.data] + toVertex.weight;
        path[toVertex.data] = fromVertex.data;
        pq.enqueue(graph.adjacencyList[toVertex.data], toVertex.weight);
      }
      toVertex = toVertex.next;
    }
  }

  console.log(distance);
  // console.log(path);

}

// shortest path weighted graph with no non negative cycle
/**
 * If one is using the alternative stop criterion, 
 * which stops the algorithm when the priority-queue (heap) runs empty (this stop criterion was also used in the question), 
 * then dijkstra will find the correct distance even for graphs with negative weights but without negative cycles.
 * However, in this case, the asymptotic time bound of dijkstra for graphs without negative cycles is lost. 
 * This is because a previously settled node can be reinserted into the heap when a better distance is found due to negative weights. 
 * This property is called label correcting.
 * 
 * Variants of Dijkstra's Algorithm
 * The key is there are 3 kinds of implementation of Dijkstra's algorithm, 
 * but all the answers under this question ignore the differences among these variants.
 * 
 * Using a nested for-loop to relax vertices. 
 * This is the easiest way to implement Dijkstra's algorithm. The time complexity is O(V^2).
 * Priority-queue/heap based implementation + NO re-entrance allowed, 
 * where re-entrance means a relaxed vertex can be pushed into the priority-queue again to be relaxed again later.
 * Priority-queue/heap based implementation + re-entrance allowed.
 * Version 1 & 2 will fail on graphs with negative weights (if you get the correct answer in such cases, 
 * it is just a coincidence), but version 3 still works.
 * 
 * https://algs4.cs.princeton.edu/44sp/
 */
const modifiedDijikstraAlgo = (graph, sourceVertex) => {
  const pq = new PriorityQueue();
  const distance = new Array(graph.adjacencyList.length).fill(Infinity);
  const path = [];
  distance[sourceVertex] = 0;
  path[sourceVertex] = null;
  pq.enqueue(graph.adjacencyList[sourceVertex], 0);
  while(pq.array.length) {
    const fromVertex = pq.dequeue();
    let toVertex = fromVertex.next;
    while(fromVertex != toVertex) {
      if(distance[toVertex.data] > distance[fromVertex.data] + toVertex.weight) {
        distance[toVertex.data] = distance[fromVertex.data] + toVertex.weight;
        path[toVertex.data] = fromVertex.data;
        pq.enqueue(graph.adjacencyList[toVertex.data], toVertex.weight);
      }
      toVertex = toVertex.next;
    }
  }
  console.log(distance);
  // console.log(path);
}


// time -> O(V.E) space -> O(V)
const bellmanFordALgo = (graph, sourceVertex) => {
  const distance = new Array(graph.adjacencyList.length).fill(Infinity);
  const path = [];
  distance[sourceVertex] = 0;
  path[sourceVertex] = null;
  // for every vertex (in the worst case it will take v-1 iteration to find shortest to all nodes)
  for(let i=0; i < graph.adjacencyList.length - 1; i++) {
    // tranverse all edges
    for(let j=0; j < graph.adjacencyList.length; j++) {
      const fromVertex = graph.adjacencyList[j];
      let toVertex = fromVertex.next;
      while(toVertex !== fromVertex) {
        if(distance[toVertex.data] > distance[fromVertex.data] + toVertex.weight) {
          distance[toVertex.data] = distance[fromVertex.data] + toVertex.weight;
          path[toVertex.data] = fromVertex.data;
        }
        toVertex = toVertex.next;
      }
    }
  }

  for(let j=0; j < graph.adjacencyList.length; j++) {
    const fromVertex = graph.adjacencyList[j];
    let toVertex = fromVertex.next;
    while(toVertex !== fromVertex) {
      if(distance[toVertex.data] > distance[fromVertex.data] + toVertex.weight) {
        throw new Error("Negative weight cycle present");
      }
      toVertex = toVertex.next;
    }
  }
  console.log(distance);
  // console.log(path);
}

// to find minimum spanning tree 
// time -> O(ElogV)
const primsAlgo = (graph, sourceVertex) => {
  const spannigTree = [];
  const distance = new Array(graph.adjacencyList.length).fill(Infinity);
  const priorityQueue = new PriorityQueue();

  priorityQueue.enqueue(graph.adjacencyList[sourceVertex], 0);
  distance[sourceVertex] = 0;
  spannigTree[sourceVertex] = null;
  while(priorityQueue.array.length) {
      const fromVertex = priorityQueue.dequeue();
      let toVertex = fromVertex.next;
      while(toVertex !== fromVertex) {
          if(distance[toVertex.data] > distance[fromVertex.data] + toVertex.weight) {
              distance[toVertex.data] = toVertex.weight;
              spannigTree[toVertex.data] = fromVertex.data.toString() + toVertex.data.toString();
              priorityQueue.enqueue(graph.adjacencyList[toVertex.data], toVertex.weight);
          }
          toVertex = toVertex.next;
      }
  }
  console.log(distance);
  console.log(spannigTree);
}

// basic examples
const graphMeta = {vertex: 5, edgeList: [ [0, 1, 4], [0, 2, 1], [1, 4, 4], [2, 1, 2], [2, 3, 4], [3, 4, 4] ]};
// const graphMeta = {vertex: 5, edgeList: [ [1, 4, 2], [3, 1, 1], [1, 3, 2], [0, 1, -1], [0, 2, 4], [3, 2, 5], [1, 2, 3], [4, 3, -3] ]};

// negative edges
// const graphMeta = {vertex: 3, edgeList: [ [0, 1, 8], [1, 2, -5], [0, 2, 6] ]};
// const graphMeta = {vertex: 4, edgeList: [ [0, 1, 1], [0, 2, 0], [0, 3, 99], [1, 2, 1], [3, 1, -300] ]};


// graph with negative cycle
// const graphMeta = {vertex: 3, edgeList: [ [0, 1, 2], [1, 2, -4], [2, 0, 1] ]};

const graph = new Graph(graphMeta.vertex, graphMeta.edgeList.length, true);
graph.readEdges(false, graphMeta.edgeList);
// originalDijkastraAlgo(graph, 0);
// modifiedDijikstraAlgo(graph, 0);
// bellmanFordALgo(graph, 0);
primsAlgo(graph, 0);


// process.exit();
