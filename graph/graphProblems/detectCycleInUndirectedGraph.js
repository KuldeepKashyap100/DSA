const Graph = require("../Graph").GraphAdjacencyList;
const DisjointSet =  require("../../disjointSets/disjointSets");

const detectCyleUsingDfs = (graph, startVertex) => {
    vertexVisited[startVertex] = true;
    const fromVertex = graph.adjacencyList[startVertex];
    let toVertex = fromVertex.next;
    let isCycle = false;
    while (toVertex !== fromVertex) {
        // avoid going back to parent from which we came
        if(parent[fromVertex.data] !== toVertex.data) {
            // If we are visiting node for the second time then there must be a cycle.
            if(vertexVisited[toVertex.data]) {
                return true;
            }
            else {
                parent[toVertex.data] = fromVertex.data;
                isCycle = isCycle || detectCyleUsingDfs(graph, toVertex.data);
            }
        }
        toVertex = toVertex.next;
    }
    return isCycle;
}


/**
 * By using disjoint sets
 * time -> O(V)
 * space -> O(V)
 */

const detectCycleUsingDisjointSet = (graph, startVertex) => {
    const disjointSet = new DisjointSet();
    graph.adjacencyList.forEach(vertex => {
        disjointSet.makeSet(vertex.data);
    });
    for(let i=0; i < graph.adjacencyList.length; i++) {
        const fromVertex = graph.adjacencyList[i];
        let toVertex = fromVertex.next;
        while(toVertex !== fromVertex) {
            if(parent[fromVertex.data] !== toVertex.data && (disjointSet.findSet(fromVertex.data) === disjointSet.findSet(toVertex.data))) {
                return true;
            }
            parent[toVertex.data] = fromVertex.data;
            disjointSet.union(fromVertex.data, toVertex.data);
            toVertex = toVertex.next;
        }
    }
    return false;
}



// failure case in DAG
// const graphMeta = {vertex: 3, edgeList: [ [0, 1, 4], [0, 2, 1], [2, 1, 2]]};
// const graph = new Graph(graphMeta.vertex, graphMeta.edgeList.length, true);

// Undirected Cyclic Graph
// const graphMeta = {vertex: 5, edgeList: [ [0, 1, 4], [0, 2, 1], [1, 4, 4], [2, 1, 2], [2, 3, 4], [3, 4, 4] ]};
// Undirected Acyclic graph 
const graphMeta = {vertex: 5, edgeList: [ [0, 1, 4], [0, 2, 1], [1, 4, 4], [2, 3, 4]]};

const graph = new Graph(graphMeta.vertex, graphMeta.edgeList.length, false);
graph.readEdges(false, graphMeta.edgeList);

let vertexVisited = new Array(graph.adjacencyList.length).fill(false);
let parent = new Array(graph.adjacencyList.length).fill(-1);

// console.log(detectCycleUsingDisjointSet(graph, 0));
console.log(detectCyleUAG(graph, 0));



