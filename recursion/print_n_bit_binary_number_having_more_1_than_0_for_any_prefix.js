const generateBinaryString = (ones, zeros, n, output) => {
    if(n===0) {
        console.log(output);
        return;
    }

    const firstChoice = output + "1";
    generateBinaryString(ones+1, zeros, n-1, firstChoice);

    if(ones > zeros) {
        const secondChoice = output + "0";
        generateBinaryString(ones, zeros+1, n-1, secondChoice);
    }
}

n=3;
generateBinaryString(0, 0, n, "");