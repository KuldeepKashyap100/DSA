const Node = function (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

let preOrderIndex = 0;
const constructTree = (preOrder, inOrder, inOrderStartIndex, inOrderEndIndex) => {
    if(inOrderStartIndex > inOrderEndIndex) return null;
    const newNode = new Node(preOrder[preOrderIndex++]);

    if(inOrderStartIndex === inOrderEndIndex) 
        return newNode;
    
    const inOrderTempIndex = inOrder.indexOf(newNode.data);
    newNode.left = constructTree(preOrder, inOrder, inOrderStartIndex, inOrderTempIndex - 1 );
    newNode.right = constructTree(preOrder, inOrder, inOrderTempIndex+1, inOrderEndIndex );

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


const preOrder = [1, 2, 4, 5, 3, 6, 7];
const inOrder = [4, 2, 5, 1, 6, 3, 7];




const head = constructTree(preOrder, inOrder, 0, inOrder.length-1);

levelOrderTraversal(head);