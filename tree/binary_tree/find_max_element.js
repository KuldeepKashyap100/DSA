const findMax = (root) => {
    // base condition
    if(!root)
        return;

    // hypothesis
    const maxLeft = findMax(root.left);
    const maxRight = findMax(root.right);

    // induction
    const maxValue = maxLeft > maxRight ? maxLeft: maxRight;
    if((!maxLeft && !maxRight) || (maxValue < root.data))
        return root.data;
    return maxValue;
}

const findMaxNonRecursive = (root) => {
    const stack = [];
    let max = root.data;
    while(true) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        if(!stack.length)
            break;
        root = stack.pop();
        max = root.data > max ? root.data : max; 
        root = root.right;
    }
    return max;
}


const Node = function (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(10);

console.log(findMaxNonRecursive(root));