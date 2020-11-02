const isQuasiIsomorphic = (root1, root2) => {
    if(!root1 && !root2)
        return true;
    if((root1 && !root2) || (!root1 && root2))
        return false;

    const left = (isQuasiIsomorphic(root1.left, root2.left) && isQuasiIsomorphic(root1.right, root2.right));
    const right = (isQuasiIsomorphic(root1.left, root2.right) && isQuasiIsomorphic(root1.right, root2.left))
    return left || right;
}

const Node = function (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
// root1.right.left = new Node(6);
// root1.right.right = new Node(7);

const root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
// root2.left.left = new Node(4);
// root2.left.right = new Node(5);
root2.right.left = new Node(6);
root2.right.right = new Node(7);

console.log(isQuasiIsomorphic(root1, root2));