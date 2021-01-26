
const permutations = (permutation, depth, used, original) => {
    if(depth === original.length) {
        console.log(permutation);
        return;
    }

    for(let i = 0; i < original.length; i++) {
        if(!used[i]) {
            used[i] = true;
            permutation += original[i];
            permutations(permutation, depth + 1, used, original);
            used[i] = false;
        }
    }
}

const original = "aaa";
const permutation = [];
const used = new Array(original.length).fill(false);
permutations("", 0, used, original);
console.log(permutation);