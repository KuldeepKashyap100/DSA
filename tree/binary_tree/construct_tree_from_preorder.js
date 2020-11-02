let index = 0;
const constructBinaryTree = (preOrder) => {
    const newNode = new Node(preOrder[index]);
    if(newNode.data === 'l')
        return newNode;
    newNode.left = constructBinaryTree(preOrder, ++index);
    newNode.right = constructBinaryTree(preOrder, ++index);
    return newNode;
}

const levelOrderTraversal = (root) => {
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

const head = constructBinaryTree(['i', 'i', 'l', 'l', 'i', 'l', 'l']);
levelOrderTraversal(head);