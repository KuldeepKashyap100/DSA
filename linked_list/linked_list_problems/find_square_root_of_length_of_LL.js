const LinkedList = require("../linked_list/LinkedList");

// [time -> o(n)] and [space -> o(1)]
const findSquareRootNode = (list) => {
    let listHead = list.head;
    let headPosition = 1;
    let tailPosition = 1;
    let squareRootNode = null;
    while(listHead) {
        if(headPosition === tailPosition*tailPosition) {
            if(!squareRootNode) squareRootNode = listHead;
            else  squareRootNode = squareRootNode.next;
            tailPosition++;
        }
        headPosition++;
        listHead = listHead.next;
    }
    return squareRootNode;
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




const fractionalNode = findSquareRootNode(list);
console.log(fractionalNode);