const Graph = require("../Graph").GraphAdjacencyList;

/**
 * For Undirected Graph
 * Detect cycle and eleminate it. does not have to be a minimum spannig tree.
 */

const findSpannigTree = (graph, startVertex) => {
    vertexVisited[startVertex] = true;
    const fromVertex = graph.adjacencyList[startVertex];
    let toVertex = fromVertex.next;
    while (toVertex !== fromVertex) {
        if(!vertexVisited[toVertex.data]) {
            findSpannigTree(graph, toVertex.data);
            edgeList.push(fromVertex.data.toString() + toVertex.data);
        }
        toVertex = toVertex.next;
    }
}

const graphMeta = {vertex: 5, edgeList: [ [0, 1, 4], [0, 2, 1], [1, 4, 4], [2, 1, 2], [2, 3, 4], [3, 4, 4] ]};
const graph = new Graph(graphMeta.vertex, graphMeta.edgeList.length, false);
graph.readEdges(false, graphMeta.edgeList);

const vertexVisited = new Array(graph.adjacencyList.length).fill(false);
const edgeList = [];


findSpannigTree(graph, 0);
console.log(edgeList);