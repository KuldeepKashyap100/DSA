const Graph = require("./Graph").GraphAdjacencyList;

/**
 *  will only works in case of unweighted graph it only updates distances which are nearer even if they heigher weight
 * */
const shortestPath = (graph, sourceVertex) => {
    const distance = Array.from({ length: graph.adjacencyList.length }, _ => -1);
    const path = Array.from({ length: graph.adjacencyList.length }, _ => []);
    distance[sourceVertex] = 0;
    path[sourceVertex].push(sourceVertex);
    const queue = [];
    queue.push(graph.adjacencyList[sourceVertex]);
    while(queue.length) {
        const fromVertex = queue.shift();
        let toVertex = fromVertex.next;
        while(toVertex !== fromVertex) {
            // each vertex updated only once
            if(distance[toVertex.data] === -1) {
                // each vertex enqueued only once
                queue.push(graph.adjacencyList[toVertex.data]);
                distance[toVertex.data] = distance[fromVertex.data] + 1;
                path[fromVertex.data].forEach(vertex => path[toVertex.data].push(vertex));
                path[toVertex.data].push(toVertex.data);
            }
            toVertex = toVertex.next;
        }
    }
    console.log(distance);
    console.log(path);
}


const graph = new Graph(7, 10, true);
graph.readEdges(false, [ [0,1], [0, 3], [1, 3], [1, 4], [2, 0], [2, 5], [3, 5], [3, 6], [4, 6], [6, 5] ]);
// graph.display();
// output - "1, 2, 0, 2, 3, 1, 3"
shortestPath(graph, 2);
