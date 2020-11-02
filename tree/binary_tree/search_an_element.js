const searchElement = (root, k) => {
    if(!root)
        return false;

    if(root.data === k)
        return true;
    const foundLeft = searchElement(root.left, k);
    const foundRight = searchElement(root.right, k);
    return foundLeft || foundRight;
}

const searchElementNonRecursive = (root, k) => {
    const queue = [];
    queue.push(root);
    while(queue.length) {
        const temp = queue.shift();
        if(temp.data === k)
            return true;
        if(temp.left)
            queue.push(temp.left);
        if(temp.right)
            queue.push(temp.right);
    }
    return false;
}

const Node = function (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(10);

console.log(searchElement(root, 11));