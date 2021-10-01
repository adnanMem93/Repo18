// Only change code below this line

let rockStar = new Map([
    ["artist", "The Rolling Stone"],
    ["song", "Angie"],
    ["album", "Goats Head Soup"],
    ["singer", "Mick Jagger"]
]);

let newRock = new Map();
for (const [key, value] of rockStar.entries()) {
    !key.includes("a") ? newRock.set(key, value) : null;
}
console.log(newRock);

// Only change code above this line

module.exports = { rockStar, newRock };