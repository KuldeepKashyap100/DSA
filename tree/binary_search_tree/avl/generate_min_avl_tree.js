const Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}
let count = 1;
const genearteMinAvlTree = (height) => {
    if(height < 1)
        return null;
    const root = new Node();

    root.left = genearteMinAvlTree(height - 1);
    root.data = count++;
    root.right = genearteMinAvlTree(height - 2);
    root.height = height;

    return root;
}


display = (root) => {
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

const root = genearteMinAvlTree(3);
display(root);