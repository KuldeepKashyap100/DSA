const LinkedList = require("../LinkedList");

// [time -> o(n)] and [space -> o(1)]
const findModularNode = (list, k) => {
    let listHead = list.head;
    let modularNode = listHead;
    while(k){
        listHead = listHead.next
        k--;
    }
    while(listHead) {
        modularNode = modularNode.next;
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