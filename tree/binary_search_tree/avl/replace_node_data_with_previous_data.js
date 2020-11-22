// there is an additional data field in node which have total no. of nodes in its subtrees
// replace that field with previous node

const Node = function(data, numberOfNodes = 0) {
    this.data = data;
    this.numberOfNodes = numberOfNodes;
    this.left = null;
    this.right = null;
}

// may be wrong not tested all scenarios
const replaceNumberOfNodesWithPrevious = (root) => {
    const stack = [];
    let prev = {data: -1};
    while(true) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        if(!stack.length)
            break;
        root = stack.pop();
        root.numberOfNodes = prev.data;
        //deleteNodeInBst(prev.data);
        prev = root;
        root = root.right;
    }
}

// usigng level order traversal
//pending

let prevNode = null;
// using inorder traversal
const replaceNumberOfNodesWithPreviousRecursive = (root) => {
    if(!root) 
        return null;
    replaceNumberOfNodesWithPreviousRecursive(root.left);
    if(!prevNode) {
        prevNode = root.data;
        // delete(root);
    }
    else {
        root.numberOfNodes = prevNode;
        prevNode = null;
    }
    return replaceNumberOfNodesWithPreviousRecursive(root.right);
}


const root = new Node(6, 6);

root.left = new Node(4, 2);
root.left.left = new Node(2);
root.left.right = new Node(5);

root.right = new Node(9, 2);
root.right.left = new Node(7, 1);
root.right.left.right = new Node(8, 0);

// replaceNumberOfNodesWithPrevious(root);
replaceNumberOfNodesWithPreviousRecursive(root);


console.log(root);

