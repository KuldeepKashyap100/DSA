const Graph = require("./Graph").GraphAdjacencyList;


const getInDregree = (graph) => {
    let count = 0;
    const inDegree = Array.from({length: graph.adjacencyList.length}, _ => 0);
    for(let i = 0; i < graph.adjacencyList.length; i++) {
        const fromVertex = graph.adjacencyList[i];
        let toVertex = fromVertex.next;
        while(toVertex !== fromVertex) {
            inDegree[toVertex.data]++;
            toVertex = toVertex.next;
        }
    }
    return inDegree;
}

const toplogicalSort = (graph) => {
    const sortedOrder = [];
    const queue = [];
    const inDegree = getInDregree(graph);
    for(let i = 0; i < graph.adjacencyList.length; i++) {
        if(inDegree[i] === 0) 
            queue.push(graph.adjacencyList[i]);
    }
    // push neighbouring vertices of vertex in queue if after decrementing 1 degree becomes 0
    while(queue.length) {
        const fromVertex = queue.shift();
        sortedOrder.push(fromVertex.data);

        let toVertex = fromVertex.next;
        while(toVertex !== fromVertex) {
            if(--inDegree[toVertex.data] === 0) 
                queue.push(graph.adjacencyList[toVertex.data]);
            toVertex = toVertex.next;
        }
    }
    console.log(sortedOrder);
}

const graph = new Graph(6, 6, true);

graph.readEdges(false, [ [2,3], [3, 1], [5, 2], [5, 0], [4,0], [4,1] ]);
// graph.display();
// output - "5 4 2 3 1 0" or "4 5 2 3 1 0"
toplogicalSort(graph);