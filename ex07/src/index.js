// Only change code below this line

const numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
const temp = new Set(numberArray);
const uniqueArray = [...temp];
 
console.log(uniqueArray.sort(function (a, b) {
    return a - b;
}));

// Only change code above this line

module.exports = { numberArray, uniqueArray };