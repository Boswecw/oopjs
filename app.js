// Sum All Numbers number 1

// function sumAll(arr) {
//   var max = Math.max(arr[[0]], arr[1]);
//   var min = Math.min(arr[[0]], arr[1]);
//   var sum = 0;

//   for (var i = min; i <= max; i++)(
//     sum += i);
//   console.log newArr = [];
//   return sum;
// }
// sumAll([1, 4]);



// Seek and Destroy number 3

// function destroyer(arr) {
//   var args = Array.prototype.slice.call(arguments);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < args.length; j++) {
//       if (arr[i] === args[j]) {
//         delete arr[i]
//       }
//     }
//   }
//   return arr;
// }
// destroyer([1, 2, 3, 1, 2, 3], 2, 3);




//   21 Intermediate Algorithm Scripting: Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;
  var newArr = []

  var getOrbPeriod = function(obj){
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    return{name: obj.name,orbitalPeriod: orbPeriod}
  }
  for(var elem in arr){
    newArr.push(getOrbPeriod(arr[elem]))
  }
  return newArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);