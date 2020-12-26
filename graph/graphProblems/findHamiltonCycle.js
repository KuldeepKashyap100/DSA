const Graph = require("../Graph").GraphAdjacencyMatrix;

// check if the vertex can be added at index 'position'in the Hamiltonian Cycle.
const isSafe = (graph, vertex, position) => {
    /*
        Check if this vertex is an adjacent vertex of 
        the previously added vertex. 
    */
   if(!graph.adjacencyMatrix[position - 1][vertex]) {
       return false
   }
   /* 
        Check if the vertex has already been included.
    */
   for(let i = 0; i < position; i++) {
       if(path[i] === vertex) {
           return false;
       }
   }
   return true;
}

const hamCycleUtil = (graph, position) => {
    /* 
        base case: If all vertices are included in 
        Hamiltonian Cycle 
    */
   if(position === graph.adjacencyMatrix.length) {
        // And if there is an edge from the last included 
        // vertex to the first vertex
        if(graph.adjacencyMatrix[path[position - 1]][path[0]]) {
            return true;
        }
        return false;
   }

    // Try different vertices as a next candidate in 
    // Hamiltonian Cycle. We don't try for 0 as we 
    // included 0 as starting point in hamCycle() 
    for(let i = 1; i < graph.adjacencyMatrix.length; i++) {
        /* 
            Check if this vertex can be added to Hamiltonian 
            Cycle.
        */
       if(isSafe(graph, i, position)) {
           path[position] = i;
           /* recur to construct rest of the path */
           if (hamCycleUtil(graph, position + 1)) 
                return true; 
            /* If adding vertex v doesn't lead to a solution, 
                then remove it */
            path[position] = -1;
       }
    }
    /* If no vertex can be added to Hamiltonian Cycle 
        constructed so far, then return false */
    return false; 
}

/* This function solves the Hamiltonian Cycle problem using 
    Backtracking. It mainly uses hamCycleUtil() to solve the 
    problem. It returns false if there is no Hamiltonian Cycle 
    possible, otherwise return true and prints the path. 
    Please note that there may be more than one solutions, 
    this function prints one of the feasible solutions. 
*/
const hamCycle = (graph) =>{ 
    /* Let us put vertex 0 as the first vertex in the path. 
        If there is a Hamiltonian Cycle, then the path can be 
        started from any point of the cycle as the graph is 
        undirected */
    path[0] = 0; 
    if (!hamCycleUtil(graph, 1)) { 
        console.log("\nSolution does not exist"); 
    } 

    console.log(path); 
} 

const graphMeta = {vertex: 5, edgeList: [ [0, 1, 4], [0, 2, 1], [1, 4, 4], [2, 1, 2], [2, 3, 4], [3, 4, 4] ]};

const graph = new Graph(graphMeta.vertex, graphMeta.edgeList.length, false);
graph.readEdges(false, graphMeta.edgeList);

const path = new Array(graphMeta.vertex).fill(-1);
hamCycle(graph);