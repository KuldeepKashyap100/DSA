const DisjointSet =  require("../disjointSets/disjointSets");
const Graph = require("./Graph").GraphAdjacencyList;


const kruskals = (graph) => {
    const sortedEdgeList = [];
    const disjointSets = new DisjointSet();
    // fetch edge list
    graph.adjacencyList.forEach(fromVertex => {
        let toVertex = fromVertex.next;
        disjointSets.makeSet(fromVertex.data);

        while(fromVertex !== toVertex) {
            sortedEdgeList.push([fromVertex.data, toVertex.data, toVertex.weight]);
            toVertex = toVertex.next;
        }
    });
    // sort edge list
    sortedEdgeList.sort((a, b) => a[2] - b[2]);

    const minimumSpannigTree = [];

    sortedEdgeList.forEach(edge => {
        if(disjointSets.findSet(edge[0]) !== disjointSets.findSet(edge[1])) {
            disjointSets.union(edge[0], edge[1]);
            minimumSpannigTree.push(edge[0].toString() + edge[1].toString());
        }
    });
    console.log(minimumSpannigTree);
}


const graphMeta = {vertex: 5, edgeList: [ [0, 1, 4], [0, 2, 1], [1, 4, 4], [2, 1, 2], [2, 3, 4], [3, 4, 4] ]};

const graph = new Graph(graphMeta.vertex, graphMeta.edgeList.length, true);
graph.readEdges(false, graphMeta.edgeList);
kruskals(graph, 0);