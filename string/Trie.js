/**
 * Options to store strings and their problems: 
 * 1. hashmap -> ordering is lost.
 * 2. BST -> compare the entire string length to check equality.
 * 3. BruteForce -> complexity very high O(n * l) where n is total number of strings and l is max length.
 * 4. Tries -> Space required is lot more beacuse of pointer. 
 *    Space -> O(n * l * c) where c is for pointer and it is very high.
 */
class TrieNode {
    constructor(data) {
        this.data = data;
        this.terminating = 0;
        this.childNodes = new Array(26).fill(null);
    }
    nextChild(parentChar) {
        return this.childNodes.find(childChar => childChar && childChar.data === parentChar);
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }
    
    // O(l) where l is the length of the string
    search(targetStr) {
        if(!targetStr) return null;

        let currentChar = this.root;
        for(let i = 0; i < targetStr.length; i++) {
            currentChar = currentChar.nextChild(targetStr[i]);
            if(!currentChar) {
                console.log("not found");
                return;
            }
        }
        console.log("found " + currentChar.terminating + " times");
        return currentChar.terminating;
    }

    // O(l) where l is the length of the string
    insert(strToBeInserted) {
        let currentChar = this.root;
        for(let i = 0; i < strToBeInserted.length; i++) {
            if(!currentChar.childNodes[strToBeInserted.charCodeAt(i) - "a".charCodeAt(0)]) {
                currentChar.childNodes[strToBeInserted.charCodeAt(i) - "a".charCodeAt(0)] = new TrieNode(strToBeInserted[i]);
            }
            currentChar = currentChar.nextChild(strToBeInserted[i]);
        }
        currentChar.terminating++;
    }

    // O(l) where l is the length of the string
    delete(strToBeDeleted) {
        let currentChar = this.root;
        for(let i = 0; i < strToBeDeleted.length; i++) {
            if(!currentChar) {
                throw new Error("Not present");
            }
            currentChar = currentChar.nextChild(strToBeDeleted[i]);
        }
        currentChar.terminating--;
    }

    // O(l) where l is the length of the string
    update(oldValue, newValue) {
        this.delete(oldValue);
        this.insert(newValue);
    }
}

const trie = new Trie();
const input = ["pqrs", "pprt", "psst", "qqrs", "pqrs"];
input.forEach(str => trie.insert(str));
// trie.search("pppp");

// trie.update("pprt", "pppp");
// trie.search("pppp");
