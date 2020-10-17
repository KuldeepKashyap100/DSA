const sort = (inputArr, endIndex) => {
    if(inputArr.length === 0)
        return;
    const lastElement = inputArr.pop();
    sort(inputArr, endIndex-1);
    insert(inputArr, lastElement); // induction step if sort
}

const insert = (inputArr, element) => {
    if(inputArr.length === 0 || element>= inputArr[inputArr.length-1]) {
        inputArr.push(element);
        return;
    }
    const lastElement = inputArr.pop();
    insert(inputArr, element);
    inputArr.push(lastElement); // induction step of insert
}

let array = [5,2,3,8,1,4];
sort(array, array.length-1);
console.log(array);