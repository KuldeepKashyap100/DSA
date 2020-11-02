const findHalfNodes = (root) => {
    if(!root)
        return 0;
    const leftHalfNodes = findHalfNodes(root.left);
    const rightHalfNodes = findHalfNodes(root.right);
    if(!(root.left && root.right) && (root.left || root.right))
        return leftHalfNodes + rightHalfNodes + 1;
    return leftHalfNodes + rightHalfNodes;
}


const findHalfNodesNonRecursive = (root) => {
    const queue = [];
    queue.push(root);
    let halfNodeCount = 0;
    while(queue.length) {
        temp = queue.shift();
        if(!(temp.left && temp.right) && (temp.left || temp.right))
            halfNodeCount++;
        if(temp.left)
            queue.push(temp.left);
        if(temp.right)
            queue.push(temp.right);
    }
    return halfNodeCount;
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

console.log(findHalfNodes(root));