/**
 * Bucket sort is mainly useful when input is uniformly distributed over a range.
 * time ->
 * worst case -> O(N^2)
 * average -> O(n + k)
 * https://www.youtube.com/watch?v=VuXbEb5ywrU
 */

// generalized counting sort (mentioned in narsimha karumanshi) I don't think it is bucket sort :)
const bucketSortGeneralizedCountingSort = (input, k) => {
    const buckets = [];
    for(let i = 0; i < k; i++) {
        buckets[i] = 0;
    }

    for(let i = 0; i < input.length; i++) {
        buckets[input[i]]++;
    }

    let index = 0;
    for(let j = 0; j < buckets.length; j++) {
        for(let k = buckets[j]; k > 0; k--) {
            input[index++] = j;
        }
    }
}

// if max element is below 100 (found it on wiki)
const bucketSort = (input) => {
    const maxElement = Math.max(...input);
    const buckets = new Array(Math.ceil(maxElement / 10)).fill().map(_ => []);

    // Put array elements in different buckets 
    for(let i = 0; i < input.length; i++) {
        const bucketIdx = Math.floor(input[i] / 10);
        buckets[bucketIdx].push(input[i]); 
    }

    // Sort individual buckets 
    for(let i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);
    }

    // Concatenate all buckets into input[]
    let index = 0;
    for(let i = 0; i < buckets.length; i++) {
        for(let j = 0; j < buckets[i].length; j++) {
            input[index++] = buckets[i][j];
        }
    }
}

const insertionSort = (input) => {
    for(let i = 1; i < input.length; i++) {
        let j = i - 1;
        const temp = input[i];
        while(temp < input[j] && j>=0) {
            input[j + 1] =  input[j];
            j--;
        }
        input[j + 1] = temp;
    }
}


const input = [10, 16, 8, 12, 15, 6, 3, 9, 5, 56, 32, 43, 38, 47];
// bucketSort(input, Math.max(...input) + 1);
bucketSort(input);


console.log(input);