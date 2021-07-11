// same for all the implementation
const makeSet = (size) => {
    // make n sets
    const disjointSet = new Array(size).map((element, index) => index);
    return disjointSet;
}

/**
 * Fast Find Implementation (Quick Find)
 * find -> time -> O(1) (because it takes constant time to find the set in the array)
 * union -> time -> O(n) ( we need to scan entire array to change all i's to j's.)
 * union -> time -> O(n^2) (a sequence of n-1 elements takes O(n^2)).
 */
class FastFind {
    constructor(size) {
        // make n sets
        this.disjointSet = Array.from({ length:size}, (_, index) => index);
    }
    findSet(element) {
        if(element <= 0 || element >= this.disjointSet.length)
            return null;
        return this.disjointSet[element];
    }
    
    unionSets(firstSet, secondSet) {
        if(this.findSet(firstSet) === this.findSet(secondSet))
            return null; 
        if((this.firstSet <= 0 || this.firstset >= this.disjointSet.length) || (this.secondSet <= 0 || this.secondSet >= this.disjointSet.length))
            return null;
        
        for(let i = 0; i < this.disjointSet.length; i++) {
            if(this.disjointSet[i] === secondSet) 
                this.disjointSet[i] = firstSet;
        }
    }
}

/**
 * Fast Union Implementation (Slow Find)
 * find -> time -> O(n)
 * union -> O(1)
 */

class FastUnionSlowFind {
    constructor(size) {
        this.disjointSet = Array.from({length: size}, (_, index) => index);
    }
    findSet(element) {
        if(element <= 0 || element >= this.disjointSet.length)
            return null;
        if(this.disjointSet[element] === element) 
            return element;
        return this.findSet(this.disjointSet[element]);
    }
    unionSets(firstSet, secondSet) {
        if(this.findSet(firstSet) === this.findSet(secondSet))
            return null; 
        if((this.firstSet <= 0 || this.firstset >= this.disjointSet.length) || (this.secondSet <= 0 || this.secondSet >= this.disjointSet.length))
            return null;

        this.disjointSet[secondSet] = firstSet;
    }
}


// not working need to fix.
class FastUnionQuickFind {
    constructor(size) {
        this.disjointSet = Array.from({length: size}, (_) => -1);
    }
    findSet(element) {
        if(element <= 0 || element >= this.disjointSet.length)
            return null;
        if(this.disjointSet[element] === -1) 
            return element;
        return this.findSet(this.disjointSet[element]);
    }
    unionSets(firstSet, secondSet) {
        if(this.findSet(firstSet) === this.findSet(secondSet) && this.findSet(firstSet) !== -1)
            return null; 
        if(this.disjointSet[firstSet] >  this.disjointSet[secondSet]) {
            this.disjointSet[secondSet] += this.disjointSet[firstSet];
            this.disjointSet[firstSet] = secondSet;
        }
        else {
            this.disjointSet[firstSet] += this.disjointSet[secondSet];
            this.disjointSet[secondSet] = firstSet;
        }
    }
}

const Node  = function(data) {
    this.data = data;
    this.parent = this;
    this.rank = 0;
}

// Union By Rank With PathCompression
class DisjointSet {
    constructor() {
        this.map = new Map();
    }
    makeSet(data) {
        this.map.set(data, new Node(data));
    }
    union(firstSet, secondSet) {
        const firstParent = this.getParentAndCompressPath(this.map.get(firstSet));
        const secondParent = this.getParentAndCompressPath(this.map.get(secondSet));
        if(firstParent === secondParent)
            return;
        
        if(firstParent.rank >= secondParent.rank) {
            // increment rank only if both the parent have same rank
            if(firstParent.rank === secondParent.rank )
                firstParent.rank++;
            secondParent.parent = firstParent;
        }
        else {
            firstParent.parent = secondParent;
        }

    }
    // find the representative of the set
    findSet(element) {
        return this.getParentAndCompressPath(this.map.get(element)).data;
    }

    // find the representative recursively and does the path compression as well
    getParentAndCompressPath(node) {
        if(node === node.parent)
            return node;
        node.parent = this.getParentAndCompressPath(node.parent);
        return node.parent;
    }
}

// const ff = new UnionByRankWithPathCompression();
// ff.makeSet(1);
// ff.makeSet(2);
// ff.makeSet(3);
// ff.makeSet(4);
// ff.makeSet(5);
// ff.makeSet(6);
// ff.union(1, 2);

// ff.union(2, 3);

// ff.union(3, 4);
// console.log(ff.findSet(4));

module.exports = DisjointSet;