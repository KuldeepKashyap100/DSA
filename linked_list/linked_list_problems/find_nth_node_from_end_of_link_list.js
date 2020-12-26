const LinkedList = require("../linked_list/LinkedList");

// it is taking o(n) and space o(1)
// const findNodeFromBack = (list, nodeNumber) =>{
//     let head = list.head;
//     let count = 0;
//     while(head) {
//         count++;
//         head = head.next;
//     }
//     let temp = count - nodeNumber;
//     head = list.head;
//     while(temp--) {
//         head = head.next;
//     }
//     return head.data;
// }


// time for creating heash table o(n) and the for search o(1) and space is o(n)
// const findNodeFromBack = (list, nodeNumber) =>{
//     let head = list.head;
//     let count = 1;
//     let hashTable = {};
//     while(head) {
//         hashTable[count] = head;
//         head = head.next;
//         count++;
//     }
//     return hashTable[Object.keys(hashTable).length - nodeNumber + 1].data;
// }


// solving problem in one scan
const findNodeFromBack = (list, nodeNumber) =>{
    let targetNode = list.head;
    let head = list.head;

    while(nodeNumber--) {
        head = head.next;
    }
    while(head) {
        targetNode = targetNode.next;
        head = head.next;
    }
    return targetNode.data;
}


let list = new LinkedList();

list.insert(1);
list.insert(2, 2);
list.insert(3, 3);
list.insert(4, 4);
list.insert(5, 5);

const node = findNodeFromBack(list, 4);

console.log(node);