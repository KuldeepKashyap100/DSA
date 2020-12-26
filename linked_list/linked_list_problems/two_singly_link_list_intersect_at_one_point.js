const LinkedList = require("../linked_list/LinkedList");

// brute force approach [time -> o(mn)] and [space -> o(1)]
// const getIntersectionPoint = (firstList, secondList) => {
//     let firstListHead = firstList.head;
//     let secondListHead;
//     while(firstListHead) {
//         secondListHead = secondList.head;
//         while(secondListHead) {
//             if(firstListHead.next === secondListHead)
//                 return secondListHead;
//             secondListHead = secondListHead.next;
//         }
//         firstListHead = firstListHead.next;
//     }
// }

// using hash table [time ->o(n) + o(m)] and [space -> o(n) or o(m)]
// const getIntersectionPoint = (firstList, secondList) => {
//     let firstListHead = firstList.head;
//     let secondListHead = secondList.head;
//     const hashtable = {};
//     while(firstListHead) {
//         hashtable[firstListHead.data] = firstListHead.next;
//         firstListHead = firstListHead.next; 
//     }
//     while(secondListHead) {
//         if(hashtable[secondListHead.data] === secondListHead.next)
//             return secondListHead;
//         secondListHead = secondListHead.next; 
//     }
// }

// using stack [time -> o(n+m)] and [space -> o(n+m)]
// const getIntersectionPoint = (firstList, secondList) => {
//     let firstListHead = firstList.head;
//     let secondListHead = secondList.head;
//     const firstListStack = [];
//     const secondListStack = [];
//     while(firstListHead) {
//         firstListStack.push(firstListHead);
//         firstListHead = firstListHead.next;
//     }
//     while(secondListHead) {
//         secondListStack.push(secondListHead);
//         secondListHead = secondListHead.next;
//     }
//     firstListHead = firstListStack.pop();
//     secondListHead = secondListStack.pop();
//     let targetNode;
//     while(firstListHead && secondListHead) {
//         if(firstListHead !== secondListHead)
//             break;
//         targetNode = firstListHead;
//         firstListHead = firstListStack.pop();
//         secondListHead = secondListStack.pop();
//     }
//     return targetNode;
// }


//using "finding first repeating number approach" [time -> o(n+m)] and [space -> o(n+m)]
// const getIntersectionPoint = (firstList, secondList) => {
//     let firstListHead = firstList.head;
//     let secondListHead = secondList.head;
//     const tempArray = [];
//     while(firstListHead) {
//         tempArray.push(firstListHead);
//         firstListHead = firstListHead.next;
//     }
//     while(secondListHead) {
//         tempArray.push(secondListHead);
//         secondListHead = secondListHead.next;
//     }
//     // can use efficent searching algo.
//     for(let i=0; i<tempArray.length;i++) {
//         for(let j=i+1;j<tempArray.length;j++) {
//             if(tempArray[i] === tempArray[j])
//                 return tempArray[i];
//         }
//     }
// }


// using "combination of searching and sorting" [time -> o(max(nlogn, mlogm))] and [space -> o(max(n,m))]
// const getIntersectionPoint = (firstList, secondList) => {
//     let firstListHead = firstList.head;
//     let secondListHead = secondList.head;
//     const tempArray = [];
//     while(firstListHead) {
//         tempArray.push(firstListHead);
//         firstListHead = firstListHead.next;
//     }
//     //first sort the stored list we can use merge sort i.e nlogn
//     for(let i=0; i<tempArray.length;i++) {
//         for(let j=i+1;j<tempArray.length;j++) {
//             if(tempArray[i].data > tempArray[j].data)
//                 [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]]
//         }
//     }
//     // now searching each element from second list in firstlist which is already sorted
//     //(so binary search takes logn and for n elements it takes nlogn)
//     while(secondListHead) {
//         if(binarySearch(secondListHead, tempArray, 0, tempArray.length-1))
//             return secondListHead;
//         secondListHead = secondListHead.next;
//     }
// }

// const binarySearch = (element, list, startIndex, endIndex) => {
//     if(element===list[Math.floor((startIndex+endIndex)/2)])
//         return element;
//     else if(element > list[Math.floor((startIndex+endIndex)/2)])
//         return binarySearch(element, list, Math.ceil((startIndex+endIndex)/2), endIndex);
//     if(element < list[Math.floor((startIndex+endIndex)/2)])
//         return binarySearch(element, list, startIndex, Math.floor((startIndex+endIndex)/2));
// } 



// using most efficient approach [time -> o(max(n, m))] and [space -> o(1)]
const getIntersectionPoint = (firstList, secondList) => {
    let firstListHead = firstList.head;
    let secondListHead = secondList.head;
    let firstListLength = 0;
    let secondListLength = 0;
    const tempArray = [];
    while(firstListHead) {
        firstListLength++;
        firstListHead = firstListHead.next;
    }
    while(secondListHead) {
        secondListLength++;
        secondListHead = secondListHead.next;
    }
    firstListHead = firstList.head;
    secondListHead = secondList.head;

    // let differenceInLength = firstListLength - secondListLength;
    // if(differenceInLength > 0) {
    //     while(differenceInLength--) {
    //         firstListHead = firstListHead.next;
    //     }
    // }
    // else {
    //     while(differenceInLength++ !== 0) {
    //         secondListHead = secondListHead.next;
    //     }
    // }

    
    //less code than previous approach
    let differenceInLength = firstListLength - secondListLength;
    if(secondListLength > firstListLength) {
        [firstListHead, secondListHead] = [secondListHead, firstListHead];
        differenceInLength = -differenceInLength;
    }

    while(differenceInLength--) {
        firstListHead = firstListHead.next;
    }

    while(firstListHead !== secondListHead) {
        firstListHead = firstListHead.next;
        secondListHead = secondListHead.next;
    }
    return firstListHead;
}



let firstList = new LinkedList();
firstList.insert(1);
firstList.insert(2, 2);
firstList.insert(3, 3);
const intersectionPoint = firstList.insert(4, 4);
firstList.insert(5, 5);
firstList.insert(6, 6);
firstList.insert(7, 7);
firstList.insert(8, 8);

let secondList = new LinkedList();
secondList.insert(9);
secondList.insert(10).next = intersectionPoint;

// [firstList, secondList] = [secondList, firstList];

// firstList.display();
// secondList.display();

const point = getIntersectionPoint(firstList, secondList);
console.log(point);