const BinarySearchTree = require("./binary_search_tree");

let prev = null;
const getFloor = (root, data) => {
    if(!root)
        return Infinity;
    if(root.data === data)
        return data;
    if(root.data > data)
        return getFloor(root.left, data);
    const floor = getFloor(root.right, data);
    return floor <= data ? floor : root.data;
}

const getCeil = (root, data) => {
    if(!root)
        return -1;
    if(root.data === data)
        return data;
    if(root.data < data)
        return getCeil(root.right, data);
    const ceil = getCeil(root.left, data);
    return ceil >= data ? ceil : root.data;
}

const getCeilFloorIterative = (root, data) =>{
    let floor, ceil;
    while(root) {
        if(root.data === data) {
            floor = ceil = root.data;
            break;
        }
        else if(root.data < data) {
            floor = root.data
            root = root.right;
        }
        else if(root.data > data) {
            ceil = root.data;
            root = root.left;
        }
    }
    return {floor: floor, ceil: ceil};
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(8);
binarySearchTree.insert(4);
binarySearchTree.insert(12);
binarySearchTree.insert(2);
binarySearchTree.insert(6);
binarySearchTree.insert(10);
binarySearchTree.insert(14);

const key = 15;
// console.log(getFloor(binarySearchTree.root, key));
// console.log(getCeil(binarySearchTree.root, key));

console.log(getCeilFloorIterative(binarySearchTree.root, key));

