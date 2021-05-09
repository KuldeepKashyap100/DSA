
const maxPathSum = (root, res) => {
    if(!root) return 0;

    const leftSum = maxPathSum(root.left, res);
    const rightSum = maxPathSum(root.right, res);

    const maxBranch = Math.max(leftSum, rightSum);
    // both left and right sum could be -ve then max sum would be current node data
    const currentMaxSum = Math.max(root.data, root.data + maxBranch);

    res.maxPathSum = Math.max(res.maxPathSum, currentMaxSum, root.data + leftSum + rightSum);

    return currentMaxSum;
}

const Node = function (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const root = new Node(1);
root.right = new Node(10);

root.left = new Node(2);
root.left.left = new Node(3);
root.left.left.left = new Node(4);
// root.left.left.left.left = new Node(5);
// root.left.right = new Node(6);
// root.left.right.right = new Node(7);
// root.left.right.right.right = new Node(8);



const res = {maxPathSum: 0};
maxPathSum(root, res)
console.log(res);