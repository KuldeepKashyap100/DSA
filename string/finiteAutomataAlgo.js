/**
 * time to build transition function -> O(m * sigma) [sigma ->finite input alphabet]
 * time to feed the text to finite Automata -> O(n)
 * total time ->  O(m + n) if sigma is constant.
 * space -> O(m * sigma)
 **/

const getNextState = (pattern, state, alphabetCharater) => {
    if(state < pattern.length && pattern[state] === alphabetCharater) {
        return state + 1;
    }

    for(let nextState = state; nextState > 0; nextState--) {
        if(pattern[nextState - 1] === alphabetCharater) {
            for(let i = 0; i < nextState - 1; i++) {
                if(pattern[i] !== pattern[state - nextState + 1 + i]) {
                    break;
                }
                if(i === nextState - 1) {
                    return nextState;
                }
            }
        }
    }
    return 0;
}

const buildFiniteAutomata = (pattern, alphabets) => {
    const tansitionFunction = new Array(pattern.length + 1).fill().map(_ => new Array(alphabets.length));
    for(let state = 0; state <= pattern.length; state++) {
        for(let j = 0; j < alphabets.length; j++) {
            tansitionFunction[state][j] = getNextState(pattern, state, alphabets[j]);
        }
    }
    console.log(tansitionFunction);
}

buildFiniteAutomata("ababc","abc")