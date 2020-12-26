const LinkedList = require("../linked_list/LinkedList");


// tranversed to find length and then middle element [time -> o(n)] and [space -> o(1)]
// const findMiddleElement = (list) => {
//     let listHead = list.head;
//     let listLength = 0;
//     while(listHead) {
//         listLength++
//         listHead = listHead.next;
//     }
//     let temp = listLength
//     listHead = list.head;
//     while(temp--) {
//         if(temp === Math.floor(listLength/2))
//             break;
//         listHead = listHead.next;
//     }
//     return listHead;
// }

// can also use hashtable [time -> o(n)] and [space -> o(n)]

// can also solve in one scan [time -> o(n)] and [space -> o(1)]
const findMiddleElement = () => {
    let listTail = list.head;
    let listHead = list.head;

    // let listHeadLength = 0;
    // let listTailLength = 0;
    // while(listHead.next != null) {
    //     if(listTailLength != Math.ceil(listHeadLength/2)) {
    //         // let temp = Math.ceil(listHeadLength/2) - listTailLength;
    //         listTailLength++;
    //         listTail = listTail.next;
    //     }
    //     listHeadLength++;
    //     listHead = listHead.next;
    // }

    let moveBoth = false;
    // alternate code for same approach a bit refined one
    while(listHead.next != null) {
        if(!moveBoth) {
            listHead = listHead.next;
        }
        if(moveBoth) {
            listHead = listHead.next;
            listTail = listTail.next;
        }
        moveBoth = !moveBoth;
    }
    return listTail;
}

let list = new LinkedList();
list.insert(1);
list.insert(2, 2);
list.insert(3, 3);
list.insert(4, 4);
list.insert(5, 5);
// list.insert(6, 6);
// list.insert(7, 7);
// list.insert(8);
// list.insert(9);



const ele = findMiddleElement(list);
console.log(ele);