
const printInterleavingsWrapper = (a, b) => {
    printInterleavings(a, b, "", a.length, b.length);
}

function printInterleavings(a, b, output,levelA, levelB) {
    console.log(output);
    if(levelA === 0 && levelB === 0) {
        console.log(output);
        return;
    }
    if(levelA !== 0) {
        printInterleavings(a.slice(1), b, output + a[0], levelA - 1, levelB);
    }
    if(levelB !== 0) {
        printInterleavings(a, b.slice(1), output + b[0], levelA, levelB - 1);
    }
}

printInterleavingsWrapper("algoexpert", "your-dream-job");