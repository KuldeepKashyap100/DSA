
// b/w two leaf nodes and have max nodes in path
const getHeight = (root, res) => {
    if(!root) return 0;

    const leftHeight = getHeight(root.left, res);
    const rightHeight = getHeight(root.right, res);

    const currentHeight = 1 + Math.max(leftHeight, rightHeight);
    const currentDiameter = 1 + leftHeight + rightHeight;
    res.maxDiameter = Math.max(res.maxDiameter, currentHeight, currentDiameter);

    return currentHeight;
}

const Node = function (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const root = new Node(1);
root.right = new Node(3);

root.left = new Node(2);
root.left.left = new Node(4);
root.left.left.left = new Node(8);
root.left.left.left.left = new Node(9);
root.left.right = new Node(5);
root.left.right.right = new Node(10);
root.left.right.right.right = new Node(11);


// root.right.left = new Node(6);
// root.right.right = new Node(7);

const res = {maxDiameter: 0};
getHeight(root, res)
console.log(res);