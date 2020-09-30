const LinkedList = require("../linked_list/LinkedList");

const addListNumbersWrapper = (firstList, secondList) => {
    let result = new LinkedList();
    const firstListLength = firstList.totalElements;
    const secondListLength = secondList.totalElements;

    if(secondListLength>firstListLength)
        [firstList, secondList] = [secondList, firstList];

    let diff = Math.abs(firstListLength-secondListLength);
    while(diff--) firstList = firstList.next;

    addListNumbers(firstList, secondList)

}

const addListNumbers = (firstList, secondList) => {
    
}

const addRemainingNumbers = (head, carry) => {

}

let firstList = new LinkedList();
firstList.insert(1);
firstList.insert(2);
firstList.insert(3);
firstList.insert(4);
firstList.insert(5);

let secondList = new LinkedList();
secondList.insert(6);
secondList.insert(7);
secondList.insert(8);
secondList.insert(9);
secondList.insert(10);



// [firstList, secondList] = [secondList, firstList];

// firstList.display();
// secondList.display();

let result = addListNumbersWrapper(firstList.head, secondList.head);
result.display();