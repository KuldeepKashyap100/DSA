const DoublyLinkedList = require('../../linked_list/DoublyLinkedList');

// time O(nlogn) becay
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



const ddl = new DoublyLinkedList();
ddl.insert(1);
ddl.insert(2);
ddl.insert(3);
ddl.insert(4);
ddl.insert(5);
ddl.insert(6);
ddl.insert(7);

const head = convertDdlToBst(ddl.head);

const printTree = (root) => {
    if(!root)
        return null;
    printTree(root.left);
    console.log(root.data);
    printTree(root.right);
}


printTree(head);

