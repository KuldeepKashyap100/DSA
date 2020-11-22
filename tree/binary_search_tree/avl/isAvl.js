const isAVL = (root) => {
    if(!root)
        return 0;
    const left = isAVL(root.left);
    const right = isAVL(root.right);
    if(left !== false && right !== false && Math.abs(left - right) <= 1)
        return Math.max(left, right) + 1;
    return false;
}

// alternative coding fail fast behaviour in book
const isAVLGivenInBook = (root) => {
    if(!root)
        return 0;
    const left = isAVLGivenInBook(root.left);
    
    if(left === false)
        return left;
    
    const right = isAVLGivenInBook(root.right);

    if(right === false)
        return right;
    
    if(Math.abs(left - right) > 1)
        return false
    return Math.max(left, right) + 1;
}

const Node = function (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const root = new Node(1);
root.left = new Node(2);
// root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
// root.right.left = new Node(6);
// root.right.right = new Node(7);

console.log(isAVL(root));
console.log(isAVLGivenInBook(root));
