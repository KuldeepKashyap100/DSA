/**
 * input range -> [1, n]
 * time -> O(n) | space -> O(1)
 */
const findElementReapatedTwice = (input) => {
	let xor = 0;
	for(let i = 0; i < input.length; i++) {
		xor ^= input[i];
	}

	const n = Math.ceil(input.length / 3);
	for(let i = 1; i <= n; i++) {
		xor ^= i;
	}

	console.log(xor);
}

const input = [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 4];
findElementReapatedTwice(input);