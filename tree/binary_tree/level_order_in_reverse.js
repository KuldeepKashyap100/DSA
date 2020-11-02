const levelOrderReverse = (root) => {
    const queue = [];
    const stack = [];
    queue.push(root);
    while(queue.length) {
        const dequeueEle = queue.shift();
        if(dequeueEle.right) 
            queue.push(dequeueEle.right);
        if(dequeueEle.left)
            queue.push(dequeueEle.left);

        stack.push(dequeueEle);
    }
    while(stack.length) {
        console.log(stack.pop().data);
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

levelOrderReverse(root);