// https://www.youtube.com/watch?v=13m9ZCB8gjw
const leastCommonAncestor = (root, first, second) => {
    if(!root)
        return;
    if(root.data === first.data || root.data === second.data)
        return root;
    const foundInleft = leastCommonAncestor(root.left, first, second);
    const foundInRight = leastCommonAncestor(root.right, first, second);
    if(foundInleft && foundInRight)
        return root;
    return foundInleft ? foundInleft : foundInRight;
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

console.log(leastCommonAncestor(root, root.left.left, root.right.right).data);