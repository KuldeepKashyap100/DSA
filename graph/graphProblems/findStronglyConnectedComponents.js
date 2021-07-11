const Graph = require("../Graph").GraphAdjacencyList;

/**
 * kosaraju's Algorithm -
 * The idea is, if every node can be reached from a vertex v, and every node can reach v, 
 * then the graph is strongly connected. 
 * 
 * time -> O(2*(V + E)) Beacuse we are performing DFS 2 times
 * https://www.youtube.com/watch?v=RpgcYiky7uw
 * https://www.geeksforgeeks.org/strongly-connected-components/
 */

const firstDFS = (graph, startVertex) => {
    vertexVisited[startVertex] = true;
    const fromVertex = graph.adjacencyList[startVertex];
    let toVertex = fromVertex.next;
    while (toVertex !== fromVertex) {
        if(!vertexVisited[toVertex.data])
            firstDFS(graph, toVertex.data);
        toVertex = toVertex.next;
    }
    stack.push(fromVertex.data);
}

const secondDFS = (graph, startVertex) => {
    vertexVisited[startVertex] = true;
    const fromVertex = graph.adjacencyList[startVertex];
    let toVertex = fromVertex.next;
    let visitedPath = "";
    while (toVertex !== fromVertex) {
        if(!vertexVisited[toVertex.data]) {
            visitedPath = secondDFS(graph, toVertex.data);
        }
        toVertex = toVertex.next;
    }
    return visitedPath + toVertex.data + " ";
}

const findConnectedComponents = () => {
    for(let i = 0; i < graph.adjacencyList.length; i++) {
        if(!vertexVisited[i]) {
            firstDFS(graph, i);
        }
    }
    const reversedGraph = getReversedGraph();
    vertexVisited = new Array(graph.adjacencyList.length).fill(false);
    while(stack.length) {
        const poppedFromStack = stack.pop();
        if(!vertexVisited[poppedFromStack]) {
            const connectedComponent = secondDFS(reversedGraph, poppedFromStack);
            connectedComponents.push(connectedComponent);
        }
    }
}

const getReversedGraph = () => {
    const graphReversedMeta = { ...graphMeta };
    graphReversedMeta.edgeList = graphReversedMeta.edgeList.map(([fromVertex, toVertex]) => [toVertex, fromVertex]);
    const graph = new Graph(graphReversedMeta.vertex, graphReversedMeta.edgeList.length, true);
    graph.readEdges(false, graphReversedMeta.edgeList);
    return graph;
}

const graphMeta = {vertex: 11, edgeList: [ [0, 1], [1, 2], [1, 3], [2, 0], [3, 4], [4, 5], [5, 3], [6, 5], [6, 7], [7, 8], [8, 9], [9, 6], [9, 10] ]};
const graph = new Graph(graphMeta.vertex, graphMeta.edgeList.length, true);
graph.readEdges(false, graphMeta.edgeList);

let vertexVisited = new Array(graph.adjacencyList.length).fill(false);
const stack = [];

const connectedComponents = [];
findConnectedComponents();
console.log(connectedComponents);
