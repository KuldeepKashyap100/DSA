// https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
//https://www.youtube.com/watch?v=nYFd7VHKyWQ&feature=emb_rel_pause
// backtracking solution
// time -> O(n!) | space -> O(1)
/**
 * nPr = n! / (n-r)! [probability of selecting ordered set r objects from n objects]
 * number of permutations = n! [when r = n]
 * if a character is repeated 2 times then total permutations -> n! / 2!
 * if another character is repeated 3 times -> n! / 2! * 3!
 */
const printAllPermutations = (input, left, right) => {
    if(left === right) {
        console.log(input);
        return;
    }
    for(let i = left; i <= right; i++) {
        input = swap(input, left, i);
        printAllPermutations(input, left + 1, right);
        input = swap(input, left, i);
    }
}
function swap(str, i, j) {
    str = str.split("");
    [str[i], str[j]] = [str[j], str[i]];
    return str.join("");
}

printAllPermutations("abc", 0, 2);