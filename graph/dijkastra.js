const PriorityQueue = require("../heap/Heap").PriorityQueueMin;
const Graph = require("./Graph").GraphAdjacencyList;

const Node = function(data, priority) {
    this.data = data;
    this.priority = priority;
}

// time -> o(E.logV)
//space -> o(V)
/**
 * O(for each vertex using min heap: for each edge linearly: push vertices to min heap that edge points to)
    V = number of vertices
    O(V * (pop vertex from min heap + find unvisited vertices in edges * push them to min heap))
    E = number of edges on each vertex
    O(V * (pop vertex from min heap + E * push unvisited vertices to min heap)). Note, that we can push the same node multiple times here before we get to "visit" it.
    O(V * (log(heap size) + E * log(heap size)))
    O(V * ((E + 1) * log(heap size)))
    O(V * (E * log(heap size)))
    E = V because each vertex can reference all other vertices
    O(V * (V * log(heap size)))
    O(V^2 * log(heap size))
    heap size is V^2 because we push to it every time we want to update a distance and can have up to V comparisons for each vertex. E.g. for the last vertex, 1st vertex has distance 10, 2nd has 9, 3rd has 8, etc, so, we push each time to update
    O(V^2 * log(V^2))
    O(V^2 * 2 * log(V))
    O(V^2 * log(V))
    V^2 is also a total number of edges, so if we let E = V^2 (as in the official naming), we will get the O(E * log(V))

 */
const dikastra = (graph, souceVertex) => {
    const path = [];

    const distance = Array.from({ length: graph.adjacencyList.length }, _ => Infinity);
    distance[souceVertex] = 0;
    path[souceVertex] = 0;


    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue(new Node(souceVertex, 0));

    while(priorityQueue.length) {
        const fromVertex = graph.adjacencyList[priorityQueue.dequeue().data];
        let toVertex = fromVertex.next;
        while(toVertex !== fromVertex) {
            const updatedDistance = distance[fromVertex.data] + toVertex.weight;
            if(distance[toVertex.data] > updatedDistance) {
                distance[toVertex.data] = updatedDistance;
                path[toVertex.data] = fromVertex.data;
                priorityQueue.enqueue(new Node(toVertex.data, toVertex.weight));
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