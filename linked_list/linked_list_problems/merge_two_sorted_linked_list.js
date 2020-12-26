const LinkedList = require("../linked_list/LinkedList");

// recusive solution [time -> o(n+m)] and [space -> o(n+m)]
// const mergeSortedLists = (firstListHead, secondListHead) => {
//     let result;

//     if(firstListHead === null)  return secondListHead;
//     if(secondListHead === null) return firstListHead;

//     if(firstListHead.data <= secondListHead.data) {
//         result = firstListHead;
//         result.next = mergeSortedLists(firstListHead.next, secondListHead);
//     }
//     else {
//         result = secondListHead;
//         result.next = mergeSortedLists(firstListHead, secondListHead.next);
//     }
//     return result;
// }


// iterative solution [time -> o(n+m)] and [space -> o(1)]
const mergeSortedLists = (firstListHead, secondListHead) => {
    // let result = new LinkedList();
    // let tail;
    // while(firstListHead && secondListHead) {
    //     if(firstListHead.data <= secondListHead.data) {
    //         tail = result.insert(firstListHead.data);
    //         firstListHead = firstListHead.next;
    //     }
    //     else {
    //         tail = result.insert(secondListHead.data);
    //         secondListHead = secondListHead.next;
    //     }
    // }
    // if(firstListHead === null)  tail.next = secondListHead;
    // if(secondListHead === null) tail.next = firstListHead;
    // return result;

    // diff appraoch
    let temp = {};
    let head = temp;
    while(firstListHead && secondListHead) {
        if(firstListHead.data <= secondListHead.data) {
            temp.next = firstListHead;
            temp = temp.next;
            firstListHead = firstListHead.next;
        }
        else {
            temp.next = secondListHead;
            temp = temp.next;
            secondListHead = secondListHead.next;
        }
    }
    if(firstListHead === null)  temp.next = secondListHead;
    else temp.next = firstListHead;
    return head.next;
}


// let firstList = new LinkedList();
// firstList.insert(2);
// firstList.insert(4);
// firstList.insert(6);
// firstList.insert(8);
// firstList.insert(10);

// let secondList = new LinkedList();
// secondList.insert(1);
// secondList.insert(3);
// secondList.insert(5);
// secondList.insert(7);
// secondList.insert(9);


let firstList = new LinkedList();
firstList.insert(2);
firstList.insert(8);
firstList.insert(544);
firstList.insert(733);
firstList.insert(2000);

let secondList = new LinkedList();
secondList.insert(1);
secondList.insert(600);
secondList.insert(1000);
secondList.insert(1400);
secondList.insert(1800);



// [firstList, secondList] = [secondList, firstList];

// firstList.display();
// secondList.display();
let result = new LinkedList();
result.head = mergeSortedLists(firstList.head, secondList.head);
result.display();

// mergeSortedLists(firstList.head, secondList.head).display();

