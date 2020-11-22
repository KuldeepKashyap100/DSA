const Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}
let count = 1;

// build max avl tree
const buildHB0 = (height) => {
    if(!height)
        return null;
    const root = new Node();
    root.left = buildHB0(height - 1);
    root.data = count++;
    root.right = buildHB0(height - 1);
    return root;
}

// alternative way (merge sort logic)
const buildHB0MergeSortLogic = (left, right) => {
    if(left > right)
        return null;
    const mid = Math.ceil(left + (right - left)/2);
    const root = new Node(mid);
    root.left = buildHB0MergeSortLogic(left, mid - 1);
    root.right = buildHB0MergeSortLogic(mid + 1, right);
    return root;
}

display = (root) => {
    const queue = [];
    queue.push(root);
    while(queue.length) {
        const dequeuedItem = queue.shift();
        console.log(dequeuedItem.data);
        if(dequeuedItem.left) 
            queue.push(dequeuedItem.left);
        if(dequeuedItem.right)
            queue.push(dequeuedItem.right);
    }
}

const root = buildHB0(3);
// const root = buildHB0MergeSortLogic(1,7);
display(root);