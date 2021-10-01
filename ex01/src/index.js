let myArr = [];
// Only change code below this line 
function* multiplication(x) {

    for (let i = 0; i <= x; i++) {
        x *= 2;
        myArr.push(x);
        yield x;
  
    }
}

var num = multiplication(3);

for (let index = 0; index < 3; index++) {
    console.log(num.next().value)
}

// Only change code above this line
module.exports = multiplication;
