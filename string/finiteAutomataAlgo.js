/**
 * https://www.geeksforgeeks.org/finite-automata-algorithm-for-pattern-searching/
 * time to build transition function -> O(m * sigma) [sigma ->finite input alphabet]
 * time to feed the text to finite Automata -> O(n)
 * total time ->  O(m + n) if sigma is constant.
 * space -> O(m * sigma)
 **/

const getNextState = (pattern, state, alphabetCharater) => {
    if(state < pattern.length && pattern[state] === alphabetCharater) {
        return state + 1;
    }

    let i;
    for(let nextState = state; nextState > 0; nextState--) {
        if(pattern[nextState - 1] === alphabetCharater) {
            for(i = 0; i < nextState - 1; i++) {
                if(pattern[i] !== pattern[state - nextState + 1 + i]) {
                    break;
                }
            }
            if(i === nextState - 1) {
                return nextState;
            }
        }
    }
    return 0;
}

const buildFiniteAutomata = (pattern, alphabets) => {
    const tansitionFunction = new Array(pattern.length + 1).fill().map(_ => new Array(alphabets.length));
    for(let state = 0; state <= pattern.length; ++state) {
        for(let j = 0; j < alphabets.length; ++j) {
            tansitionFunction[state][j] = getNextState(pattern, state, alphabets[j]);
        }
    }
    console.log(tansitionFunction);
    return tansitionFunction;
}

const search = (text, pattern, alphabets) => {
    const automata = buildFiniteAutomata(pattern, alphabets);
    let state = 0;
    for(let i = 0; i < text.length; i++) {
        state = automata[state][alphabets.indexOf(text[i])];
        if(state === pattern.length) {
            console.log("found at " + i + " index");
        }
    }
}
search("ababaababc", "aba", ["a", "b", "c"]);