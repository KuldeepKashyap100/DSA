
const fillNextSiblingNonRecusive = (root) => {
    const queue = [];
    queue.push(root);
    queue.push(null);
    while(queue.length) {
        const temp = queue.shift();
        if(!temp) {
            if(queue.length)
                queue.push(null);
        }
        else {
            temp.nextSibling = queue[0];
            if(temp.left) queue.push(temp.left);
            if(temp.right) queue.push(temp.right);
        }
    }
}

const fillNextSibling = (root) => {
    if(!root)
        return;
    if(root.left)
        root.left.nextSibling = root.right;
    if(root.right) {
        if(root.nextSibling) {
            if(root.nextSibling.left)
                root.right.nextSibling = root.nextSibling.left;
            else if(root.nextSibling.left)
                root.right.nextSibling = root.nextSibling.left;
            else
                root.right.nextSibling = null;
        }
    }
    fillNextSibling(root.left);
    fillNextSibling(root.right);
}

const Node = function (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.nextSibling = null;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

fillNextSibling(root);
console.log(root.left.left.nextSibling.nextSibling.nextSibling);
