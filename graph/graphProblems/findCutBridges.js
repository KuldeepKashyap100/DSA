const Graph = require("../Graph").GraphAdjacencyMatrix;

const findCutBridges = (graph, fromVertex) => {
    visitedTime[fromVertex] =  lowTime[fromVertex] = time++;

    for(let i=0; i < graph.adjacencyMatrix.length; i++) {
        const currentVertex = graph.adjacencyMatrix[fromVertex][i];
        if(currentVertex) {
            if(visitedTime[i] === -1) {
                parentVertex[i] = fromVertex;
                findCutBridges(graph, i);
                lowTime[fromVertex] = Math.min(lowTime[fromVertex], lowTime[i]);

                if(lowTime[i] > visitedTime[fromVertex]) {
                    console.log(i.toString() + fromVertex.toString());
                }
            }
            else if(i !== parentVertex[fromVertex]) {
                lowTime[fromVertex] = Math.min(lowTime[fromVertex], visitedTime[i]);
            }
        }
    }

}

const graphMeta = {vertex: 8, edgeList: [ [0, 1], [0, 2], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [5, 7] ]};
const graph = new Graph(graphMeta.vertex, graphMeta.edgeList.length, false);
graph.readEdges(false, graphMeta.edgeList);

const visitedTime = new Array(graph.adjacencyMatrix.length).fill(-1);

const lowTime = new Array(graph.adjacencyMatrix.length).fill(0);
const parentVertex = new Array(graph.adjacencyMatrix.length).fill(null);

let time = 0;

findCutBridges(graph, 3);