const deleteTree = (root) => {
    const stack = [];
    let current = root;
    while(current || stack.length) {
        if(current) {
            stack.push(current);
            current = current.left;
        }
        else {
            let top = stack[stack.length -1];
            if(!top.right) {
                top = stack.pop();
                delete top; // if we could have delete it would look something like this.

                while(stack.length && top === stack[stack.length - 1].right) {
                    top = stack.pop();
                    delete top;
                }
            }
            else {
                current = top.right;
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

deleteTree(root);