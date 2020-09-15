function towerOfHanoi(n, fromPeg, toPeg, auxPeg) {
    if(n===1) {
        console.log(`${fromPeg} to ${toPeg}`);
        return;
    }
    towerOfHanoi(n-1, fromPeg, auxPeg, toPeg);
    console.log(`${fromPeg} to ${toPeg}`);
    towerOfHanoi(n-1, auxPeg, toPeg, fromPeg);
}

towerOfHanoi(2, 'a', 'c', 'b');