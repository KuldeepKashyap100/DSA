const LinkedList = require("../LinkedList");

const partition = (list, x) => {
    let head = list.head;
    let firstPartitionTail, secondPartitionTail;
    let firstPartitionHead, secondPartitionHead;


    while(head) {
        if(head.data < x) {
            if(!firstPartitionTail) {
                firstPartitionHead = firstPartitionTail = head;
            }
            else {
                firstPartitionTail.next = head;
                firstPartitionTail = head;
            }
        }
        else {
            if(!secondPartitionTail) {
                secondPartitionHead = secondPartitionTail = head;
            }
            else {
                secondPartitionTail.next = head;
                secondPartitionTail = head;
            }
        }
        head = head.next;
    }
    firstPartitionTail.next = secondPartitionHead;
    secondPartitionTail.next = null;
    list.head = firstPartitionHead;
}
const list = new LinkedList();
list.insert(1);
list.insert(4);
list.insert(3);
list.insert(2);
list.insert(5);
list.insert(2);

partition(list, 3);
list.display();

