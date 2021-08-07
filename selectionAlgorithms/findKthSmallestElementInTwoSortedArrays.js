// time -> O(k) | space -> O(1)
const findKthSmallestElementInTwoSortedArrays = (a, b, k) => {
    let ele;
    let i = 0, j = 0;
    for(let count = 1; count <= k; count++) {
        if(a[i] < b[j]) {
            ele = a[i];
            i++;
        }
        else {
            ele = b[j];
            j++;
        }
    }
    console.log(ele);
}

// time -> O(logn + logm) | space -> O(1)
const efficientApproach = (a, b, aLeft, aRight, bLeft, bRight, k) => {
    if(aLeft === aRight) {
        console.log(b[k - 1]);
        return;
    }
    if(bLeft === bRight) {
        console.log(a[k - 1]);
        return;
    }

    const aMid = Math.floor((aLeft + aRight) / 2);
    const bMid = Math.floor((bLeft + bRight) / 2);

    if(aMid + bMid < k - 1) {
        if(a[aMid] > b[bMid]) {
            efficientApproach(a, b, aLeft, aRight, bMid, bRight, k);
        }
        else {
            efficientApproach(a, b, aMid, aRight, bLeft, bRight, k);
        }
    }
    else {
        if(a[aMid] > b[bMid]) {
            efficientApproach(a, b, aLeft, aMid, bLeft, bRight, k);
        }
        else {
            efficientApproach(a, b, aMid, aRight, bLeft, bMid, k);
        }
    }
}

// time -> O(logk) | space -> O(1)
const moreEfficientApproach = (a, b, aLeft, aRight, bLeft, bRight, k) => {
    if(aLeft === aRight) {
        console.log( b[bLeft + k - 1] );
        return;
    }
    if(bLeft === bRight) {
        console.log( a[aLeft + k - 1] );
        return;
    }

    if (k == 0 || k > (aRight - aLeft) + (bRight - bLeft)) {
        return -1;
    }

    if(k === 1) {
        return (a[aLeft] < b[bLeft])
        ? a[aLeft] : b[bLeft];
    }

    const currentK = Math.floor(k / 2);

    if(currentK - 1 >= aRight - aLeft) {
        if (a[a.length - 1] < b[bLeft + curr - 1]) {
            return b[bLeft + (k - (a.length - aLeft) - 1)];
        } 
        else {
            return moreEfficientApproach(a, b, aLeft, aRight, bLeft, bRight, k - curr);
        }
    }
}

let first = [1, 12, 15, 26, 38];
let second = [2, 13, 17, 30, 45];
// findKthSmallestElementInTwoSortedArrays(first, second, 2);
// efficientApproach(first, second, 0, first.length - 1, 0, second.length - 1, 3);
moreEfficientApproach(first, second, 0, first.length - 1, 0, second.length - 1, 3);
