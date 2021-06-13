/**
 * https://www.geeksforgeeks.org/print-nodes-distance-k-given-node-binary-tree/
 * Given a binary tree, a target node in the binary tree, and an integer value k, 
 * print all the nodes that are at distance k from the given target node. 
 * No parent pointers are available.
 **/

const Node = function(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
}
const findNodesDistanceK = (root, target, k) => {
    const parentMap = {};
    populateNodeToParent(root, parentMap);
    const targetNode = getNodeFromValue(target, target, parentMap);
    bfs(targetNode, parentMap, k);

    // now using dfs
    const nodeDistanceK = [];
    dfs(root, target, k, nodeDistanceK);
    console.log(nodeDistanceK);
}

const populateNodeToParent = (root, parentMap, parent = null) => {
    // using bfs
    if(!root) return;
    parentMap[root.value] = parent;
    populateNodeToParent(root.left, parentMap, root);
    populateNodeToParent(root.right, parentMap, root);
}

const getNodeFromValue = (value, root, parentMap) => {
    if(root.value === value) return root;
    
    const parent = parentMap[value];
    if(parent.left && parent.left.value === value) return parent;
    return parent.right;
}

const bfs = (targetNode, parentMap, k) => {
    const queue = [], seen = new Set();
    seen.add(targetNode.value);
    queue.push([targetNode, 0]);

    while(queue.length) {
        const [currentNode, distanceFromTarget] = queue.shift();

        if(distanceFromTarget === k) {
            const nodeDistanceK = queue.map(_ => _[0].value);
            nodeDistanceK.push(currentNode.value);
            console.log(nodeDistanceK);
            return;
        }

        const connectedNodes = [currentNode.left, currentNode.right, parentMap[currentNode.value]];
        for(const node of connectedNodes) {
            if(!node) continue;
            if(seen.has(node.value)) continue;

            seen.add(node.value);
            queue.push([node, distanceFromTarget + 1]);
        }
    }
}

const dfs = (root, target, k, nodeDistanceK) => {
    if(!root) return -1;

    if(root.value === target) {
        addSubtreeNodesAtDistanceK(root, 0, k, nodeDistanceK);
        return 1;
    }

    const leftDistance = dfs(root.left, target, k, nodeDistanceK);
    const rightDistance = dfs(root.right, target, k, nodeDistanceK);

    if(leftDistance !== -1) {
        addSubtreeNodesAtDistanceK(root.right, leftDistance + 1, k, nodeDistanceK);
        return leftDistance + 1;
    }

    if(rightDistance !== -1) {
        addSubtreeNodesAtDistanceK(root.left, rightDistance + 1, k, nodeDistanceK);
        return rightDistance + 1;
    }
    return -1;
}

const addSubtreeNodesAtDistanceK = (root, distance, k, nodeDistanceK) => {
    if(!root) return;
    
    if(distance === k) {
        nodeDistanceK.push(root.value);
        return;
    }
    addSubtreeNodesAtDistanceK(root.left, distance + 1, k, nodeDistanceK);
    addSubtreeNodesAtDistanceK(root.right, distance + 1, k, nodeDistanceK);
}

const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);

root.right = new Node(3);
root.right.right = new Node(6);
root.right.right.left = new Node(7);
root.right.right.right = new Node(8);
// expected output -> [2, 7, 8]

let target = 3, distance = 2;
findNodesDistanceK(root, target, distance);