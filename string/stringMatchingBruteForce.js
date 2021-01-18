const match = (text, pattern) => {
    for(let i = 0; i <=text.length - pattern.length; i++) {
        let j = 0;
        while(j < pattern.length && text[i + j] === pattern[j])
        j++;
        if(pattern.length === j) {
            console.log("found");
            return;
        }
    }
    console.log("not found");
}

match("aabc", "abc");