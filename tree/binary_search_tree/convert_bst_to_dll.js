const BinarySearchTree = require("./binary_search_tree");

let prev = null;
let head;
const convertBstToDdl = (root) => {
    if(!root) {
        return null;
    }
    convertBstToDdl(root.left);

    if(!prev) {
        head = root;
    }
    else {
        root.left = prev;
        prev.right = root;
    }
    prev = root;

    convertBstToDdl(root.right);
}

// alternative coding great approach
// if head of the link list is leftmost node then use inorder
head = null
const convertBstToDdlFromRight = (root) => {
    if(!root)
        return null;

    convertBstToDdlFromRight(root.right);
    root.right = head;
    if(head)
        head.left = root;
    head = root;
    convertBstToDdlFromRight(root.left);
}

// if the head of link list is root node then use preorder traversal
head = null;
prev = null
const convertBstToDdlPreOrder = (root) => {
    if(!root)
        return null;
    const leftSubTree = root.left;
    const rightSubTree = root.right;
    if(!prev)
        head = root;
    else {
        root.left = prev;
        prev.right = root;
    }
    prev = root;
    convertBstToDdlPreOrder(leftSubTree);
    convertBstToDdlPreOrder(rightSubTree);
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(4);
binarySearchTree.insert(2);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(1);
binarySearchTree.insert(5);
binarySearchTree.insert(7);



const printDLL = (root) => {
    while(root) {
        console.log(root.data);
        root = root.right;
    }
}

convertBstToDdlFromRight(binarySearchTree.root);
printDLL(head);