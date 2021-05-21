const Node = function (data, height = 0, left = null, right = null) {
    this.data = data;
    this.height = height;
    this.left = left;
    this.right = right;
}

class AVL {
    constructor() {
        this.root = null;
    }
    // ll rotation
    singleRotateLeft(root) {
        // rotate subtree
        const leftChild = root.left;
        root.left = leftChild.right;
        leftChild.right = root;
        
        // update height property
        root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
        leftChild.height =  Math.max(this.height(leftChild.left), this.height(leftChild.right)) + 1;
        return leftChild;
    }
    // rr roation
    singleRotateRight(root) {
        // rotate subtree
        const rightChild = root.right;
        root.right = rightChild.left;
        rightChild.left = root;

        // update height property
        root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
        rightChild.height = Math.max(this.height(rightChild.left), this.height(rightChild.right)) + 1;
        return rightChild;
    }
    // lr roatation
    doubleRotateWithLeft(root) {
        root.left = this.singleRotateRight(root.left);
        return this.singleRotateLeft(root);
    }
    // rl rotation
    doubleRotateWithRight(root) {
        root.right = this.singleRotateLeft(root.right);
        return this.singleRotateRight(root);
    }

    insertRecursive(root, data) {
        if(!root) {
            root = new Node(data, 1);
        }
        else if(root.data > data){
            root.left = this.insertRecursive(root.left, data);
            if(this.height(root.left) - this.height(root.right) === 2) {
                if(root.left.data > data)
                    root = this.singleRotateLeft(root);
                else    
                    root = this.doubleRotateWithLeft(root);
            }
        }
        else if(root.data < data) {
            root.right = this.insertRecursive(root.right, data);
            if(this.height(root.right) - this.height(root.left) === 2) {
                if(root.right.data <  data) 
                    root = this.singleRotateRight(root);
                else 
                    root = this.doubleRotateWithRight(root);
            }
        }
        root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
        this.root = root;
        return root;
    }
    height(root) {
        if(!root)
            return 0;
        return root.height;
    }
    display() {
        const queue = [];
        queue.push(this.root);
        while(queue.length) {
            const dequeuedItem = queue.shift();
            console.log(dequeuedItem.data);
            if(dequeuedItem.left) 
                queue.push(dequeuedItem.left);
            if(dequeuedItem.right)
                queue.push(dequeuedItem.right);
        }
    }
    findMax() {
        let root = this.root;
        while(root.right) {
            root = root.right;
        }
        return root;
    }
    findMaxRecursive(root) {
        if(!root)
            return null;
        else if(root.right === null)
            return root;
        else 
            return this.findMaxRecursive(root.right);
    }
    // dummy insert
    insert(data) {
        this.insertRecursive(this.root, data);
    }
    // dummy delete
    delete(data) {
        return this.deleteRecursive(data, this.root);
    }
    deleteRecursive(data, root) {
        if(root === null) {
            console.log("node not found");
            return;
        }
        else if(root.data > data) {
            root.left = this.deleteRecursive(data, root.left);
        }
        else if(root.data < data) {
            root.right = this.deleteRecursive(data, root.right);
        }
        else {
            if(root.left && root.right) {
                // have 2 child
                const maxNodeInLeftSubTree = this.findMaxRecursive(root.left);
                root.data = maxNodeInLeftSubTree.data;
                root.left = this.deleteRecursive(root.data, root.left);
            }
            else {
                // have one child
                if(root.left)
                    root = root.left;
                else if(root.right)
                    root = root.right;
                else
                    root = null;
            }
        }
        return root;
    }
}

const avlTree = new AVL();

// console.log("ll rotation");
// avlTree.insertRecursive(avlTree.root, 6);
// avlTree.insertRecursive(avlTree.root, 5);
// avlTree.insertRecursive(avlTree.root, 9);
// avlTree.insertRecursive(avlTree.root, 3);
// avlTree.insertRecursive(avlTree.root, 8);
// avlTree.insertRecursive(avlTree.root, 7);
// avlTree.display();

// avlTree.root = null;

// console.log("rr rotation");
// avlTree.insertRecursive(avlTree.root, 8);
// avlTree.insertRecursive(avlTree.root, 6);
// avlTree.insertRecursive(avlTree.root, 15);
// avlTree.insertRecursive(avlTree.root, 3);
// avlTree.insertRecursive(avlTree.root, 19);
// avlTree.insertRecursive(avlTree.root, 29);
// avlTree.display();

// avlTree.root = null;

// console.log("lr rotation");
// avlTree.insertRecursive(avlTree.root, 8);
// avlTree.insertRecursive(avlTree.root, 5);
// avlTree.insertRecursive(avlTree.root, 9);
// avlTree.insertRecursive(avlTree.root, 3);
// avlTree.insertRecursive(avlTree.root, 6);
// avlTree.insertRecursive(avlTree.root, 7);
// avlTree.display();

// avlTree.root = null;


// console.log("rl rotation");
// avlTree.insertRecursive(avlTree.root, 4);
// avlTree.insertRecursive(avlTree.root, 2);
// avlTree.insertRecursive(avlTree.root, 7);
// avlTree.insertRecursive(avlTree.root, 8);
// avlTree.insertRecursive(avlTree.root, 6);
// avlTree.insertRecursive(avlTree.root, 5);
// avlTree.display();


module.exports = AVL;