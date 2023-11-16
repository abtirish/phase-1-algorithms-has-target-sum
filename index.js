function hasTargetSum(array, target) {
  let foundSum = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j];
      if (sum === target) {
        foundSum = true;
        break;
      } 
    }
    if (foundSum) {
      break;
    }
    }
    return foundSum;
  }

/* 
  Write the Big O time complexity of your function here
*/
// This would be linear time O(n). Not bad but not great. If there was a way to turn the indexes into values and do a simple addition and comparision, this could cut down on the complexity of the function to constant time (or logarithmic).

/* 
  Add your pseudocode here
*/
// Create a function that takes in two arguments, and array and an integer. 
// Need to iterate through each index of the array, adding two indexes together at a time
// Each time that addition happens, compare this to the target value to see if they are equal. 
// If the target value is equal to the sumation value, return true, otherwise return false and continue to iterate through
// If the entire array has been evaluated and no two numbers equal the value of the target, return false.


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logsss
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
