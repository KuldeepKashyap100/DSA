/**
 * check if element exists more than n/2 times.
 * 
 * If a element exists more than n/2 times then middle must be majority element.
 * time -> O(n) | space -> O(1)
 */
const checkMajorityExists = (input) => { 
    const median = input[Math.floor((0 + input.length) / 2)];
    let count = 0;
    for(let i = 0; i < input.length; i++) {
        if(input[i] === median) {
            count++;
        }
    }
    Math.floor(input.length / 2) < count ? console.log(count) : console.log(false); 
}

// alternate way
// time -> O(n) | space -> O(1)
const checkMajorityExistsAlternate = (input) => {
    let count = 0, element;
    for(let i = 0; i < input.length; i++) {
        if(count === 0) {
            element = input[i];
            count++;
        }
        else if (input[i] === element) {
            count++;
        }
        else {
            count--;
        }
    }
    console.log(element, count++);
}

const input = [3, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4];
checkMajorityExists(input);
checkMajorityExistsAlternate(input);