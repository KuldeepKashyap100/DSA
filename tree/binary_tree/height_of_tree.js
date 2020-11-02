// height is calculated as no. of edges from root to longest leaf node that's why -1 in base
const getHeight = (root) => {
    // base
    if(!root)
        return -1;
    // hypothesis
    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);
    // induction
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
}

const getHeightNonRecursive = (root) => {
    // using level order traversal
    const queue = [];
    let height = 0;
    queue.push(root);
    // flag to detect level
    queue.push(null);
    while(queue.length) {
        const dequedEle = queue.shift();
        if(dequedEle === null) {
            if(queue.length)
                queue.push(null);
            height++;
        }
        else {
            if(dequedEle.left)  queue.push(dequedEle.left);
            if(dequedEle.right) queue.push(dequedEle.right);
        }
    }
    return height;
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

console.log(getHeightNonRecursive(root));