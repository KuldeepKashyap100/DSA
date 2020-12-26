const Graph = require("../Graph").GraphAdjacencyMatrix;

// using dfs
const hasSimplePath = (graph, fromVertex, toVertex) => {
    let found = false;
    visitedNode[fromVertex] = true;
    if(fromVertex === toVertex)
        return true;
    for(let i=0; i < graph.adjacencyMatrix.length; i++) {
        if(graph.adjacencyMatrix[fromVertex][i] && !visitedNode[i]) {
            found = found || hasSimplePath(graph, i, toVertex);
        }
    }
    return found;
}

const countSimplePath = (graph, fromVertex, toVertex) => {
    let count = 0;
    if(fromVertex === toVertex)
        return 1;
    for(let i=0; i < graph.adjacencyMatrix.length; i++) {
        if(graph.adjacencyMatrix[fromVertex][i]) {
            count = count + countSimplePath(graph, i, toVertex);
        }
    }
    return count;
}

const graphMeta = {vertex: 6, edgeList: [ [0, 1, 4], [0, 2, 1], [1, 4, 4], [2, 1, 2], [2, 3, 4], [3, 4, 4], [3, 5, 6] ]};

const graph = new Graph(graphMeta.vertex, graphMeta.edgeList.length, true);
graph.readEdges(false, graphMeta.edgeList);

const visitedNode = new Array(graph.adjacencyMatrix.length).fill(false);

// console.log(hasSimplePath(graph, 0, 5));
console.log(countSimplePath(graph, 0, 4));


