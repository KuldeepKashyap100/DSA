// preOrder recusive
const preOrderTraversal = (root) => {
    if(!root)
        return;
    console.log(root.data);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
}

// preorder non recursive
const preOrderTraversalNonRecursive = (root) => {
    const stack = [];
    // while(true) {
    //     while(root) {
    //         console.log(root.data);
    //         stack.push(root);
    //         root = root.left;
    //     }
    //     if(!stack.length)
    //         break;
    //     root = stack.pop();
    //     root = root.right;
    // }
    stack.push(root);
    while(stack.length) {
        const currentElement = stack.pop();
        console.log(currentElement.data);
        if(currentElement.right) stack.push(currentElement.right);
        if(currentElement.left) stack.push(currentElement.left); 
    }
}

// inorder recursive
const inOrderTraversal = (root) => {
    if(!root)
        return;
    inOrderTraversal(root.left);
    console.log(root.data);
    inOrderTraversal(root.right); 
}

// inorder non recursive
const inOrderTraversalNonRecusive = (root) => {
    const stack = [];
    while(true) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        if(!stack.length)
            break;
        root = stack.pop();
        console.log(root.data);
        root = root.right;
    }
}

// post order traversal
const postOrderTraversal = (root) => {
    if(!root)
        return;
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.data);
}

// post order nonrecursive using 2 stacks
const postOrderTraversalNonRecursive = (root) => {
    const stack1 = [];
    const stack2 = [];
    stack1.push(root);
    let current;
    while(stack1.length) {
        stack2.push(stack1.pop());
        // get top
        current = stack2[stack2.length-1];
        if(current.left) {
            stack1.push(current.left);
        }
        if(current.right) {
            stack1.push(current.right);
        }
    }
    while(stack2.length) {
        console.log(stack2.pop().data);
    }
} 

// post order nonrecursive using 1 stacks not working
// https://www.youtube.com/watch?v=xLQKdq0Ffjg
const postOrderNonRecursive = (root) => {
    const stack = [];
    let current = root;
    while(stack.length || current) { 
        // process left subtree
        if(current) {
            stack.push(current);
            current = current.left;
            continue;
        }

        // process right subtree
        let top = stack[stack.length - 1];
        if(top.right) {
            current = top.right;
            continue;
        }

        let poppedElement = stack.pop();
        console.log(poppedElement.data);
        top = stack[stack.length - 1];

        // if popped value is right node then we can process the parent as well
        while(stack.length && poppedElement === top.right) {
            poppedElement = stack.pop();
            top = stack[stack.length - 1];
            console.log(poppedElement.data);
        }
    }
}


const levelOrderTraversal = (root) => {
    const queue = [];
    queue.push(root);
    while(queue.length) {
        const dequeuedItem = queue.shift();
        console.log(dequeuedItem.data);
        if(dequeuedItem.left) 
            queue.push(dequeuedItem.left);
        if(dequeuedItem.right)
            queue.push(dequeuedItem.right);
    }
}

const Node = function (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

postOrderTraversal(root);
postOrderTraversalNonRecursive(root);