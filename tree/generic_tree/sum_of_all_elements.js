const sum = (root) => {
    if(!root)
        return 0;
    return root.data + sum(root.firstChild) + sum(root.nextSibling);
}


const Node = function (data, firstChild = null, nextSibling = null) {
    this.data = data;
    this.firstChild = firstChild;
    this.nextSibling = nextSibling;
}

const root = new Node(1);
root.firstChild = new Node(2);
root.firstChild.nextSibling = new Node(3);
root.firstChild.firstChild = new Node(4);
root.firstChild.firstChild.nextSibling = new Node(5);
root.firstChild.nextSibling.firstChild = new Node(6);
root.firstChild.nextSibling.firstChild.nextSibling = new Node(7);

console.log(sum(root));