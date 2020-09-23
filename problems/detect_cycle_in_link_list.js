const LinkedList = require("../linked_list/LinkedList");

// brute force o(n^2)
// const detectCycle = (list) => {
//     let currentNode =list.head.next;
//     let i = 0;
//     while(currentNode) {
//         let j = 0;
//         let checkNode = list.head;
//         while(i>=j && checkNode) {
//             if(checkNode === currentNode) return true;
//             checkNode = checkNode.next;
//             j++;
//         }
//         i++;
//         currentNode = currentNode.next;
//     }
//     return false;
// }


// using hashing using time o(n) and space o(n)
// const detectCycle = (list) => {
//     let head = list.head;
//     const hashTable = {};
//     const insert = true;

//     while(head) {
//         if(hashTable[head.data] === head.next) return true;
//         hashTable[head.data] = head.next;
//         head = head.next;
//     }
//     return false;
// }

// using floyd cycle finding algorithm using time o(n) and space o(1)
const detectCycle = (list) => {
    let fastPtr = list.head;
    let slowPtr = list.head;
    while(fastPtr && slowPtr && fastPtr.next) {
        fastPtr = fastPtr.next.next;
        slowPtr = slowPtr.next;
        if(fastPtr === slowPtr)
            return true;
    }
    return false;
}

// to find the starting node of cycle
const findStartingNode = (list) => {
    let slowPtr = list.head;
    let fastPtr = list.head;
    while(slowPtr && fastPtr && fastPtr.next) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
        if(slowPtr === fastPtr)
            break;
    }
    if(slowPtr === fastPtr) {
        slowPtr = list.head;
        while(slowPtr !== fastPtr) {
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next;
        }
        console.log(slowPtr.data);
        return;
    }
    console.log("no cycle detected");
}


let list = new LinkedList();

list.insert(1);
const temp1 = list.insert(2, 2);
list.insert(3, 3);
list.insert(4, 4);
list.insert(5, 5);
list.insert(6, 6);
list.insert(7, 7);
const temp2 = list.insert(8, 8);
temp2.next = temp1;


// list.insert(1);
// list.insert(2, 2);
// list.insert(3, 3);
// list.insert(4, 4);
// list.insert(5, 5);


// const isCycle = detectCycle(list);
// console.log(isCycle);

findStartingNode(list);

