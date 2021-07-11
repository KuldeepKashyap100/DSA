/**
 * You're given a list of time intervals during which students at a school need a laptop.
 * These time intervals are represented by pairs of integers [start, end], 
 * where 0 <= start < end. However, start and end don't represent real times; 
 * therefore, they may be greater than 24.
 * 
 * No two students can use a laptop at the same time, 
 * but immediately after a student is done using a laptop, 
 * another student can use that same laptop. For example, 
 * if one student rents a laptop during the time interval [0, 2], 
 * another student can rent the same laptop during any time interval starting with 2.
 * 
 * Write a function that returns the minimum number of laptops 
 * that the school needs to rent such that all students will always have access 
 * to a laptop when they need one.
 * ex - times = 
    [
        [0, 2],
        [1, 4],
        [4, 6],
        [0, 4],
        [7, 8],
        [9, 11],
        [3, 10],
    ]
    Sample Output
    3
 */

// brute force time -> O(n^2) | space -> O(n)
function laptopRentals(times) {
	let numberOfLaptops = 0, k = [...times];
	times = times.sort((a,b) => a[0] - b[0]);
	for(let i = 0; i < times.length; i++) {
		if(!times[i]) continue;
		for(let j = i + 1; j < times.length; j++) {
			if(!times[j]) continue;
			if(times[j][0] >= times[i][1]) {
				times[j][0] = Math.min(times[i][0], times[j][0]);
				times[j][1] = Math.max(times[i][1], times[j][1]); 
				times[i] = null;
				break;
			}
		}
	}
	for(let i = 0; i < times.length; i++) {
		if(times[i]) numberOfLaptops++;
	}
  return numberOfLaptops;
}

// using heap time -> O(nlogn) | space -> O(n)
function laptopRentals(times) {
	if(times.length === 0) return 0;
	let numberOfLaptops = 0;
	// sort intervals
	times = times.sort((a,b) => a[0]-b[0]);
	const minHeap = new MinHeap();
	minHeap.insert(times[0]);
	for(let i = 1; i < times.length; i++) {
		const currentInterval = times[i];
		if(minHeap.peek()[1] <= currentInterval[0]) {
			minHeap.delete();
		}
		minHeap.insert(currentInterval);
	}
	
	
  return minHeap.length;
}

class MinHeap {
	constructor() {
		this.array = [];
		this.length = 0;
	}
	peek() {
		return this.array[0];
	}
	getParentIdx(childIdx) {
		if(childIdx <= 0 || childIdx >= this.length) return -1;
		return Math.floor((childIdx - 1)/2);
	}
	insert(interval) {
		this.length++;
		let insertIdx = this.length - 1;
		let parentIdx = this.getParentIdx(insertIdx);
		while(insertIdx >= 0 && parentIdx >=0 && this.array[parentIdx][1] > interval[1]) {
			this.array[insertIdx] = this.array[parentIdx];
			insertIdx = parentIdx;
			parentIdx = this.getParentIdx(insertIdx);
		}
		this.array[insertIdx] = interval;
	}
	getLeftChildIdx(parentIdx) {
		const childIdx = 2 * parentIdx + 1;
		if(childIdx >= this.length) return -1;
		return childIdx;
	}
	getRightChildIdx(parentIdx) {
		const childIdx = 2 * parentIdx + 2;
		if(childIdx >= this.length) return -1;
		return childIdx;
	}
	siftDown(parentIdx) {
		const leftChildIdx = this.getLeftChildIdx(parentIdx);
		const rightChildIdx = this.getRightChildIdx(parentIdx);
		
		let minIdx = parentIdx;
		if(leftChildIdx >= 0 && this.array[minIdx][1] > this.array[leftChildIdx][1])
			minIdx = leftChildIdx;
		if(rightChildIdx >= 0 && this.array[minIdx][1] > this.array[rightChildIdx][1])
			minIdx = rightChildIdx;
		if(parentIdx !== minIdx) {
			[this.array[minIdx], this.array[parentIdx]] = [this.array[parentIdx], this.array[minIdx]];
			this.siftDown(minIdx);
		}
	}
	display() {
		console.log(this.array.slice(0, this.length));
	}
	delete() {
		const elementDeleted = this.array[0];
		this.array[0] = this.array[this.length - 1];
		this.length--;
		this.siftDown(0);
		return elementDeleted;
	}
}

// two pointer approach time -> O(nlogn) | space -> O(n)
function laptopRentals(times) {
	const startTimeList = times.map(_ => _[0]).sort((a, b) => a - b);
	const endTimeList = times.map(_ => _[1]).sort((a, b) => a - b);
	let i = 0, j = 0, laptopCount = 0;
	while(i < times.length) {
		if(startTimeList[i] < endTimeList[j]) {
			i++;
			laptopCount++;
		}
		else {
			i++;
			j++;
		}
	}
  return laptopCount;
}
