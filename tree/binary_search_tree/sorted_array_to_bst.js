
const Node = function(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const arrToBst = (arr, start, end) => {
    if(start === end)
        return new Node(arr[start]);
    const middleElementIndex = Math.floor((start + end)/2);
    // could be start + (end - start)/2 
    const middleNode = new Node(arr[middleElementIndex]);
    middleNode.left = arrToBst(arr, start, middleElementIndex - 1);
    middleNode.right = arrToBst(arr, middleElementIndex + 1, end);
    return middleNode;
}

const arr = [1, 2, 3, 4, 5, 6, 7];

const root = arrToBst(arr, 0, arr.length-1);

const printInorder = (root) => {
    if(!root)
        return;
    printInorder(root.left);
    console.log(root.data);
    printInorder(root.right);
}

printInorder(root);
