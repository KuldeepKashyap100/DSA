const PriorityQueue = require("../heap/Heap").PriorityQueueMin;
const Graph = require("./Graph").GraphAdjacencyList;

const Node = function(data, priority) {
    this.data = data;
    this.priority = priority;
}

// time -> o(E.logV)
//space -> o(V)
const dikastra = (graph, souceVertex) => {
    const path = [];

    const distance = Array.from({ length: graph.adjacencyList.length }, _ => Infinity);
    distance[souceVertex] = 0;
    path[souceVertex] = 0;


    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue(new Node(graph.adjacencyList[souceVertex].data, 0));

    while(priorityQueue.length) {
        const fromVertex = graph.adjacencyList[priorityQueue.dequeue().data];
        let toVertex = graph.adjacencyList[fromVertex.data].next;
        while(toVertex !== fromVertex) {
            const updatedDistance = distance[fromVertex.data] + toVertex.weight;
            if(distance[toVertex.data] > updatedDistance) {
                distance[toVertex.data] = updatedDistance;
                path[toVertex.data] = fromVertex.data;
                priorityQueue.enqueue(new Node(graph.adjacencyList[toVertex.data].data, toVertex.weight));
            }
            toVertex = toVertex.next;
        }
    }
    console.log(distance);
    // console.log(path);
}

const edgeList = [ [0, 1, 4], [0, 2, 1], [1, 4, 4], [2, 1, 2], [2, 3, 4], [3, 4, 4] ];
// const edgeList = [ [1, 4, 2], [3, 1, 1], [1, 3, 2], [0, 1, -1], [0, 2, 4], [3, 2, 5], [1, 2, 3], [4, 3, -3] ];
const graph = new Graph(5, edgeList.length, false);
graph.readEdges(false, edgeList);
dikastra(graph, 1);