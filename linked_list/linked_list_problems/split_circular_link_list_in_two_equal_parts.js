const CircularLinkedList = require("../linked_list/CircularLinkedList");

// [time -> o(n)] and [space -> o(1)]
const splitCircularLinkedList = (list) => {
    let slowPtr = list.head;
    let fastPtr = list.head;

    while(fastPtr.next != list.head && fastPtr.next.next != list.head) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }
    // for even elements
    if(fastPtr.next.next === list.head) {
        fastPtr = fastPtr.next;
    }

    fastPtr.next = slowPtr.next;
    fastPtr = slowPtr.next;
    slowPtr.next = list.head;
    slowPtr = list.head;
    return [slowPtr, fastPtr];
}


let list = new CircularLinkedList();

list.insert(1);
list.insert(2, 2);
list.insert(3, 3);
list.insert(4, 4);
list.insert(5, 5);

list.insert(6, 6);
// list.insert(7);

// list.display();


let [slowPtr, fastPtr]= splitCircularLinkedList(list);

list.head = slowPtr;
list.display();
console.log();
list.head = fastPtr;
list.display();