const BinarySearchTree = require("./binary_search_tree");

const shortestPath = (root, first, second) => {
    while(root) {
        if((first.data < root.data && root.data < second.data) || (second.data < root.data && root.data < first.data))
            break;
        if(root.data > first.data && root.data > second.data) {
            root = root.left;
        }
        else {
            root = root.right;
        }
    }
    // print left path in reverse order
    const stackPath = [];
    let temp = root;
    while(temp) {
        stackPath.push(temp.data);
        temp = temp.left;
    }
    while(stackPath.length) console.log(stackPath.pop());

    // print right path
    temp = root.right;
    while(temp) {
        console.log(temp.data);
        temp = temp.right;
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


shortestPath(binarySearchTree.root, binarySearchTree.find(1), binarySearchTree.find(10));
