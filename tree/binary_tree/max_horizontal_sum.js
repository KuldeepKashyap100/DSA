const maxHorizontalSum = (root) => {
    const queue = [];
    queue.push(root);
    queue.push(null);
    let maxSum = -Infinity;
    let sum = 0;
    while(queue.length) {
        temp = queue.shift();
        if(temp === null) {
            maxSum = sum >  maxSum ? sum : maxSum;
            sum = 0;
            if(queue.length)
                queue.push(null);
        }
        else {
            sum+=temp.data;
            if(temp.left) queue.push(temp.left);
            if(temp.right) queue.push(temp.right);
        }
    }
    return maxSum;
}

const Node = function (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const root = new Node(1);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(maxHorizontalSum(root));