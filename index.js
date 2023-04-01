function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here

  The time complexity of the function is O(n^2) since it has nested loops. 
  It means that the function's performance may decrease as the input size grows. 
  An optimized solution would be to use a hash table to store the complement of each element in the array.
  It would reduce the time complexity to O(n). 
  However, since the problem doesn't specify any constraints, the current solution is sufficient.
  
  */

/* 
  Add your pseudocode here

##Create a function called "hasTargetSum" that takes an array and a target integer as arguments.
##Loop through the array, starting from the first element.
##Within the first loop, create a second loop starting from the second element.
##Within the second loop, check if the sum of the two elements is equal to the target integer.
##If the sum is equal to the target integer, return true.
##If no pair of elements sums up to the target integer, return false.

*/

/*
  Add written explanation of your solution here
*/

function hasTargetSum(arr, target) {
for (let i = 0; i < arr.length; i++) {
for (let j = i + 1; j < arr.length; j++) {
if (arr[i] + arr[j] === target) {
return true;
}
}
}
return false;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
