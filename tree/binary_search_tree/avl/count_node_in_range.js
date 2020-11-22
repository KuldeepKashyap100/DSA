const AVL = require("./avl_tree");
const countNodesInRange = (root, a, b) => {
    if(!root)
        return 0;
    if(root.data < a) 
        return countNodesInRange(root.right, a, b);
    else if(root.data > b)
        return countNodesInRange(root.left, a, b);
    else
        return countNodesInRange(root.left, a, b) + countNodesInRange(root.right, a, b) + 1;
}

const avlTree = new AVL();

avlTree.insertRecursive(avlTree.root, 4);
avlTree.insertRecursive(avlTree.root, 2);
avlTree.insertRecursive(avlTree.root, 6);
avlTree.insertRecursive(avlTree.root, 1);
avlTree.insertRecursive(avlTree.root, 3);
avlTree.insertRecursive(avlTree.root, 5);
avlTree.insertRecursive(avlTree.root, 7);

console.log(countNodesInRange(avlTree.root, 2, 6));
