const getLeafNodeCount = (root) => {
    if(!root)
        return null;
    let leftNode = getLeafNodeCount(root.left);
    let rightNode = getLeafNodeCount(root.right);
    if(!leftNode && !rightNode)
        return 1;
    return leftNode + rightNode;
}

const getLeafNodeCountNonRecursive = (root) => {
    const queue = [];
    let leafNodeCount = 0;
    queue.push(root);
    while(queue.length) {
        const ele = queue.shift();
        if(!ele.left && !ele.right) leafNodeCount++;
        if(ele.left)  queue.push(ele.left);
        if(ele.right)  queue.push(ele.right);

    }
    return leafNodeCount;
}

const Node = function (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(getLeafNodeCountNonRecursive(root));