const checkIdenticalTrees = (root, duplicateRoot) => {
    if(!root && !duplicateRoot)
        return true;
    if(!root || !duplicateRoot) 
        return false;
    
    return (root.data === duplicateRoot.data && checkIdenticalTrees(root.left, duplicateRoot.left) && checkIdenticalTrees(root.right, duplicateRoot.right));
}

const checkIdenticalTreesNonRecursive = (root, duplicateRoot) => {
  const queue = [];
  const duplicateQueue = [];
  queue.push(root);
  duplicateQueue.push(duplicateRoot);
  while (queue.length && duplicateQueue.length) {
    temp = queue.shift();
    duplicateTemp = duplicateQueue.shift();

    if (
      (temp.left && !duplicateTemp.left) || (!temp.left && duplicateTemp.left) ||
      (temp.right && !duplicateTemp.right) || (!temp.right && duplicateTemp.right) ||
      (temp.data !== duplicateTemp.data)
    )
      return false;
    if (temp.left && duplicateTemp.left) {
      queue.push(temp.left);
      duplicateQueue.push(duplicateTemp.left);
    }

    if (temp.right && duplicateTemp.right) {
      queue.push(temp.right);
      duplicateQueue.push(duplicateTemp.right);
    }
  }
  return true;
};

const Node = function (data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
};

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
// root.right.left = new Node(6);
// root.right.right = new Node(8);

const duplicateRoot = new Node(1);
duplicateRoot.left = new Node(2);
duplicateRoot.right = new Node(3);
duplicateRoot.left.left = new Node(4);
duplicateRoot.left.right = new Node(5);
// duplicateRoot.right.left = new Node(6);
// duplicateRoot.right.right = new Node(8);

console.log(checkIdenticalTrees(root, duplicateRoot));
