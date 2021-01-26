// time -> O(n * l) where l is the length of longest word | space -> O(n)
const reverseSentence = (sentence) => {
    let reverse = "";
    for(let i = sentence.length - 1; i >= 0; ) {
        let start = i, end = i + 1;
        // slice a word
        while(sentence[start] !== " " && start >=0) {
            start--;
        }
        i = start - 1;
        start++;
        // add it to reversed string
        while(start !== end) {
            reverse += sentence[start];
            start++;
        }
        reverse += " ";
    }
    console.log(reverse);
}

// alternate appraoach
// first reverse words and then reverse entire string || reverse is also true
const alternateApprach = (sentence) => {
    let start = 0;
    // reverse words
    for(let end = 0; end < sentence.length; end++) {
        if(sentence[end] === " ") {
            reverse(sentence, start, end - 1);
            start = end + 1;
        }
        else if(end === sentence.length - 1) {
            reverse(sentence, start, end);
        }
    }

    console.log(sentence.join(""));

    // reverse sentence
    start = 0;
    let end = sentence.length
    while(start < end) {
        [sentence[start], sentence[end]] = [sentence[end], sentence[start]];
        start++;
        end--;
    }
    console.log(sentence.join(""));
}

function reverse(sentence, start, end) {
    while(start < end) {
        [sentence[start], sentence[end]] = [sentence[end], sentence[start]];
        start++;
        end--;
    }
}

let sentence = "this is a career monk string";
// reverseSentence(sentence);
alternateApprach(sentence.split(""));