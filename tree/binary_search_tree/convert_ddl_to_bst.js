const DoublyLinkedList = require('../../linked_list/DoublyLinkedList');

// time O(nlogn)
const convertDdlToBst = (root) => {
    if(!root || !root.next)
        return root;
    const middle = findMiddle(root);

    let prev = root;
    // traverse n/2 time required at each level
    while(prev.next && prev.next !== middle)
        prev = prev.next;
    prev.next = null

    // logn no of levels (height of bst)
    middle.left = convertDdlToBst(root);
    middle.right = convertDdlToBst(middle.next);
    return middle;
}

const findMiddle = (head) => {
    let fastPointer = head;
    let slowPointer = head;
    while(fastPointer.next) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }
    return slowPointer;
}

// time -> O(n)
const convert = (left, right) => {
    if(left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const leftSubtree = convert(left, mid - 1);

    const newNode = head;
    newNode.left = leftSubtree;
    head = head.next;

    newNode.right = convert(mid + 1, right);
    return newNode;
}

// const convert = (n) => {
//     if(n <= 0) return null;
//     const leftSubtree = convert(Math.floor(n/2));

//     const root = head;
//     root.left = leftSubtree;
//     head = head.next;

//     const rightSubtree = convert(n - Math.floor(n/2) - 1);
//     root.right = rightSubtree;
//     return root;
// }

const printTree = function (root) {
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


const ddl = new DoublyLinkedList();
ddl.insert(1);
ddl.insert(2);
ddl.insert(3);
ddl.insert(4);
ddl.insert(5);

// const root = convertDdlToBst(ddl.head);
let head = ddl.head;
const root1 = convert(0, ddl.totalElements - 1);
printTree(root1);

