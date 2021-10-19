const permutationWithSpaces = (input, output) => {
    if(input.length === 0) {
        console.log(output);
        return;
    }
    if(output.length > 0) {
        permutationWithSpaces(input.slice(1), output + "_" +  input[0]);
      }
    permutationWithSpaces(input.slice(1), output + input[0]);
}

let input = "ABC";
let output = "";
output+=input[0];
input = input.substr(1);

permutationWithSpaces(input, output);