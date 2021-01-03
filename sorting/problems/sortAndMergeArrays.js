/**
 * first array size -> m + n, elements present -> m,
 * second array size -> n, elements present ->n
 * merge and sort these array.
 */


const sortAndMerge = (a, b) => {
    let i = a.length - b.length - 1;
    let j = b.length - 1;
    let insertPosition = a.length - 1;
    while(i >= 0 && j >= 0) {
        if(a[i] < b[j]) 
            a[insertPosition--] = b[j--];
        else
            a[insertPosition--] = a[i--];
    }
    while(i >= 0)  a[insertPosition--] = a[i--];
    while(j >= 0) a[insertPosition--] = b[j--];
}
const a = new Array(10);
const b = new Array(6);
for(let i = 0; i < 4; i++) a[i] = Math.floor(Math.random()*100);
a.sort((i,j) => i - j);
for(let i = 0; i < 6; i++) b[i] = Math.floor(Math.random()*100);
b.sort((i, j) => i - j);


sortAndMerge(a, b);

console.log(a);