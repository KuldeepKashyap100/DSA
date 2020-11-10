const BinarySearchTree = require("./binary_search_tree");


const lowestCommonAncestor = (root, first, second) => {
    while(root) {
        if((first.data < root.data && root.data < second.data) || (second.data < root.data && root.data < first.data)) 
            return root;
        if(first.data < root.data && second.data < root.data)
            root = root.left;
        else
            root = root.right;
    }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(5);
binarySearchTree.insert(3);
binarySearchTree.insert(8);
binarySearchTree.insert(4);
binarySearchTree.insert(1);
binarySearchTree.insert(7);
binarySearchTree.insert(10);


console.log(lowestCommonAncestor(binarySearchTree.root, binarySearchTree.find(7), binarySearchTree.find(10)));
