const LinkedList = require("../linked_list/LinkedList");

const reverse = (head) => {
    if(head === null)
        return null;
    if(head.next === null) {
        list.head = head;
        return null;
    }
    
    const nextElement = head.next;
    head.next = null;
    const reversedList = reverse(nextElement);
    nextElement.next = head;
    return reversedList;
}

let list = new LinkedList();

list.insert(1);
list.insert(2, 2);
list.insert(3, 3);
list.insert(4, 4);
list.insert(5, 5);
list.insert(6);

reverse(list.head);

list.display();
