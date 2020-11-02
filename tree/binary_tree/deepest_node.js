const deepestNode = (root) => {
    const queue = [];
    let temp;
    queue.push(root);
    while(queue.length) {
        temp = queue.shift();
        if(temp.left) queue.push(temp.left);
        if(temp.right) queue.push(temp.right);
    }
    return temp.data;
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

console.log(deepestNode(root));