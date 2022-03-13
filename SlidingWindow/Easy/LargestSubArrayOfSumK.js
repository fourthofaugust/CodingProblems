// TODO: This only works for inputs with positive integers and some negative integers (at times). 
// Need to enhance it to work for inputs with negative integers as well.

const largestSubArrayOfSumK = (arr, targetSum) => {
  let currentSum = 0;
  let start = 0;
  let end = 0;
  let windowArray = [];
  let largetSubArray = [];

  while (end < arr.length) {
    currentSum += arr[end];
    windowArray.push(arr[end]);
    if (currentSum < targetSum) {
      end++;
    } else {
      if (currentSum === targetSum) {
        largetSubArray =
          largetSubArray.length > windowArray.length
            ? largetSubArray
            : windowArray;
      }
      largetSubArray = windowArray;
      windowArray = windowArray.slice(1);
      currentSum -= arr[start];
      start++;
      end++;
    }
  }
  return largetSubArray.length;
};

const input = [10, 5, 2, 7, 1, 9];
// const input = [-13,0, 6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6];
const sum = 15;

console.log(
  `Length of largest sub array of sum ${sum} is ${largestSubArrayOfSumK(
    input,
    sum
  )}`
);
