/**
 * https://www.youtube.com/watch?v=YG6iX28hmd0&t=123s
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
    search(word) {
        if(!word) return null;

        let currentNode = this.root;
        for(const char of word) {
            currentNode = currentNode.nextChild(char);
            if(!currentNode) {
                console.log("not found");
                return;
            }
        }
        console.log("found " + currentNode.terminating + " times");
        return currentNode.terminating;
    }

    // O(l) where l is the length of the string
    insert(word) {
        let currentNode = this.root;
        for(const char of word) {
            if(!currentNode.childNodes[char.charCodeAt(0) - 97]) {
                currentNode.childNodes[char.charCodeAt(0) - 97] = new TrieNode(char);
            }
            currentNode = currentNode.nextChild(char);
        }
        currentNode.terminating++;
    }

    // O(l) where l is the length of the string
    delete(word) {
        let currentNode = this.root;
        for(const char of word) {
            if(!currentNode) {
                throw new Error("Not present");
            }
            currentNode = currentNode.nextChild(char);
        }
        currentNode.terminating--;
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
