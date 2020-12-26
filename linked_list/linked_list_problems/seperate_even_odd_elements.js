const LinkedList = require("../linked_list/LinkedList");

// [time -> o(n)] and [space -> o(1)]
const sepearateEvenOddElements = (head) => {
    let evenList = {},  oddList = {};
    let oddListHead = oddList, evenListHead = evenList;
    while(head) {
        if(head.data % 2 === 0) {
            evenListHead.next = head;
            evenListHead = evenListHead.next;
        } else {
            oddListHead.next = head;
            oddListHead = oddListHead.next;
        }
        head = head.next
    }
    oddListHead.next = null;
    evenListHead.next = oddList.next;
    return evenList.next;
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




list.head = sepearateEvenOddElements(list.head);
list.display();