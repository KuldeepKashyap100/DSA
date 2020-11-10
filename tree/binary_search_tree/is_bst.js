const BinarySearchTree = require("./binary_search_tree");

// below gives wrong results for below tree
//     6
//    / \
//   2   8
//  /\
// 1  9   
const isBstWrong = (root) => {
    if(!root)
        return true;
    if((root.left && root.data < root.left.data) || (root.right && root.data > root.right.data))
        return false;
    else if(!isBstWrong(root.left) || !isBstWrong(root.right))
        return false;
    return true;
}

// time o(n^2)
const isBstBruteForce = (root) => {
    if(!root)
        return true;
    if((root.left && binarySearchTree.findMaxRecursive(root.left).data > root.data) || (root.right && binarySearchTree.findMinRecursive(root.right).data < root.data))
        return false;
    if(!isBstBruteForce(root.left) || !isBstBruteForce(root.right))
        return false;
    return true;
}

// time o(n)
const isBst = (root, min, max) => {
    if(!root)
        return true;
    return ((root.data > min && root.data < max) && (isBst(root.left, min, root.data)) && (isBst(root.right, root.data, max)));
}


// more optimized
const isBstUsingInorderTraversal = (root, previous) => {
    if(!root)
        return true;

    if(!isBstUsingInorderTraversal(root.left, previous))
        return false;

    if(root.data < previous[0])
        return false;

    previous[0] = root.data;
    return isBstUsingInorderTraversal(root.right, previous);
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(6);
binarySearchTree.insert(2);
binarySearchTree.insert(8);
binarySearchTree.insert(1);
binarySearchTree.find(2).right = {data: 9, left: null, right: null};



console.log(isBstWrong(binarySearchTree.root));
console.log(isBstBruteForce(binarySearchTree.root));
console.log(isBst(binarySearchTree.root, -Infinity, Infinity));
console.log(isBstUsingInorderTraversal(binarySearchTree.root, [-Infinity]));
