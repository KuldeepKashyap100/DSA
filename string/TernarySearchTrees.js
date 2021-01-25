class Node {
    constructor(data = null) {
        this.data = data;
        this.left = null;
        this.eq = null;
        this.right = null;
        this.terminating = 0;
    }
}
class TernarySearchTrees {
    constructor() {
        this.root = null;
    }
    // time -> O(L) where L is length of the longest string
    search(targetStr) {
        if(!targetStr) return null;
        
        let root = this.root;
        let i = 0;

        while(root) {
            if(root.data === targetStr[i]) {
                if(root.terminating && i === targetStr.length - 1) {
                    console.log("found " + root.terminating + " times");
                    return;
                }
                root = root.eq;
                i++;
            }
            else if(targetStr[i] < root.data) {
                root = root.left;
            }
            else if(targetStr[i] > root.data) {
                root = root.right;
            }
        }
        console.log("not found");
    }

    // try writing recursive version of it if got time.
    // time -> O(L) where L is length of the longest string
    insert(strToBeInserted) {
        this.root = this.insertNode(this.root, strToBeInserted, 0);
    }

    insertNode(root, strToBeInserted, i) {
        if(!root) {
            const newNode = new Node(strToBeInserted[i]);
            if(i === strToBeInserted.length - 1) {
                newNode.terminating++;
                return newNode
            }
            else {
                newNode.eq = this.insertNode(newNode.eq, strToBeInserted, i + 1);
                return newNode;
            }
        }
        
        if(strToBeInserted[i] < root.data) {
            root.left = this.insertNode(root.left, strToBeInserted, i);
        }
        else if(strToBeInserted[i] > root.data) {
            root.right = this.insertNode(root.right, strToBeInserted, i);
        }
        else {
            if(i === strToBeInserted.length - 1) {
                root.terminating++;
            }
            else {
                root.eq = this.insertNode(root.eq, strToBeInserted, i + 1);
            }
        }
        return root;
    }
    
    // time -> O(L) where L is length of the longest string
    delete(strToBeDeleted) {
        this.root = this.deleteNode(this.root, strToBeDeleted, 0);
    }

    deleteNode(root, strToBeDeleted, i) {
        if(strToBeDeleted[i] < root.data) {
            root.left = this.deleteNode(root.left, strToBeDeleted, i);
        }
        else if(strToBeDeleted[i] > root.data) {
            root.right = this.deleteNode(root.right, strToBeDeleted, i);
        }
        else {
            if(i === strToBeDeleted.length - 1) {
                root.terminating--;
            }
            else {
                root.eq = this.deleteNode(root.eq, strToBeDeleted, i + 1);
            }
        }
        return root;
    }
    
    maxLengthOfLartestWord(root) {
        if(!root) return 0;
        return Math.max(this.maxLengthOfLartestWord(root.left), this.maxLengthOfLartestWord(root.eq) + 1, this.maxLengthOfLartestWord(root.right));
    }

}

const tst = new TernarySearchTrees();
const input = ["pqrs", "pprt", "psst", "qqrs", "pqrs"];
input.forEach(str => tst.insert(str));
tst.search("pqrs");

tst.delete("pqrs");

tst.search("pqrs");

console.log(tst.maxLengthOfLartestWord(tst.root));

