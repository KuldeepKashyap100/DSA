const printPath = (root, path) => {
    if(!root)
        return;
    printPath(root.left, path + "->" + root.data);
    printPath(root.right, path + "->" + root.data);
    if(!root.left && !root.right)
        console.log(path + "->" + root.data);
}

const printPathNonRecursive = (root) => {
    const stack = [];
    let current = root;
    while(current || stack.length) {
        if(current) {
            stack.push(current);
            current = current.left
        }
        else {
            let top = stack[stack.length -1];
            if(!top.right) {
                top = stack.pop();
                // start printing the path of leaf node
                const tempStack = [];
                let path = ""
                if(!top.left && !top.right) {
                    while(stack.length) {
                        const pathElement = stack.pop();
                        path += "->" + pathElement.data;
                        tempStack.push(pathElement);
                    }
                    console.log(top.data + path);
                    while(tempStack.length) {
                        stack.push(tempStack.pop());
                    }
                }
                //end
                while(stack.length && top === stack[stack.length - 1].right) {
                    top = stack.pop()
                    // console.log(top.data);
                }
            }
            else {
                current = top.right
            }
        }
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

// printPath(root, "");
printPathNonRecursive(root);
