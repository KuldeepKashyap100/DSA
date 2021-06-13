const Node = function(value, parent = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
}



const root = new Node(1);
root.left = new Node(2, root);
root.left.left = new Node(4, root.left);
root.left.right = new Node(5);

root.right = new Node(3);
root.right.right = new Node(6);
root.right.right.left = new Node(7);
root.right.right.right = new Node(8);
// expected output -> [2, 7, 8]

let target = 3, distance = 2;
findNodesDistanceK(root, target, distance);