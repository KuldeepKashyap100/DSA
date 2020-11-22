const BinarySearchTree = require("../binary_search_tree");

const findClosestRecursive = (root, key) => {
    if(!root)
        return 0;
    if(root.data === key)
        return root;
    if(root.data > key) {
        if(!root.left)
            return root;
        const temp = findClosestRecursive(root.left, key);
        return Math.abs(temp.data - key) > Math.abs(root.data - key) ? root: temp;
    }
    else {
        if(!root.right)
            return root;
        const temp = findClosestRecursive(root.right, key);
        return Math.abs(temp.data - key) > Math.abs(root.data - key) ? root : temp;
    }
}

const bst1 = new BinarySearchTree();
bst1.insert(4);
bst1.insert(2);
bst1.insert(6);
bst1.insert(3);
bst1.insert(1);
bst1.insert(5);
bst1.insert(7);

console.log(findClosestRecursive(bst1.root, 6.7));