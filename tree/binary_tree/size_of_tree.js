const getSize = (root) => {
    if(!root)
        return 0;
    return (getSize(root.left) + 1 + getSize(root.right));
}

const getSizeNonRecursive = (root) => {
    const stack = [];
    let size = 0;
    while(true) {
        while(root) {
            size++;
            stack.push(root);
            root = root.left;
        }
        if(!stack.length)
            break;
        root = stack.pop();
        root = root.right;
    }
    return size;
}

const Node = function (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);


console.log(getSizeNonRecursive(root, 11));