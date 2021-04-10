const LinkedList = require("../LinkedList");


// using hashmap [time -> o(n)] and [space -> o(n)]
// const createDuplicateList = (list) => {
//     let listHead = list.head;
//     const hashMap = new Map();
//     while(listHead) {
//         hashMap.set(listHead, {data: listHead.data, next:null, random:null});
//         listHead = listHead.next;
//     }
//     listHead = list.head;
//     while(listHead) {
//         temp = hashMap.get(listHead);
//         temp.next = hashMap.get(listHead.next);
//         temp.random = hashMap.get(listHead.random);
//         listHead = listHead.next;
//     }
//     return hashMap.get(list.head);
// }

// [time -> o(n)] and [space -> o(1)]
const createDuplicateList = (list) => {
    let listHead = list.head;

    // insert new nodes in between current link list nodes
    while(listHead) {
        newNode = {data: listHead.data};
        temp = listHead.next;
        listHead.next = newNode;
        newNode.next = temp;
        listHead = temp;
    }

    listHead = list.head;

    let duplicateHead = listHead.next;
    // set next and random pointers of new Link list and repair old link list
    while(listHead) {
        prev = listHead;
        newNode = listHead.next;
        newNode.random = listHead.random.next;
        listHead = listHead.next.next;
        newNode.next = newNode.next?newNode.next.next: newNode.next;
        prev.next = listHead;
    }

    return duplicateHead;
}

let list = new LinkedList();

// creating a random pointer.
temp1 = list.insert(1);
temp2 = list.insert(2, 2);
temp3 = list.insert(3, 3);
temp4 = list.insert(4, 4);
temp5 = list.insert(5, 5);

temp1.random = temp3;
temp2.random = temp1;
temp3.random = temp4;
temp4.random = temp2;
temp5.random = temp5;


list.head = createDuplicateList(list);


list.display();