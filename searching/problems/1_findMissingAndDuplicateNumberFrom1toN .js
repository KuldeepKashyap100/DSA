
const findUsingExtraSpace = (arr) => {
    const map = {};
    for(const item of arr) {
        if(!map[item]) map[item] = 1;
        else map[item]++;
    }

    for(let i = 1; i <= arr.length; i++) {
        if(map[i] > 1) console.log("Duplicate number: "+ i);
        if(!map[i]) console.log("Missing number: "+ i);
    }
}

const findOptimisedSpace = (arr) => {
    // to find two variables we need 2 equations
    const n = arr.length;
    const expectedSum = n * (n + 1) / 2;
    const actualSum = arr.reduce((acc, val) => acc + val, 0);

    // missing - duplicate = c1
    // (missing^2 - duplicate^2) = c2
    // (missing^2 - duplicate^2) / (missing - duplicate) = c2 / c1
    // (missing + duplicate) = c1 / c2

    const c1 =  Math.abs(expectedSum - actualSum);
    const c2 = arr.reduce((acc, item) => acc + Math.pow(item, 2), 0) - 
                Array(arr.length).fill(0).reduce((acc, item, index) => acc + Math.pow(index + 1, 2), 0);

    const sumOfVariables = c2 /c1;
    const differnceOfVariables = c1;

    const duplicate = (sumOfVariables + differnceOfVariables) / 2;
    const missing = (sumOfVariables - differnceOfVariables) / 2;

    console.log("Duplicate number: "+ duplicate);
    console.log("Missing number: "+ missing);

}

// https://www.youtube.com/watch?v=uo4kuV3pWfE&list=PL_z_8CaSLPWdJfdZHiNYYM46tYQUjbBJx&index=3
// this method can find the multiple duplicates and missing numbers
// time -> O(n) resason -> https://www.youtube.com/watch?v=Eo6N15ezLEU&list=PL_z_8CaSLPWdJfdZHiNYYM46tYQUjbBJx&index=6
const swapAndSortAlgo = (arr) => {
    // we know in expected sorted list element present
    // at index i is i + 1, if it is not i + 1 then current element at 
    // i is duplicate element and missing element is i + 1

    let i = 0;
    while(i < arr.length) {
        const currentItem = arr[i];
        // if the element stored at current index is not correct element
        if(arr[i] !== i + 1) {
            // if we found duplicate element
            if(currentItem === arr[currentItem - 1]) {
                console.log("Duplicate number: "+ currentItem);
                console.log("Missing number: "+ (i + 1));
                i++;
                continue;
            }
            // swap until correct location is found
            [arr[i], arr[currentItem - 1]] = [arr[currentItem - 1], arr[i]];
        }
        else {
            i++;
        }
    }

}

const array = [5, 3, 3, 4, 1];
// findUsingExtraSpace(array);
// findOptimisedSpace(array);
swapAndSortAlgo(array)