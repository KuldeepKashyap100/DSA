const BinarySearchTree = require("./binary_search_tree");

let count = 0;
const findKthSmallestElementInBst = (root, k) => {
    if(!root)
        return null;
    const left = findKthSmallestElementInBst(root.left, k);
    count++;
    if(count === k)
        return root.data;
    const right = findKthSmallestElementInBst(root.right, k);
    return left || right;
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(4);
binarySearchTree.insert(2);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(1);
binarySearchTree.insert(5);
binarySearchTree.insert(7);

console.log(findKthSmallestElementInBst(binarySearchTree.root, 7));