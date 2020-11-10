const BinarySearchTree = require("./binary_search_tree");

const printBetweenk1AndK2 = (root, k1, k2) => {
    if(!root)
        return;
    if(root.data >= k1);
        printBetweenk1AndK2(root.left, k1, k2);

    if(k1 <= root.data && k2 >= root.data)
        console.log(root.data)
        
    if(root.data <= k2);
        printBetweenk1AndK2(root.right, k1, k2);
}

// alternative use level order traversal 
const printBetweenk1AndK2LevelOrder = (root, k1, k2) => {
    const queue = [];
    queue.push(root);
    while(queue.length) {
        const temp = queue.shift();
        if(k1 <= temp.data && k2 >= temp.data)
            console.log(temp.data);
        if(temp.left && temp.data >= k1) 
            queue.push(temp.left);
        if(temp.right && temp.data <= k2) 
            queue.push(temp.right);
    }
}

// another approach search for k1 and find successor until reached to k2

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(4);
binarySearchTree.insert(2);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(1);
binarySearchTree.insert(5);
binarySearchTree.insert(7);


// printBetweenk1AndK2(binarySearchTree.root, 6, 10);
printBetweenk1AndK2LevelOrder(binarySearchTree.root, 6, 10);


