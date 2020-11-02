const deleteElement = (root, targetNode) => {
    const queue = [];
    let foundNode;
    let temp;
    let parentOfLeaf;
    queue.push(root);
    while(queue.length) {
        temp = queue.shift();
        if(temp.left) {
            parentOfLeaf = temp;

            if(temp.left.data === targetNode)
                foundNode = temp;
            queue.push(temp.left)
        };
        if(temp.right) {
            parentOfLeaf = temp;

            if(temp.right.data === targetNode)
                foundNode = temp;
            queue.push(temp.right)
        };
    }
    // had to write to delete the leaf node in other languages could have used delete.
    if(foundNode.left) {
        foundNode.left.data = temp.data;
    }
    else if(foundNode.right) {
        foundNode.right.data = temp.data;
    }

    if(parentOfLeaf.right) {
        parentOfLeaf.left = null;
    }
    else if(parentOfLeaf.left) {
        parentOfLeaf.right = null;
    }
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

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);


deleteElement(root, 2);
levelOrderTraversal(root);
