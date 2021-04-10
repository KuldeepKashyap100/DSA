const LinkedList = require("../LinkedList");

// [time -> o(n)] and [space -> o(1)]
const findFractionalNode = (list, k) => {
    let listHead = list.head;
    let position = 0;
    let fractionalNode;
    while(listHead) {
        if(position%k === 0) {
            if(!fractionalNode) fractionalNode = listHead;
            else fractionalNode = fractionalNode.next;
        }π
        position++;
        listHead = listHead.next;
    }
    return fractionalNode;
}

let list = new LinkedList();
list.insert(1);
list.insert(2, 2);
list.insert(3, 3);
list.insert(4, 4);
// list.insert(5, 5);
// list.insert(6, 6);
// list.insert(7, 7);
// list.insert(8);
// list.insert(9);
// list.insert(10);




const fractionalNode = findFractionalNode(list, 2);
console.log(fractionalNode);