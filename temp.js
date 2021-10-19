// const { promisify } = require('util');
// const https = require('https');
// const cb = () => console.log(data);
// let getData = (cb) => https.get("https://ghoapi.azureedge.net/api/DIMENSION/COUNTRY/DimensionValues", (res)=> {
//     let data = "";
//     res.on("data", (d) => data+=d);
//     res.on("end", () => cb(null, data));
// });

// // let promiseGetData = () => {
// //     return new Promise((resolve, reject) => {
// //         getData(res => {
// //             resolve(res);
// //         });
// //     })
// // };

// promiseGetData = promisify(getData);

// promiseGetData().then((data) => {
//     console.log("Got data successfully", data);
// })
// .catch((err) => {
//     console.error(err)
// });



// const array1 = [{name: "foo"}, {name: "bar"}, {name: "baaz"}];
// const array2 = new Array(array1.length).fill({});
// array2.forEach((obj, idx) => {
//     obj.name = array1[idx].name;
//     obj.position = idx;
//     console.log(obj);
// });

// console.log(array1);
// console.log(array2[0] === array2[1]);



// const data = {
//     person: {
//         name: {
//             firstName: "Kuldeep"
//         }
//     }
// }

// const {person: {name: {firstName}}} = data;
// console.log(firstName);


// // any one satisfies the condition
// const checkFooBool = array1.some((obj) => obj.name === "foo");

// readmeGenerator = {};
// readmeGenerator.init = () => {
//     this.kk = "ll";
// }

// readmeGenerator.printProperties = () => {
//     console.log(this.kk);
// }
// readmeGenerator.init();
// readmeGenerator.printProperties();


// class MaxHeap {
//     constructor(array = []) {
//         this.array = array;
//         this.length = this.array.length;
//     }
//     getParentIdx(childIdx) {
//         if(childIdx <= 0 || childIdx >= this.length) return -1;
//         return Math.floor((childIdx - 1) / 2);
//     }
//     getLeftChildIdx(parentIdx) {
//         const childIdx = 2 * parentIdx + 1;
//         if(childIdx > this.length - 1) return -1;
//         return childIdx; 
//     }
//     getRightChildIdx(parentIdx) {
//         const childIdx= 2 * parentIdx + 2;
//         if(childIdx > this.length - 1) return -1;
//         return childIdx;
//     }
//     insert(data) {
//         this.length++;
        
//         let insertIndex = this.length - 1;
//         while(insertIndex >=0 && this.array[this.getParentIdx(insertIndex)] < data) {
//             this.array[insertIndex] = this.array[this.getParentIdx(insertIndex)];
//             insertIndex = this.getParentIdx(insertIndex);
//         }
//         this.array[insertIndex] = data;
//     }
//     delete() {
//         const elementtToDelete = this.array[0];
//         this.array[0] = this.array[this.length - 1];
//         this.length--;
//         this.percolateDown(0);
//         return elementtToDelete;
//     }
//     percolateDown(parentIdx) {
//         const leftChildIdx = this.getLeftChildIdx(parentIdx);
//         const rightChildIdx = this.getRightChildIdx(parentIdx);

//         let maxIdx = parentIdx;
//         if(this.array[maxIdx] < this.array[leftChildIdx]) {
//             maxIdx = leftChildIdx;
//         }
//         if(this.array[maxIdx] < this.array[rightChildIdx]) {
//             maxIdx = rightChildIdx;
//         }

//         if(maxIdx !== parentIdx) {
//             [this.array[maxIdx], this.array[parentIdx]] = [this.array[parentIdx], this.array[maxIdx]];
//             this.percolateDown(maxIdx);
//         }
//     }
//     display() {
//         console.log(this.array.slice(0, this.length));
//     }
//     buildHeap() {
//         for(let i = this.length - 1; i >= 0; i--) {
//             this.percolateDown(i);
//         }
//     }
//     heapSort() {
//         this.buildHeap();
//         for(let i = this.length - 1; i >= 0; i--) {
//             [this.array[0], this.array[i]] = [this.array[i], this.array[0]];
//             this.length--;
//             this.percolateDown(0);
//         }
//         this.length = this.array.length;
//     }
// }

// const maxHeap = new MaxHeap([24, 4, 35, 6, -66, 3]);
// // maxHeap.insert(2);
// // maxHeap.insert(4);
// // maxHeap.insert(3);
// // maxHeap.insert(6);
// maxHeap.heapSort();
// // maxHeap.buildHeap();

// maxHeap.display();



// function perfectSubstring(s, k) {
//     let left = 0, right = 0, map = {}, substrCount = 0;
//     while(right < s.length) {
//         const currentChar = s[right];
//         map[currentChar] = map[currentChar] ? ++map[currentChar] : 1;
//         if(map[currentChar] > k) {
//             while(map[currentChar] > k) {
//                 const deleteChar = s[left];
//                 map[deleteChar]--;
//                 left++;
//             }
//         }

//         substrCount =  checkString(map, substrCount, k);
//         right++;
//     }
//     while(left < right) {
//         const currentChar = s[left];
//         map[currentChar] = map[currentChar] ? --map[currentChar] : 1;
//         substrCount =  checkString(map, substrCount, k);
//         left++;
//     }
//     console.log(substrCount);
// }

// function checkString(map, substrCount, k) {
//     let found = true;
//     for(let charCount in map) {
//         if(map[charCount] !== k) {
//             found =false;
//             break;
//         }
//     }

//     if(found) {
//         substrCount++;
//     }
//     return substrCount;
// }

// function perfectSubstring(s, k) {
//     let map = {}, substrCount = 0;
//     for(let i = 0; i < s.length; i++) {
//         const substr = s.slice(0, i + 1);
//         const map = {};
//         for(let j = 0; j < substr.length; j++) {
//             const currentChar = substr[j];
//             map[currentChar] = map[currentChar] ? ++map[currentChar] : 1;
//         }
//         substrCount = checkString(map, substrCount, k);
//     }
//     let left = 0, right = s.length;
//     while(left < right) {
//         const substr = s.slice(left, right);
//         const map = {};
//         for(let j = 0; j < substr.length; j++) {
//             const currentChar = substr[j];
//             map[currentChar] = map[currentChar] ? ++map[currentChar] : 1;
//         }
//         substrCount = checkString(map, substrCount, k);
//         left++;
//     }
//     console.log(substrCount);
// }


// function checkString(map, substrCount, k) {
//     let found = true;
//     for(let charCount in map) {
//         if(map[charCount] !== k) {
//             found =false;
//             break;
//         }
//     }

//     if(found) {
//         console.log(map)
//         substrCount++;
//     }
//     return substrCount;
// }

// perfectSubstring("1102021222", 2);

// const setIntervalList = [];

// const setIntervalPolyFill = (callback, delay) => {
// 	const stopFlag = { stop: false };
//     startLoop(callback, delay, stopFlag);
// 	setIntervalList.push(stopFlag);
// 	return setIntervalList.length - 1;
// };

// const startLoop = (callback, delay, stopFlag) => {
//     if(stopFlag.stop) return;
//     setTimeout(() => {
//         callback();
//         startLoop(callback, delay, stopFlag);
//     }, delay);
// }

// clearIntervalPolyFill = (intervalIdx) => {
//     const interval = setIntervalList.splice(intervalIdx, 1)[0];
//     interval.stop = true;
// }

// let count = 0;
// const idx = setIntervalPolyFill(()=> {
//     console.log(count++)
// }, 1000);

// setTimeout(() => clearIntervalPolyFill(idx), 10000);
