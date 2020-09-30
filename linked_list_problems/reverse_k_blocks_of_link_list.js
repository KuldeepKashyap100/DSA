const LinkedList = require("../linked_list/LinkedList");

// recursive approach written without help :) [time -> o(n)] and [space -> o(1)]
const reverseBlocks = (head, blockSize) => {
    let size = blockSize;
    let prev = null, curr =head, next;

    if(!head || blockSize === 0 || blockSize === 1)
        return;

    //reverse block
    while(curr && size--) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    head = prev;

    // find end of the block
    while(prev.next != null) 
        prev = prev.next;
    
    prev.next = reverseBlocks(curr, blockSize);
    return head;
}


let list = new LinkedList();
list.insert(1);
list.insert(2, 2);
list.insert(3, 3);
list.insert(4, 4);
list.insert(5, 5);
list.insert(6, 6);
list.insert(7, 7);
list.insert(8);
list.insert(9);
list.insert(10);

list.head = reverseBlocks(list.head, 4);

list.display();