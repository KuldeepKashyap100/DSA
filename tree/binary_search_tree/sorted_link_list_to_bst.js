const LinkedList = require('../../linked_list/LinkedList');

const Node = function(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const linkListToBst = (head) => {
    if(!head.next)
        return head;

    const middleNode = findMiddle(head);
    
    let prev = head;
    while(prev.next !== middleNode) 
        prev = prev.next;
    
    prev.next = null;
    middleNode.left = linkListToBst(head);
    middleNode.right = linkListToBst(middleNode.next);
    return middleNode;
}

const findMiddle = (head) => {
    let slowPtr = head;
    let fastPtr = head;
    while(fastPtr.next) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }
    return slowPtr;
}

// time o(n) bottom-up approach
const linkListToBstOptimized = (n) => {
    if(n <= 0)
        return null;
    const left = linkListToBstOptimized(Math.floor(n/2));
    
    const newNode = new Node(head.data);
    head = head.next;

    newNode.left = left;
    newNode.right = linkListToBstOptimized(n - Math.floor(n/2) -1);
    return newNode;
    
    // if(start === end) {
    //     return null;
    // }
    // const middleIndex = Math.floor((start + end) / 2);
    // const leftChild = linkListToBstOptimized(start, middleIndex - 1);
    // const parent = new Node(head.data);
    // head = head.next;
    // const rightChild = linkListToBstOptimized(middleIndex + 1, end);
    // parent.left = leftChild;
    // parent.right = rightChild;
    // return parent;
}

const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.insert(7);
let head = list.head;

const root = linkListToBstOptimized(7);

const printTree = (root) => {
    if(!root)
        return;
    printTree(root.left);
    console.log(root.data);
    printTree(root.right);
}

printTree(root);