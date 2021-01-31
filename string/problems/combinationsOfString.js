const combinationsOfString = (str, left, output) => {
    for(let i = left; i < str.length; i++) {
        output += str[i];
        console.log(output);
        if(i < str.length - 1) {
            combinationsOfString(str, i + 1, output);
        }
        output = output.substring(0, output.length - 1);
    }
}

combinationsOfString("abc", 0, "");