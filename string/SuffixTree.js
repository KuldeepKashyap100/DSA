/**
 * https://www.geeksforgeeks.org/pattern-searching-using-suffix-tree/
 * 
 * This approach that preprocesses the text.  -> O(m)
 * while other approaches preprocess the pattern to make the pattern searching faster. -> O(n)
 * 
 * Imagine you have stored complete work of William Shakespeare and preprocessed it. 
 * You can search any string in the complete work in time 
 * just proportional to length of the pattern. 
 * This is really a great improvement 
 * because length of pattern is generally much smaller than text.
 * 
 * Preprocessing of text may become costly if the text changes frequently.
 * It is good for fixed text or less frequently changing text though.
 * 
 * A Suffix Tree for a given text is a compressed trie 
 * for all suffixes of the given text.
 */
