const Graph = require("../Graph").GraphAdjacencyMatrix;

/**
 * A simple approach is to one by one remove all vertices and 
 * see if removal of a vertex causes disconnected graph. 
 * Following are steps of simple approach for connected graph.
 * time ->  O(V*(V+E))
 * tarjan's algorithm
 * https://www.youtube.com/watch?v=2kREIkF9UAs
 */
// time -> O(V + E) because we are using dfs
const findCutVertices = (graph, fromVertex) => {
    visitedTime[fromVertex] =  lowTime[fromVertex] = time++;

    for(let i=0; i < graph.adjacencyMatrix.length; i++) {
        const currentVertex = graph.adjacencyMatrix[fromVertex][i];
        if(currentVertex) {
            if(visitedTime[i] === -1) {
                findCutVertices(graph, i);
                /**
                 * A vertex is a cut vertex if there exits a child,
                 * whose lowTime >= visit time of parent (of course expcept the parent of cut vertex).
                 */
                if(lowTime[i] >= visitedTime[fromVertex]) {
                    cutVertices.add(fromVertex);
                }
                lowTime[fromVertex] = Math.min(lowTime[fromVertex], lowTime[i]);
            }
            else {
                /** 
                 * Before the element is pop off the stack calculate its lowTime
                 * which is lowest of visitedTime of all its neighbors except its parent.
                 * */
                lowTime[fromVertex] = Math.min(lowTime[fromVertex], visitedTime[i]);
            }
        }
    }

}

const graphMeta = {vertex: 8, edgeList: [ [0, 1], [0, 2], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [5, 7] ]};
const graph = new Graph(graphMeta.vertex, graphMeta.edgeList.length, false);
graph.readEdges(false, graphMeta.edgeList);

const visitedTime = new Array(graph.adjacencyMatrix.length).fill(-1);
/** 
 * we need to find out the earliest visited vertex (the vertex with minimum discovery time) that can be reached from subtree rooted with u. 
*/
const lowTime = new Array(graph.adjacencyMatrix.length).fill(0);
const cutVertices = new Set();
let time = 0;

findCutVertices(graph, 3);
console.log(cutVertices);
// expected - 2, 3, 4, 5