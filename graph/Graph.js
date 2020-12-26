const LinkedList = require("../linked_list/LinkedList");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  setEncoding: "utf-8"
});

// this representation is good if the graph is dense (i.e no. of edges propotional to v^2)
// time for initialisation -> o(v^2)
// space -> o(v^2)
class GraphAdjacencyMatrix {
    constructor(vertices, edges, directed = false) {
        this.vertices = vertices;
        this.edges = edges;
        // this.adjacencyMatrix = new Array(vertices).fill().map(() => Array(vertices).fill(0));
        this.adjacencyMatrix = Array.from(Array(vertices), () => Array(vertices).fill(0));
        this.directed = directed;
    }
    async readEdges(isInputEdges, listOfEdges = []) {
        for(let i=0; i < this.edges; i++) {
            const input = !isInputEdges ? listOfEdges[i] : await this.readInput();
            let [ startVertex, endVertex, weight ] = input;
            this.adjacencyMatrix[startVertex][endVertex] = weight ? weight : 1;
            if(!this.directed) {
                this.adjacencyMatrix[endVertex][startVertex] = weight ? weight : 1;
            }
        }
        readline.close();
    }
    readInput() {
        return new Promise((resolve, reject) => {
          console.log("Enter start and end vertices: ");
          readline.on("line", (input) => {
            resolve(input.split(" "));
          });
        });
    }
    display() {
        for(let i = 0; i < this.vertices; i++) {
            let row = "";
            for(let j = 0; j < this.vertices; j++) {
                row = row + this.adjacencyMatrix[i][j] + " ";
                // console.log(this.adjacencyMatrix[i][j]);
            }
            console.log(row + "\n");
        }
    }
}

// const createGraph = async () => {
//     const graph = new GraphAdjacencyMatrix(4, 5, true);
//     await graph.readEdges();
//     graph.display();
// };

// createGraph();

const Node = function(data, weight = 1, next = null) {
    this.data = data;
    this.weight = weight;
    this.next = next;
}

class GraphAdjacencyList {
    constructor(vertices, edges, directed = false) {
        this.vertices = vertices;
        this.edges = edges;
        this.adjacencyList = Array.from(Array(vertices),(value, index) => { 
            const newNode = new Node(index);
            newNode.next = newNode;
            return newNode;
        });
        this.directed = directed;
    }
    async readEdges(isInputEdges, listOfEdges = []) {
        for(let i=0; i < this.edges; i++) {
            const input = !isInputEdges ? listOfEdges[i] : await this.readInput();
            let [ startVertex, endVertex, weight ] = input;
            const newNode = new Node(endVertex, weight);
            this.insertNode(this.adjacencyList[startVertex], newNode);
            newNode.next = this.adjacencyList[startVertex];
            if(!this.directed) {
                const newNode = new Node(startVertex, weight);
                this.insertNode(this.adjacencyList[endVertex], newNode);
                newNode.next = this.adjacencyList[endVertex];
            }
        }
        readline.close();
    }
    insertNode(head, node) {
        let temp = head;
        while(temp.next !== head) {
            temp = temp.next;
        }
        temp.next = node;
    }
    readInput() {
        return new Promise((resolve, reject) => {
            console.log("Enter start and end vertices: ");
            readline.on("line", (data) => {
                resolve(data.split(" "));
            });
        });
    }
    display() {
        for(let i =0; i<this.adjacencyList.length; i++) {
            let row = "";
            let head = this.adjacencyList[i];
            do {
                row = row + head.data + " ";
                head = head.next;
            } while(head !== this.adjacencyList[i])
            console.log(row);
        }
    }

    initialiseVertexVisitedFlagList() {
        this.vertexVisitedFlagList = Array.from({length: this.adjacencyList.length}, () => false );
    }

    /**
     * Depth first search
     * similar to pre order traversal
     * time -> o(v + e)
     * space -> o(v)
     */
    depthFirstSearch() {
        const startVertex = this.adjacencyList[0];
        this.initialiseVertexVisitedFlagList();
        // if the graph has more than one component (i.e disconnected graph)
        for(let i = 0; i < this.adjacencyList.length; i++) {
            if(!this.vertexVisitedFlagList[i]) {
                this.dfs(i);
            }
        }
    }
    dfs(fromVertex) {
        // vertex visited
        this.vertexVisitedFlagList[fromVertex] = true;

        let toVertex = this.adjacencyList[fromVertex].next;
        while(toVertex !== this.adjacencyList[fromVertex]) {
            if(!this.vertexVisitedFlagList[toVertex.data])
                this.dfs(toVertex.data);
            toVertex = toVertex.next;
        }
    }

    /**
     * Breadth first search
     * similar to level order traversal
     * time -> o(v + e)
     * space -> o(v)
     */
    breadthFirstSearch() {
        this.initialiseVertexVisitedFlagList();
        // if the graph has more than one component (i.e disconnected graph)
        for(let i=0; i < this.adjacencyList.length; i++) {
            if(!this.vertexVisitedFlagList[i]) {
                this.bfs(i);
            }
        }
    }

    bfs(fromVertex) {
        const queue = [];
        queue.push(fromVertex);
        this.vertexVisitedFlagList[fromVertex] = true;

        while(queue.length) {
            const vertexVisited = queue.shift();

            let toVertex = this.adjacencyList[vertexVisited].next;
            while(toVertex !== this.adjacencyList[vertexVisited]) {
                if(!this.vertexVisitedFlagList[toVertex.data]) {
                    queue.push(toVertex.data);
                    this.vertexVisitedFlagList[toVertex.data] = true;  
                }
                toVertex = toVertex.next;
            }
        }
    }

}

const createGraph = async () => {
    const graph = new GraphAdjacencyList(8, 8, false);
    // const listOfEdges = [[0, 1], [0,3], [1,2], [2,0], [2,3]];
    // const listOfEdges = [[0, 1], [0,2],[1,2], [2,0],[2,3]];
    // const listOfEdges = [[2, 0], [0,2],[1,2], [0,1],[1,3]];
    const listOfEdges = [[0, 1], [1, 2], [1, 7], [2,3], [2,4], [4, 5], [4, 6], [4, 7]];
    await graph.readEdges(false, listOfEdges);
    console.log("DFS");
    graph.depthFirstSearch();
    console.log("\n"+"BFS");
    graph.breadthFirstSearch();
    // graph.display();
};

// createGraph();


module.exports = { GraphAdjacencyList, GraphAdjacencyMatrix };

