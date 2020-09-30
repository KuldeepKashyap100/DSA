const LinkedList = require("../linked_list/LinkedList");

// recursive solution [time -> o(n)] and [space -> o(n/2)]
// const reverseInPairs = (head) => {
//     if(!head || !head.next)
//         return;
    
//     let temp = head.next;
//     head.next = temp.next;
//     temp.next = head;
//     head = temp;
//     head.next.next = reverseInPairs(head.next.next);
//     return head;
// }

// iterative solution [time -> o(n)] and [space -> o(1)]
const reverseInPairs = (current) => {
    let temp, tempHead = null;
    while(current && current.next) {
        if(temp) {
            temp.next.next = current.next;
        }

        temp = current.next;
        current.next = current.next.next;
        temp.next = current;
        
        if(tempHead === null)
            tempHead = temp;
        
        current = current.next;
    }
    return tempHead;
}




let list = new LinkedList();

list.insert(1);
list.insert(2, 2);
list.insert(3, 3);
list.insert(4, 4);
list.insert(5, 5);

list.insert(6);

list.head = reverseInPairs(list.head);

list.display();