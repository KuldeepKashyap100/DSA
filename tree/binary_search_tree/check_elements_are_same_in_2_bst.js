const BinarySearchTree = require("./binary_search_tree");


// great way to reduce complexity time -> o(max(n,m)) space -> time -> o(max(n,m))
const mapOfElements = {};
const checkElements = (bst1, bst2) => {
    // traverse first bst and store its elements in map
    traverseAndStoreBstElements(bst1);
    // inorder traversal of bst2 to check all the elements present
    let root = bst2;
    const stack = [];
    while(true) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        if(!stack.length)
            break;
        root = stack.pop();
        if(!mapOfElements[root.data])
            return false;
        root = root.right;
    }
    return true;
}

const traverseAndStoreBstElements = (root) => {
    if(!root)
        return;
    traverseAndStoreBstElements(root.left);
    mapOfElements[root.data] = true;
    traverseAndStoreBstElements(root.right);
}

// space -> o(1)
const checkElementsOptimized = (root1, root2) => {
    const stack1 = [];
    const stack2 = [];
    while(true) {
        while(root1) {
            stack1.push(root1);
            root1 = root1.left;
        }
        while(root2) {
            stack2.push(root2);
            root2 = root2.left;
        }
        if(!stack1.length || !stack2.length)
            break;
        root1 = stack1.pop();
        root2 = stack2.pop();
        if(root1.data !== root2.data)
            return false;
        root1 = root1.right;
        root2 = root2.right;
    }
    return true;
}



const bst1 = new BinarySearchTree();
bst1.insert(4);
bst1.insert(2);
bst1.insert(6);
bst1.insert(3);
bst1.insert(1);
bst1.insert(5);
bst1.insert(7);



const bst2 = new BinarySearchTree();
bst2.insert(2);
bst2.insert(3);
bst2.insert(1);
bst2.insert(5);
bst2.insert(6);
bst2.insert(4);



console.log(checkElements(bst1.root, bst2.root));

// values in both the trees should be continuos.
console.log(checkElementsOptimized(bst1.root, bst2.root));
