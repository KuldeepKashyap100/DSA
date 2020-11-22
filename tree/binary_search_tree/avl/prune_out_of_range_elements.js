
const prune = (root, min, max) => {
    if(!root)
        return null;

    let temp;
    if(root.data >= min && root.data <= max) {
        temp = root;
    }
    if(root.data < min) {
        temp = root.right;
    }
    if(root.data > max) {
        temp = root.left;
    }
    temp.left = prune(temp.left, min, max);
    temp.right = prune(temp.right, min, max);

    return temp;
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

let root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);

root = prune(root, 1, 3);

display(root);
