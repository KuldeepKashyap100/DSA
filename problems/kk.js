var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
    getFourthWord(input);
  rl.close();
});

console.log("Enter Sentence: ")
const getFourthWord = (inputString) => {
    const wordArray = [];
    let word = "";
    for(let i=0; i<inputString.length;i++) {
        if(inputString[i] === " ") {
            if(inputString[i-1] === " ")
                throw new Error("Invalid Sentence");
            else {
                wordArray.push(word);
                word = "";
            }
        }

        else
            word+=inputString[i]
    }
    console.log(wordArray[3]);
}
