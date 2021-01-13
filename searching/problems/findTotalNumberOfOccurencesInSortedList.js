// time -> O(logn + s) | space -> O(1) [where s is number of appearances]
const findTotalNumberOfOccurencesInSortedList = (input, left, right, data) => {
  if (left > right) return 0;
  const mid = Math.floor(left + (right - left) / 2);
  let count = 0;
  if (input[mid] === data) count = 1;
  return (
    count +
    findTotalNumberOfOccurencesInSortedList(input, left, mid - 1, data) +
    findTotalNumberOfOccurencesInSortedList(input, mid + 1, right, data)
  );
};

// time -> O(logn + logn) | space -> O(1)
const improvedVersion = (input, left, right, data) => {
    const firstOccurenceIndex = getFirstOccurenceIndex(input, left, right, data);
    const lastOccurenceIndex = getLastOccurenceIndex(input, left, right, data);
    console.log(firstOccurenceIndex, lastOccurenceIndex);
    return (lastOccurenceIndex ? lastOccurenceIndex : 0)  - (firstOccurenceIndex ? firstOccurenceIndex : 0) + 1;
}

const getFirstOccurenceIndex = (input, left, right, data) => {
    if(left > right) return null;
    const mid = Math.floor(left + (right - left) / 2);
    if((mid === 0 || input[mid - 1] < data) && input[mid] === data) return mid;

    if(input[mid] >= data) return getFirstOccurenceIndex(input, left, mid - 1, data);
    else return getFirstOccurenceIndex(input, mid + 1, right, data);
}

const getLastOccurenceIndex = (input, left, right, data) => {
    if(left > right) return null;
    const mid = Math.floor(left + (right - left) / 2);
    if((mid === input.length - 1 || input[mid + 1] > data) && input[mid] === data) return mid;
    
    if(input[mid] > data) return getLastOccurenceIndex(input, left, mid - 1, data);
    else  return getLastOccurenceIndex(input, mid + 1, right, data);
}
const input = [0, 1, 1, 2, 3, 3, 4, 5, 6, 6, 6, 7, 8];
console.log(
  findTotalNumberOfOccurencesInSortedList(input, 0, input.length - 1, 6)
);

console.log(
    improvedVersion(input, 0, input.length - 1, 6)
);
  