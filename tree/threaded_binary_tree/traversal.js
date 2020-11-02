const Node = function (data, leftFlag = true, rightFlag = true, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.leftFlag = leftFlag;
    this.rightFlag = rightFlag
    this.right = right;
}

const root = new Node(1);
const dummy = new Node("", false, false, root);
dummy.right = dummy;
root.left = new Node(5, true, false, null, root);
root.right = new Node(11);
root.left.left = new Node(2, false, false, dummy, root.left);
root.right.left = new Node(16, false, false, root, root.right);
root.right.right = new Node(31, false, false, root.right, dummy);


const inorderSuccessor = (root) => {
    if(!root.rightFlag)  
        return root.right;
    else {
        let position = root.right;
        while(position.leftFlag)
            position = position.left;
        return position;
    }
}

const inOrderTraversal = (root) => {
    let position = inorderSuccessor(root);
    while(position != root) {
        position = inorderSuccessor(position);
        console.log(position.data);
    }
}

inOrderTraversal(dummy);

