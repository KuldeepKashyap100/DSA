const Graph = require("../Graph").GraphAdjacencyList;

/**
 * We must find the path in the graph that visits every edge exactly once.
 * we will use DFS.
 * time ->  O(V*(V+E))
 */


const findEulerianCircuit = () => {
    // store edges
    for(let i=0; i<graph.adjacencyList.length; i++) {
        const fromVertex = graph.adjacencyList[i];
        let toVertex = fromVertex.next;
        while(toVertex !== fromVertex) {
            visitedEdge[fromVertex.data.toString() + toVertex.data] = false;
            toVertex = toVertex.next;
        }
    }

    // visit each vertex seperately
    for(let i = 0; i < graph.adjacencyList.length; i++) {
        findEulerianCircuitUtil(graph, i, [i]);
    }

    circuitsFound = Array.from(circuitsFound);

    const path = circuitsFound[0];
    for(let i = 1; i < circuitsFound.length; i++) {
        const insertIndex = path.indexOf(circuitsFound[i][0]);
        if(insertIndex !== -1) {
            path.splice(insertIndex, 1, ...circuitsFound[i]);
        }
    }

    console.log(path);
}

const findEulerianCircuitUtil = (graph, startVertex, path) => {
    const fromVertex = graph.adjacencyList[startVertex];
    let toVertex = fromVertex.next;
    
    while (toVertex !== fromVertex) { 
        if(path.length > 1 && path[0] === path[path.length - 1])  {
            circuitsFound.add(path);
            return;
        }
        else if(!visitedEdge[fromVertex.data.toString() + toVertex.data]) {
            visitedEdge[fromVertex.data.toString() + toVertex.data] = true;
            path.push(toVertex.data)
            findEulerianCircuitUtil(graph, toVertex.data, path);
        }
        toVertex = toVertex.next;
    }
}




const graphMeta = {vertex: 6, edgeList: [ [0, 1], [1, 2], [1, 3], [2, 0], [2, 3], [3, 5], [3, 4], [4, 1], [4, 2], [5, 4] ]};
const graph = new Graph(graphMeta.vertex, graphMeta.edgeList.length, true);
graph.readEdges(false, graphMeta.edgeList);


const visitedEdge = new Map();
let circuitsFound = new Set();

findEulerianCircuit();