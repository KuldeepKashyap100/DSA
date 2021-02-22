class Node {
    constructor(data, left = null, right = null) {
        this.value = data;
        this.left = left;
        this.right = right;
    }
}

function validateBst(tree) {
    console.log(validateBstUtil(tree, -Infinity, Infinity));
}

function validateBstUtil(root, min, max) {
	if(!root) return true;
	if(root.value < min || root.value >= max) return false;
	const validLeftSubtree = validateBstUtil(root.left, min, root.value);
	const validRightSubtree = validateBstUtil(root.right, root.value, max);
	return validLeftSubtree && validRightSubtree;
}


const binarySearchTree = new Node(10);
binarySearchTree.right = new Node(15);
binarySearchTree.right.right = new Node(22);

binarySearchTree.left = new Node(5);
binarySearchTree.left.left = new Node(2);
binarySearchTree.left.left.left = new Node(1);

binarySearchTree.left.right = new Node(5);
binarySearchTree.left.right.right = new Node(11);

validateBst(binarySearchTree);