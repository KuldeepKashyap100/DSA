const LinkedList = require("../linked_list/LinkedList");

// [time -> o(n/2)] and [space -> o(1) for stack]
const isLinkListLengthEven = (head) => {
    while(head && head.next) {
        head = head.next.next;
    }
    return head? false: true;
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



console.log(isLinkListLengthEven(list.head));