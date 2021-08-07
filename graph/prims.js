const PriorityQueue = require("../heap/Heap").PriorityQueueMin;
const Graph = require("./Graph").GraphAdjacencyList;

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
            if(distance[toVertex.data] > toVertex.weight) {
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

const graphMeta = {vertex: 5, edgeList: [ [0, 1, 4], [0, 2, 1], [1, 4, 4], [2, 1, 2], [2, 3, 4], [3, 4, 4] ]};

const graph = new Graph(graphMeta.vertex, graphMeta.edgeList.length, true);
graph.readEdges(false, graphMeta.edgeList);
primsAlgo(graph, 0);