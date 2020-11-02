let index = 0;
const constructTree = (preOrder, k) => {
    const queue = [];
    const head = new Node(preOrder[index]);
    queue.push(head);
    index++;
    while(index < preOrder.length) {
        const parent = queue.shift();
        let child = {};
        temp = child;
        for(let i = index; i<index+k; i++) {
            temp.nextSibling =  new Node(preOrder[i]);
            queue.push(temp.nextSibling);
            temp = temp.nextSibling;
        }
        index = index + k;
        child = child.nextSibling;
        parent.firstChild = child;
    }
    return head;
}

const printTree = (root) => {
    const queue = [];
    queue.push(root);
    // queue.push(null);
    let enqueueSib = true;
    while(queue.length) {
        const temp = queue.shift();
        console.log(temp.data);

        if(temp.firstChild) {
            queue.push(temp.firstChild);
        }

        let sibling = temp.nextSibling;
        while(sibling) {
            console.log(sibling.data);
            if(sibling.firstChild) {
                queue.push(sibling.firstChild);
            }
            sibling = sibling.nextSibling;
        }
    }
}


const Node = function (data, firstChild = null, nextSibling = null) {
    this.data = data;
    this.firstChild = firstChild;
    this.nextSibling = nextSibling;
}

const head = constructTree(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'i', 'j', 'k'], 3);
printTree(head);
