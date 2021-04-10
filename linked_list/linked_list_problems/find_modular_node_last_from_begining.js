const LinkedList = require("../LinkedList");

// n%k==0 where is total no. of elements [time -> o(2n)] and [space -> o(1)]
// const findModularNode = (list, k) => {
//     let listHead = list.head;
//     let listSize = 1;
//     while(listHead = listHead.next) listSize++; 

//     let noOfNodesFromEndToBeSkipped = listSize % k;
//     listSize = listSize - noOfNodesFromEndToBeSkipped-1;

//     listHead = list.head;
//     while(listSize--) listHead = listHead.next;
//     return listHead;
// }

// in one scan
const findModularNode = (list, k) => {
    let listHead = list.head;
    let modularNode;
    let listSize = 1;
    while(listHead){
        if(listSize%k ===0) modularNode = listHead;
        listSize++;
        listHead = listHead.next;
    }
    return modularNode;
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




const modularNode = findModularNode(list, 4);
console.log(modularNode);