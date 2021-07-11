// time -> O(n^2) | space -> O(1)
const findTwoRepeatingElementsPolynomial = (input) => {
    for(let  i = 0; i < input.length; i++) {
        for(let j = i + 1; j < input.length; j++) {
            if(input[i] === input[j]) {
                console.log(input[i]);
                continue;
            }
        }
    }
}

// time -> O(nlogn) | space -> O(1)
const findTwoRepeatingElementsLinearLograthmic = (input) => {
    input.sort((a, b) => a - b);
    for(let i = 1; i < input.length; i++) {
        if(input[i] === input[i - 1]) {
            console.log(input[i]);
            continue;
        }
    }
}

// time -> O(n) | space -> O(n)
const findDuplicateElementsLinear = (input) => {
    const hashMap = new Map();
    for(let i = 0; i < input.length; i++) {
        if(hashMap.has(input[i])) {
            console.log(input[i]);
        }
        hashMap.set(input[i], 1);
    }
}

// time -> O(n) | space -> O(1) not sure about it if it gives correct answer every time.
const findDuplicateElementsLinearImprovedSpace = (input) => {
    for(let i = 0; i < input.length; i++) {
        if(input[Math.abs(input[i])] < 0) 
            console.log(Math.abs(input[i]));
        input[Math.abs(input[i])] = -input[Math.abs(input[i])]
    }
}


/**
 * Found Two great articles:-
 * https://www.geeksforgeeks.org/why-are-negative-numbers-stored-as-2s-complement/
 * https://www.geeksforgeeks.org/find-the-two-repeating-elements-in-a-given-array/
 * https://www.geeksforgeeks.org/find-two-non-repeating-elements-in-an-array-of-repeating-elements/
 * https://algorithms.tutorialhorizon.com/find-the-right-most-set-bit-of-a-number/
 * Using XOR approach, if the input elements are in the range [1, n], 
 * where length of input is 'size' and size = n + 2
 * time -> O(n) | space -> O(1)
 */

const findDuplicateElementsXor = (input) => {
    let n = input.length - 2;
    let xor = 0;

    // after this xor will have all the elements except dulicate elements
    for(let i = 0; i < input.length; i++) {
        xor ^= input[i];
    }

    // after this xor will have only dulpicate elements
    for(let i = 1; i <= n; i++) {
        xor ^= i;
    }

    /**
     * All the bits that are set in xor will be set by either x or y but not both.
     * So if we take any set bit of xor and divide the elements of the array in two sets 
     * – one set of elements with same bit set and another set with same bit not set. 
     * By doing so, we will get x in one set and y in another set. 
     * 
     * how ~ works?
     * Most (all?) modern architectures use two's complement to represent signed integers(-ve numbers).
     * The bitwise NOT is thus the complement of the integer plus one.
     * so 0000001(1 decimal) [where (000000 unassigned bits)] -> 0000001 + 1 -> 0000010 -> 
     * [2's complement] -> 1111110 [where (11111 unassigned bits inverted)]
     * 
     * 
     * -ve numbers are stored as 2's complement
     * 53 --> 00110101
     * -53--> 11001010 + 1 = 11001011
     * 
     * 
     * If N is a number then the expression below will give the right most set bit.
     * 
     * Let’s dig little deep to see how this expression will work.
     * We know that N & ~N = 0
     * If we subtract 1 from the number, it will be subtracted from the right most set bit and that bit will be become 0.
     * So if we negate the remaining number from step above then that bit will become 1.
     * Now N & ~(N-1) will make all the bits 0 but the right most set bit of a number.   
     *  
     * ex-
     * Say N =10, so N = 1 0 1 0,
     * N – 1 = 1 0 1 0 – 0 0 0 1 = 1 0 0 1
     * ~(N-1) = 0 1 1 0
     * N & ~(N-1) = 0 0 1 0 => 2nd bit
     * */
    const rightMostSetBit = xor & ~(xor - 1);
    let x = 0, y = 0;
    
    for(let i = 0; i < input.length; i++) {
        const checkRightMostBit = input[i] & rightMostSetBit;
        if(checkRightMostBit !== 0) x = x ^ input[i];
        else y = y ^ input[i];
    }

    for(let i = 1; i <=n; i++) {
        const checkRightMostBit = i & rightMostSetBit;
        if(checkRightMostBit !== 0) x = x ^ i;
        else y = y ^ i;
    }
    console.log(x, y);
}

/**
 * Method 3 (Make two equations)
 * Let the numbers which are being repeated are X and Y. 
 * We make two equations for X and Y and the simple task left is to solve the two equations.
 * We know the sum of integers from 1 to n is n(n+1)/2 and product is n!. 
 * We calculate the sum of input array, when this sum is subtracted from n(n+1)/2, 
 * we get X + Y because X and Y are the two numbers missing from set [1..n]. 
 * Similarly calculate product of input array, when this product is divided from n!, 
 * we get X*Y. Given sum and product of X and Y, we can find easily out X and Y.
 * Let summation of all numbers in array be S and product be P
 * X + Y = S – n(n+1)/2
 * XY = P/n!
 * 
 * Will work only if the input elements are in the range [1, n], 
 * where length of input is 'size' and size = n + 2
 * time -> O(n) | space -> O(1)
 */

const findDuplicateElemetsUsingEquations = (input) => {
    const n = input.length - 2;
    let sumOfTwoNumbers = 0, productOfTwoNumbers = 0;

    for(let i = 0; i < input.length; i++) {
        sumOfTwoNumbers += input[i];
        productOfTwoNumbers *= input[i];
    }

    for(let i = 1; i <= n; i++) {
        sumOfTwoNumbers += i;
        productOfTwoNumbers *= i;
    }
    
    const subtrationOfTwoNumbers = Math.sqrt( Math.pow(sumOfTwoNumbers, 2) - 4 * productOfTwoNumbers);

    const x = (sumOfTwoNumbers + subtrationOfTwoNumbers) / 2;
    const y = (sumOfTwoNumbers - subtrationOfTwoNumbers) / 2;
    console.log(x, y);
}

let input = [4, 2, 4, 5, 2, 3, 1];
// findTwoRepeatingElementsPolynomial(input);
// findTwoRepeatingElementsLinearLograthmic(input);
// input = [4, 2, 4, 5, 2, 3, 1];
// findDuplicateElementsLinear(input);
// findDuplicateElementsLinearImprovedSpace(input);
findDuplicateElementsXor(input);
