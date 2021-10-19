function generateBinaryStrings(n, output) {
    if(n === 0) {
      console.log(output);
      return;
    }
    generateBinaryStrings(n - 1, output + "0");
    generateBinaryStrings(n - 1, output + "1");
    
}
  
generateBinaryStrings(2, "");  