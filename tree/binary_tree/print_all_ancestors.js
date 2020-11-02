const printAllAncestors = (root, element, path) => {
    if(!root)
        return false;
    const searchLeft = printAllAncestors(root.left, element, path);
    const searchRight = printAllAncestors(root.right, element, path);

    if(root.data === element || searchLeft || searchRight) {
        path.push(root.data);
        return true;
    }
    return false;
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

const path = []
printAllAncestors(root, 7, path);
console.log(path.reverse());