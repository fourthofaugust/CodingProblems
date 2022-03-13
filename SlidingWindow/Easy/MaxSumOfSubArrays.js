const maxSum = (arr, windowSize) => { 

	if(arr.length < windowSize) return 0;

	let start = 0;
	let end = 0;
	let max = 0;
	let sum = 0;

	while (end < arr.length) {
		console.log(`start: ${start}, end: ${end}`);
		sum += arr[end];
		console.log(`sum: ${sum}`);
		if((end - start + 1) < windowSize) {
			end++
		} else if ((end - start + 1) === windowSize) {
			max = Math.max(max, sum);
			sum -= arr[start];
			start++;
			end++;
		}
	}	
	return max;
};

const input = [2, 5, 8, 2, 9, 1];
const windowSize = 3;
const length = input.length;

console.log(maxSum(input, windowSize));

