const { PriorityQueueMin } = require("../../heap/Heap");
const Graph = require("../Graph").GraphAdjacencyList;


const allPairsShortestPath = (graph) => {
    const distance = Array.from({ length: graph.adjacencyList.length}, _ => new Array(graph.adjacencyList.length).fill(Infinity));
    // for every vertex
    for(let i = 0; i < graph.adjacencyList.length; i++) {
        distance[i][i] = 0;
        const pq = new PriorityQueueMin();
        pq.enqueue(graph.adjacencyList[i], 0);
        while(pq.length) {
            const fromVertex = pq.dequeue();
            let toVertex = fromVertex.next;
            while(toVertex !== fromVertex) {
                if(distance[i][toVertex.data] > distance[i][fromVertex.data] + toVertex.weight) {
                    distance[i][toVertex.data] = distance[i][fromVertex.data] + toVertex.weight;
                    pq.enqueue(graph.adjacencyList[toVertex.data], toVertex.weight);
                }
                toVertex = toVertex.next;
            }
        }
    }
    console.log(distance);
}

const forNegativeEdges = (graph) => {
    const distance = Array.from({ length: graph.adjacencyList.length}, _ => new Array(graph.adjacencyList.length).fill(Infinity));
    for(let k = 0; k < graph.adjacencyList.length; k++) {
        distance[k][k] = 0;
        // for every vertex
        for(let i = 0; i < graph.adjacencyList.length - 1; i++) {
            // for all the edges
            for(let j = 0; j < graph.adjacencyList.length; j++) {
                const fromVertex = graph.adjacencyList[j];
                let toVertex = graph.adjacencyList[j].next;
                while(fromVertex !== toVertex) {
                    if(distance[k][toVertex.data] > distance[k][fromVertex.data] + toVertex.weight) {
                        distance[k][toVertex.data] = distance[k][fromVertex.data] + toVertex.weight;
                    }
                    toVertex = toVertex.next;
                }
            }
        }
    }
    console.log(distance);
}

// const graphMeta = {vertex: 5, edgeList: [ [0, 1, 4], [0, 2, 1], [1, 4, 4], [2, 1, 2], [2, 3, 4], [3, 4, 4] ]};
const graphMeta = {vertex: 3, edgeList: [ [0, 1, 2], [1, 2, -4], [2, 0, 1] ]};



const graph = new Graph(graphMeta.vertex, graphMeta.edgeList.length, false);
graph.readEdges(false, graphMeta.edgeList);


// allPairsShortestPath(graph, 0, 4);
forNegativeEdges(graph, 0, 4);
