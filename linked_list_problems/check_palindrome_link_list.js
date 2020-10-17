const LinkedList = require("../linked_list/LinkedList");

// [time -> o(n)] and [space -> o(1)]
const checkPalindrome = (list) => {
    let listHead = list.head;
    let fastPtr = slowPtr = listHead;
    let moveBoth = true;
    let prev;
    // find mid node
    while(fastPtr.next) {
        if(moveBoth) {
            prev = slowPtr;
            slowPtr = slowPtr.next;
        }
        fastPtr = fastPtr.next;
        moveBoth = !moveBoth;
    }
    // reverse the second list
    let curr = slowPtr.next, next;
    prev = null;
    while(curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    fastPtr = prev;

    // check palindrome
    while(listHead!=slowPtr) {
        if(listHead.data!==fastPtr.data)
            return false;
        listHead = listHead.next;
        fastPtr = fastPtr.next;
    }
    return true;
}

let list = new LinkedList();

// list.insert(1);
list.insert(1);
list.insert(0);
list.insert(2);
// list.insert(3);

// list.insert(2);
// list.insert(1);

console.log(checkPalindrome(list));
