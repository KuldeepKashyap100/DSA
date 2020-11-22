
const connectNodesAtLevels = (root) => {
    let nextHead = null, rightMostNode = null; 
    while(root) {
        if(root.left) {
            if(!rightMostNode) {
                rightMostNode = root.left;
                nextHead = root.left
            }
            else {
                rightMostNode.next = root.left;
                rightMostNode = rightMostNode.next;
            }
        }
        if(root.right) {
            if(!rightMostNode) {
                rightMostNode = root.right;
                nextHead = root.right;
            }
            else {
                rightMostNode.next = root.right;
                rightMostNode = rightMostNode.next;
            }
        }
        root = root.next;
    }
    nextHead && connectNodesAtLevels(nextHead);
}

const Node = function (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);

connectNodesAtLevels(root);

console.log(root);