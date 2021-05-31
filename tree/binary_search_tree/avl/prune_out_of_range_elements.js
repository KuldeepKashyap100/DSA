
// used post order traversal because child will be pruned first.
// time -> O(n) botttom up stratergy
const pruneUsingPostOrder = (root, min, max) => {
    if(!root)
        return null;

    root.left = pruneUsingPostOrder(root.left, min, max);
    root.right = pruneUsingPostOrder(root.right, min, max);

    if(root.data >= min && root.data <= max)
        return root;
    else if(root.data < min)
        return root.right;
    else if(root.data > max)
        return root.left;

}

// time -> O(logn) top down stratergy
const pruneUsingPreOrder = (root, min, max) => {
    if(!root)
        return null;
        
    if(root.data >= min && root.data <= max)  {
        root.left = pruneUsingPreOrder(root.left, min, max);
        root.right = pruneUsingPreOrder(root.right, min, max);

        return root;
    }
    else if(root.data < min)
        return pruneUsingPreOrder(root.right, min, max);
    else if(root.data > max)
        return pruneUsingPreOrder(root.left, min, max);
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

// let root = new Node(4);
// root.left = new Node(2);
// root.right = new Node(6);
// root.left.left = new Node(1);
// root.left.right = new Node(3);
// root.right.left = new Node(5);
// root.right.right = new Node(7);

// root = prune(root, 1, 3);

let root = new Node(49);
root.left = new Node(37);
root.left.left = new Node(13);
root.left.right = new Node(41);
root.left.left.left = new Node(7);
root.left.left.right = new Node(19);
root.left.left.right.right = new Node(25);


root.right = new Node(89);
root.right.left = new Node(53);
root.right.left.right = new Node(71);
root.right.left.right.left = new Node(60);
root.right.left.right.right = new Node(82);


root = pruneUsingPreOrder(root, 24, 71);
// root = pruneUsingPostOrder(root, 53, 79);
// root = pruneUsingPostOrder(root, 17, 41);



display(root);
