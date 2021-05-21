const findNextAlphabet = (arr, alpha) => {
    let start = 0, end = arr.length - 1, nextAlphabet = -1;
    while(start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        const alphaCharCode = alpha.charCodeAt(0);
        const midCharCode = arr[mid].charCodeAt(0);
        if(midCharCode > alphaCharCode) {
            nextAlphabet = arr[mid];
            end = mid - 1; 
        }
        else if(midCharCode <= alphaCharCode) {
            start = mid + 1;
        }
    }
    console.log(nextAlphabet);
}

const arr = ["a", "c", "f", "g"];
findNextAlphabet(arr, "f");