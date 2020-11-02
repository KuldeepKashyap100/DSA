// nodes with only one child
const findFullNodes = (root) => {
    if(!root)
        return 0;
    const leftFullNodes = findFullNodes(root.left);
    const rightFullNodes = findFullNodes(root.right);
    if(root.left && root.right)
        return leftFullNodes + rightFullNodes + 1;
    return leftFullNodes + rightFullNodes ;
}

const findFullNodesNonRecursive = (root) => {
    const queue = [];
    queue.push(root);
    let fullNodeCount = 0;
    while(queue.length) {
        temp = queue.shift();
        if(temp.left && temp.right)
            fullNodeCount++;
        if(temp.left)
            queue.push(temp.left);
        if(temp.right)
            queue.push(temp.right);
    }
    return fullNodeCount;
}

const Node = function (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const root = new Node(1);
root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.right.left = new Node(6);
// root.right.right = new Node(7);

console.log(findFullNodesNonRecursive(root));