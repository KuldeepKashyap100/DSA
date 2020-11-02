const verticalSum = (root, column) => {
    if(!root)
        return null;
    verticalSum(root.left, column-1);
    if(!hashMap[column]) hashMap[column] = 0;
    hashMap[column] += root.data;
    verticalSum(root.right, column +1);
}

const Node = function (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const hashMap = {};
verticalSum(root, 0)
console.log(hashMap);
