const LinkedList = require("../LinkedList");

const addListNumbersWrapper = (first, second) => {
    let resultList = new LinkedList();
    let firstList = first.head;
    let secondList = second.head;

    const firstListLength = first.totalElements;
    const secondListLength = second.totalElements;

    if(secondListLength>firstListLength)
        [firstList, secondList] = [secondList, firstList];

    let longerList = firstList;
    let diff = Math.abs(firstListLength-secondListLength);
    while(diff--) firstList = firstList.next;

    let carry = {carryNum: 0}
    addListNumbers(firstList, secondList, resultList, carry);
    // resultList.reverse();

    diff = Math.abs(firstListLength-secondListLength);
    addRemainingNumbers(longerList, carry, resultList, diff);

    if(carry.carryNum) {
        resultList.insert(carry.carryNum);
    }

    resultList.reverse();
    return resultList;
}

const addListNumbers = (firstList, secondList, resultList, carry) => {
    let sum;
    if(!firstList)
        return;
    addListNumbers(firstList.next, secondList.next, resultList,carry);

    //end of both lists
    sum = firstList.data + secondList.data + carry.carryNum;
    carry.carryNum = Math.floor(sum/10);
    sum = sum % 10;
    resultList.insert(sum);
    return;
}

const addRemainingNumbers = (firstList, carry, resultList, diff) => {
    let sum;
    if(!firstList || !diff)
        return;
    addRemainingNumbers(firstList.next, carry, resultList, diff-1);
    sum = firstList.data + carry.carryNum;
    carry.carryNum =  Math.floor(sum/10);
    sum = sum % 10;
    resultList.insert(sum);
    return;
}

let firstList = new LinkedList();
firstList.insert(1);
firstList.insert(2);
firstList.insert(3);
firstList.insert(4);
firstList.insert(5);

let secondList = new LinkedList();
// secondList.insert(6);
secondList.insert(7);
secondList.insert(8);
secondList.insert(9);
secondList.insert(10);



// [firstList, secondList] = [secondList, firstList];

// firstList.display();
// secondList.display();

let resultList = addListNumbersWrapper(firstList, secondList);
resultList.display();