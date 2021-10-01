// Only change code below this line

function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

function* insideGenerator1() {
    for (let i = 1; i <= 5; i++) {
        yield x = i;
    }
}

function* insideGenerator2() {
    for (let i = 10; i <= 15; i++) {
        yield x = i;
    }
}

function* insideGenerator3() {
    for (let i = 6; i <= 9; i++) {
        yield x = i;
    }
}

let iterator = myGenerator();
fifteenArray = [];

for (let index = 0; index < 16; index++) {

    if (index != 15) {
        fifteenArray.push(iterator.next().value + "#,")
    } else {
        fifteenArray.push(iterator.next().value + "!")
    }
}
console.log(...fifteenArray);

// Only change code above this line

module.exports = { fifteenArray, myGenerator };