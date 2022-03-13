// TODO - Code does not work. Should revisit this problem.
// Solutions - https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/
// Deque Explanation https://www.youtube.com/watch?v=xFJXtB5vSmM&list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&index=6 
const maxElementInSubArray = (arr, windowSize) => {
  if (arr.length < windowSize) return 0;

  let start = 0;
  let end = 0;
  let alternateMax = [];
  let maxElements = [];

  while (end < arr.length) {
    alternateMax.push(Math.max(arr[start], arr[end]));

    if (end - start + 1 < windowSize) {
      end++;
    } else if (end - start + 1 === windowSize) {
      maxElements.push(max);
      start++;
      end++;
    }
  }
  return maxElements;
};

const input = [2, -3, 4, 5, -6, 1, -10, 11, 6];
const windowSize = 3;

console.log(maxElementInSubArray(input, windowSize));
