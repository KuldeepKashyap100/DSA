const sort = (inputArr) => {
    if(inputArr.length === 1)
        return;
    const lastElement = inputArr.pop();
    sort(inputArr);
    insert(inputArr, lastElement); // induction step if sort
}

const insert = (inputArr, element) => {
    if(inputArr.length === 0 || element >= inputArr[inputArr.length-1]) {
        inputArr.push(element);
        return;
    }
    const lastElement = inputArr.pop();
    insert(inputArr, element);
    inputArr.push(lastElement); // induction step of insert
}

// without modifying array
// const sort = (array, n) => {
//     if(n === 1) return;
//     const lastElement = array[n - 1];
//     sort(array, n - 1);
//     insert(array, n - 1, lastElement);
// }

// const insert = (array, n, element) => {
//     if(n === 0 || element >= array[n - 1]) {
//         array[n] = element;
//         return;
//     }

//     const lastElement = array[n - 1];
//     insert(array, n - 1, element);
//     array[n - 1] = lastElement;
// }

let array = [5,2,3,8,1,4];
sort(array);
console.log(array);