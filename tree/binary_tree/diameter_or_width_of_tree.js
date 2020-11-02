const getDiameter = (root) => {
    if(!root)
        return 0;
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
    const leftDiameter = getDiameter(root.left);
    const rightDiameter = getDiameter(root.right);
    const maxDiameter = leftDiameter> rightDiameter ? leftDiameter :rightDiameter;
    const max = (leftHeight + rightHeight + 1) > maxDiameter ? (leftHeight + rightHeight + 1) : maxDiameter;
    return max;
}

const getHeight = (root) => {
    if(!root)
        return 0;
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
    const max = leftHeight>rightHeight ? leftHeight : rightHeight;
    return (max + 1);
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
// root.right.left = new Node(6);
// root.right.right = new Node(7);

console.log(getDiameter(root));