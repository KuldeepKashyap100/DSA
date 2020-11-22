
const removeHalfNodes = (root) => {
    if(!root)
        return null;
    root.left = removeHalfNodes(root.left);
    root.right = removeHalfNodes(root.right);
    if(!root.left && !root.right)
        return root;
    if(!root.left)
        return root.right;
    if(!root.right)
        return root.left;
    return root;
}

const display = (root) => {
    const queue = [];
    queue.push(root);
    while(queue.length) {
        const dequeuedItem = queue.shift();
        console.log(dequeuedItem.data);
        if(dequeuedItem.left) 
            queue.push(dequeuedItem.left);
        if(dequeuedItem.right)
            queue.push(dequeuedItem.right);
    }
}


const Node = function (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
// root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

removeHalfNodes(root);

display(root);
