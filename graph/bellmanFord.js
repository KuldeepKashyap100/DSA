const Graph = require("./Graph").GraphAdjacencyList;


// time -> o(E.V)
// space -> o(V)
const bellmanFord = (graph, sourceVertex) => {
    const distance = Array.from({length: graph.adjacencyList.length}, _ => Infinity);
    const path = [];
    const queue = [];
    queue.push(graph.adjacencyList[sourceVertex]);
    distance[sourceVertex] = 0;
    path[sourceVertex] = null;

    while(queue.length) {
        const fromVertex = queue.shift();
        let toVertex = graph.adjacencyList[fromVertex.data].next;
        while(toVertex !== fromVertex) {
            if(distance[toVertex.data] > distance[fromVertex.data] + toVertex.weight) {
                distance[toVertex.data] = distance[fromVertex.data] + toVertex.weight;
                path[toVertex.data] = fromVertex.data;
                queue.push(graph.adjacencyList[toVertex.data]);
            }
            toVertex = toVertex.next;
        }
    }
    console.log(distance);
    console.log(path);
}


const edgeList = [ [0, 1, 4], [0, 2, 1], [1, 4, 4], [2, 1, 2], [2, 3, 4], [3, 4, 4] ];
// const edgeList = [ [1, 4, 2], [3, 1, 1], [1, 3, 2], [0, 1, -1], [0, 2, 4], [3, 2, 5], [1, 2, 3], [4, 3, -3] ];
const graph = new Graph(5, edgeList.length, true);


graph.readEdges(false, edgeList);
bellmanFord(graph, 0);
