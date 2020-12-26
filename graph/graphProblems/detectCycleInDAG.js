const Graph = require("../Graph").GraphAdjacencyList;

/**
 * time -> O(E + V)
 * space -> O(V)
 */
const hasCycle = (graph, startVertex) => {
    // move from white set grey set and then explore it.
    moveVertex(startVertex, whiteSet, greySet);

    const fromVertex = graph.adjacencyList[startVertex];
    let toVertex = fromVertex.next;
    while (toVertex !== fromVertex) {
        // if not completely explored
        if(!blackSet.has(toVertex.data)) {   
            // if in the grey set means cycle found
            if(greySet.has(toVertex.data)) {
                return true;
            }
            if(hasCycle(graph, toVertex.data)){
                return true;
            }
        }
        toVertex = toVertex.next;
    }

    // move from grey set black set when done exploring
    moveVertex(fromVertex, greySet, blackSet);
    return false;
}

const moveVertex = (vertex, souceSet, destinationSet) => {
    souceSet.delete(vertex);
    destinationSet.add(vertex);
}

detectCyleInDAG = (graph) => {
    // for disconnected graph we have to check every node
    for(let i=0; i < graph.adjacencyList.length; i++) {
        whiteSet.add(graph.adjacencyList[i].data);
    }
    for(let vertex of whiteSet.values()) {
        if(hasCycle(graph, vertex)) {
            return true;
        }
    }
    
    return false;
}



// Directed Acyclic Graph
// const graphMeta = {vertex: 3, edgeList: [ [0, 1, 4], [0, 2, 1], [2, 1, 2]]};

// Directed Cyclic Graph
const graphMeta = {vertex: 3, edgeList: [ [1, 0, 4], [0, 2, 1], [2, 1, 2]]};

const graph = new Graph(graphMeta.vertex, graphMeta.edgeList.length, true);
graph.readEdges(false, graphMeta.edgeList);

const blackSet = new Set();
const greySet = new Set();
const whiteSet = new Set();

console.log(detectCyleInDAG(graph, 0));