const zigZagTraversal = (root) => {
    const queue = [];
    const stack = [];
    let reverse = false;
    queue.push(root);
    queue.push(null);
    while(queue.length) {
        const temp = queue.shift();
        if(temp === null) {
            reverse = !reverse;
            if(!reverse) {
                while(stack.length) console.log(stack.pop());
            }
            if(queue.length)
                queue.push(null);
        }
        else {
            if(reverse) stack.push(temp.data);
            else console.log(temp.data);
            if(temp.left)   queue.push(temp.left);
            if(temp.right)  queue.push(temp.right);   
        }
    }
}

const zigZagUsingTwoStacks = (root) => {
    let currentLevel = [];
    let nextLevel = [];
    let leftToRight = true;
    currentLevel.push(root);
    while(currentLevel.length) {
        const temp = currentLevel.pop();
        if(temp) {
            console.log(temp.data);
            if(leftToRight) {
                if(temp.left) nextLevel.push(temp.left);
                if(temp.right) nextLevel.push(temp.right);
            }
            else {
                if(temp.right) nextLevel.push(temp.right);
                if(temp.left) nextLevel.push(temp.left);
            }
        }
        if(!currentLevel.length) {
            [currentLevel, nextLevel] = [nextLevel, currentLevel];
            leftToRight = !leftToRight;
        }
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
root.left.left.left = new Node(8);
root.left.left.right = new Node(9);



zigZagUsingTwoStacks(root);