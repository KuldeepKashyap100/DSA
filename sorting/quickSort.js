/**
 * time -> 
 * Average case -> O(nlogn) i.e when list is partitioned into 2 equal parts every time.
 * worst case -> O(n^2) i.e when list is sorted and first element is selected pivot every time. then skew tree will be formed.
 */

const quickSort = (input, left, right) => {
    if(left >= right)
        return;
    const pivot = partition(input, left, right);
    quickSort(input, left, pivot - 1);
    quickSort(input, pivot + 1, right);
}

const partition = (input, left, right) => {
    const pivot = input[left];
    const pivotPosition = left;
    while(left < right) {
        while(input[left] <= pivot)
            left++;
        while(input[right] > pivot)
            right--;
        if(left < right)
            [input[left], input[right]] = [input[right], input[left]];
    }
    [input[pivotPosition], input[right]] = [input[right], input[pivotPosition]];
    return right;
}x

// const input = [10, 16, 8, 12, 15, 6, 3, 9, 5];
const input = [1, 2, 3, 4, 5, 6, 7, 8];

quickSort(input, 0, input.length - 1);

console.log(input);