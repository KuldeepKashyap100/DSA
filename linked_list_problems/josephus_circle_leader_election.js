const CircularLinkedList = require("../linked_list/CircularLinkedList");

// [time -> o(n^2)] and [space -> o(1)]
const getLeader = (list, personToBeEliminated) => {
    let head = list.head;
    let count;
    while(head.next != head) {
        count = personToBeEliminated;
        while(--count) {
            prev = head;
            head = head.next;
        }
        prev.next = head.next;
        head = prev.next;
    }
    return head;
}

let list = new CircularLinkedList();
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

list.head = getLeader(list, 4);

list.display();

