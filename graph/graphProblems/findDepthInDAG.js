const Graph = require("../Graph").GraphAdjacencyList;

const getIndegree = (graph) => {
    const inDegree = new Array(graph.adjacencyList.length).fill(0);
    for(let i=0; i < graph.adjacencyList.length; i++) {
        const fromVertex = graph.adjacencyList[i];
        let toVertex = fromVertex.next;
        while(toVertex !== fromVertex) {
            inDegree[toVertex.data]++;
            toVertex = toVertex.next;
        }
    }
    return inDegree;
}

/**
 * time -> O(V + E)
 */
const findDepthInDag = (graph) => {
    const inDegree = getIndegree(graph);

    let depth = 0;
    const queue = [];
    for(let i = 0; i < graph.adjacencyList.length; i++) {
        if(inDegree[i] === 0)
            queue.push(graph.adjacencyList[i]);
    }
    queue.push(null);
    while(queue.length) {
        const fromVertex = queue.shift();

        if(fromVertex === null) {
            depth++;
            if(queue.length)
                queue.push(null);
            continue;
        }

        let toVertex = fromVertex.next;
        while(toVertex !== fromVertex) {
            if(--inDegree[toVertex.data] === 0)
                queue.push(graph.adjacencyList[toVertex.data]);
            toVertex = toVertex.next;
        }
    }
    return depth;
}

const graphMeta = { vertex: 5, edgeList: [ [0, 1, 4], [0, 2, 1], [1, 4, 4], [2, 1, 2], [2, 3, 4], [3, 4, 4] ] };

const graph = new Graph(graphMeta.vertex, graphMeta.edgeList.length, true);
graph.readEdges(false, graphMeta.edgeList);

console.log(findDepthInDag(graph));

