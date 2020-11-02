const checkPathWithGivenSum = (root, pathSum) => {
    if(!root)
        return (pathSum === 0);
    pathSum = pathSum - root.data; 
    const sumPresentOnLeft = checkPathWithGivenSum(root.left, pathSum);
    const sumPresentOnRight = checkPathWithGivenSum(root.right, pathSum);
    if (pathSum === 0 || sumPresentOnLeft || sumPresentOnRight)
        return true;
    return false;
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


console.log(checkPathWithGivenSum(root, 19));