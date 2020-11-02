const insert = (root, newNode) => {
    queue = [];
    queue.push(root);
    while(queue.length) {
        const temp = queue.shift();
        if(temp.left) 
            queue.push(temp.left);
        else {
            temp.left = newNode;
            break;
        }
        if(temp.right) 
            queue.push(temp.right);
        else {
            temp.right = newNode;
            break;
        }
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


insert(root, new Node(8));
insert(root, new Node(9));
insert(root, new Node(10));
insert(root, new Node(11));
insert(root, new Node(12));



levelOrderTraversal(root);