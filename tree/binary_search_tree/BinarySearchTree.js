class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insertRecursive(root, data) {
        if(root === null) {
            const newNode = new Node(data);
            this.root = newNode;
            return newNode;
        }
        else {
            if(root.data > data) 
                root.left = this.insertRecursive(root.left, data)
            else if (root.data < data) 
                root.right = this.insertRecursive(root.right, data);
        }
        this.root = root;
        return root;
    }
    insert(data) {
        let root = this.root;
        const newNode = new Node(data);
        if(!root)  {
            this.root = newNode;
            return;
        }
        let prev;
        while(root) {
            prev = root;
            if(root.data > data) {
                root = root.left;
            }
            else if (root.data < data) {
                root = root.right;
            }
        }
        if(prev.left === null && prev.data > data)
            prev.left = newNode;
        else
            prev.right = newNode;
    }
    findRecursive(root, data) {
        if(!root)
            return null;
        if(root.data > data) 
            return this.findRecursive(root.left, data);
        else if (root.data < data)
            return this.findRecursive(root.right, data);
        return root;
    }
    find(data) {
        let root = this.root;
        while(root) {
            if(root.data > data)
                root = root.left;
            else if(root.data < data)
                root = root.right;
            else
                break;
        }
        return root;
    }
    findMinRecursive(root = this.root) {
        if(!root)
            return null;
        else if(root.left === null)
            return root;
        else
            return this.findMinRecursive(root.left);
    }
    findMin() {
        let root = this.root;
        while(root.left) {
            root = root.left;
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
    findMax() {
        let root = this.root;
        while(root.right) {
            root = root.right;
        }
        return root;
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
    display() {
        const queue = [];
        queue.push(this.root);
        while(queue.length) {
            const temp = queue.shift();
            console.log(temp.data);
            if(temp.left) 
                queue.push(temp.left);
            if(temp.right) 
                queue.push(temp.right);
        }
    }
}

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(5);
// binarySearchTree.insert(3);
// binarySearchTree.insert(8);
// binarySearchTree.insert(4);
// binarySearchTree.insert(1);
// binarySearchTree.insert(7);
// binarySearchTree.insert(10);


// // console.log(binarySearchTree.findMax());

// binarySearchTree.display();

// binarySearchTree.deleteRecursive(8);

// console.log("\n");
// binarySearchTree.display();

module.exports = BinarySearchTree;