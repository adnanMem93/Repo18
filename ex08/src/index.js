// Only change code below this line

let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);

let unionSet = new Set([...one, ...two]);

let intersectionSet = new Set();
for (let item of one) {
    if (two.has(item)) intersectionSet.add(item);
}

let differenceSet = new Set();
for (let item of one) {
    if (!two.has(item)) differenceSet.add(item);
}

console.log(unionSet);
console.log(intersectionSet);
console.log(differenceSet);

// Only change code above this line

module.exports = { unionSet, intersectionSet, differenceSet };