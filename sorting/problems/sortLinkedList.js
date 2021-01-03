const LinkedList = require("../../linked_list/LinkedList");

const sortLinkedListUsingMergeSort = (list) => {
    list.head = mergeSort(list.head);
}

const mergeSort = (head) => {
    let firstHead = null;
    let firstTail = null;
    let secondHead = null;
    let secondTail = null;

    if(!head || !head.next) return head;

    while(head) {
        if(!firstHead) {
            firstHead = firstTail = head;
        }
        else {
            firstTail.next = head;
            firstTail = head;
        }
        head = head.next;
        firstTail.next = null;


        if(!head) continue;

        if(!secondHead) {
            secondHead = secondTail = head;
        }
        else {
            secondTail.next = head;
            secondTail = head;
        }
        head = head.next;
        secondTail.next = null;
    }
    /**
     * Alternate find middle using another subroutine and then divide the list.
     */

    firstHead =  mergeSort(firstHead);
    secondHead = mergeSort(secondHead);
    return merge(firstHead, secondHead);
}

const merge = (firstHead, secondHead) => {
    let tail;
    if(!firstHead)
        return secondHead;
    if(!secondHead)
        return firstHead;
    
    if(firstHead.data < secondHead.data) {
        tail = firstHead;
        tail.next = merge(firstHead.next, secondHead);
    }
    else {
        tail = secondHead;
        tail.next = merge(firstHead, secondHead.next);
    }
    return tail;
}


/**
 * Quick Sort
 */

const sortLinkedListUsingQuickSort = (list) => {
    list.head = quickSort(list.head);
}

const quickSort = (head) => {
    if(!head || !head.next) return head;
    const pivot = head;
    head = head.next;
    pivot.next = null;


    let lesserListHead = null, lesserListTail = null;
    let largerListHead = null, largerListTail = null;

    while(head) {
        if(head.data < pivot.data)  {
            if(!lesserListHead) {
                lesserListHead = lesserListTail = head;
            }
            else {
                lesserListTail.next = head;
                lesserListTail = head;
            }
            head = head.next;
            lesserListTail.next = null;
        }
        else {
            if(!largerListHead) {
                largerListHead = largerListTail = head;
            }
            else {
                largerListTail.next = head;
                largerListTail = head;
            }
            head = head.next;
            largerListTail.next = null;
        }
    }
    lesserListHead = quickSort(lesserListHead);
    largerListHead = quickSort(largerListHead);

    join(lesserListHead, pivot);
    join(pivot, largerListHead);

    return lesserListHead || pivot;
}

const join = (head, node) => {
    if(!head) return;
    while(head.next) {
        head = head.next;
    }
    head.next = node;
    return head;
}


const list = new LinkedList();
list.insert(3);
list.insert(7);
list.insert(4);
list.insert(6);
list.insert(2);
list.insert(0);

// sortLinkedListUsingMergeSort(list);
sortLinkedListUsingQuickSort(list);

list.display();

