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

    insert(strToBeInserted) {
        if(!this.root) {
            this.root = new Node(strToBeInserted[0]);
        }
        let root = this.root, prev;
        let i = 0;
        // find first character
        while(root) {
            prev = root;
            if(root.data === strToBeInserted[i]) {
                break;
            }
            else if(root.data > strToBeInserted[i]) {
                root = root.left;
            }
            else if(root.data < strToBeInserted[i]) {
                root = root.right;
            }
        }

        if(!root) root = prev;
        else i++;
        while(i < strToBeInserted.length) {
            const newNode = new Node(strToBeInserted[i]);
            if(!root.eq) {
                root.eq = newNode;
                if(i === strToBeInserted.length - 1) {
                    root.eq.terminating++;
                }
                root = root.eq;
            }
            else if(root.eq.data !== strToBeInserted[i]) {
                if(strToBeInserted[i] < root.data) {

                }
            }
            i++;
        }
    }
}

const trie = new TernarySearchTrees();
const input = ["pqrs", "pprt", "psst", "qqrs", "pqrs"];
input.forEach(str => trie.insert(str));
trie.search("pqrs");
