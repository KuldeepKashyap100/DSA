const getLastManAlive = (persons, startIndex,k) => {
    if(persons.length === 1) {
        return persons[0];
    }
    const toBeKilled = (startIndex + k-1) % persons.length;
    persons.splice(toBeKilled, 1);
    return getLastManAlive(persons, toBeKilled, k);
}

console.log(getLastManAlive(new Array(7).fill().map((_,i)=>++i), 0,3));