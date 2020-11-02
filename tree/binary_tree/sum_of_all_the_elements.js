const sum = (root) => {
    if(!root)
        return null;
    return sum(root.left) + sum(root.right) + root.data;
}

const sumNonRecusive = (root) => {
    // using inorder traversal
    const stack = [];
    let sum = 0;

    while(true) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        if(!stack.length)
            break;
        root = stack.pop(); 
        sum+=root.data;
        root = root.right;
    }
    return sum;
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
// root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);


console.log(sumNonRecusive(root));