
//nested array within an array teams
const teams = [["Bulls", 23], ["White Sox", 45]];


//console log will display each number in order
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

//which number is bigger
function getLargest(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Example 
console.log(getLargest(10, 25)); // Output: 25


//this function compares value and type for value only use ==
function compareValues(val1, val2) {
  if (val1 === val2) {
    return "The values are equal.";
  } else {
    return "The values are different.";
  }
}

// Test cases

console.log(compareValues(5, 5));       // Output: The values are equal.


console.log(compareValues(5, "5"));     // Output: The values are different