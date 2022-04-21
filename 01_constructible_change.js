const assert = require('assert').strict;

function clean_coins(coins) {
    return coins.filter(x => {
        if (typeof x == "number") {
            return true;
        }
        if (typeof x == "string") {
            return !isNaN(parseInt(x));
        }
        return false;
    })
}

function make_change(coins) {
    const my_coins = [...coins]
    my_coins.sort((x, y) => x - y);
    let money = 1;
    for (let i = 0; i < my_coins.length; i++) {
        if (my_coins[i] > money) {
            return money;
        }
        money += my_coins[i];
    }
    return money;
}

assert.equal(make_change(clean_coins([5, "Reny", 7, 1, 1, 2, 3, 22])), 20);
assert.equal(make_change(clean_coins([1, 1, 1, 1, 1])), 6);
assert.equal(make_change([1, 5, 1, 1, 1, 10, 15, 20, 100]), 55);

console.log(make_change(clean_coins([5, "Reny", 7, 1, 1, 2, 3, 22])));
console.log(make_change([5, 7, 1, 1, 2, 3, 22]));
console.log(make_change([1, 1, 1, 1, 1]));
console.log(make_change([1, 5, 1, 1, 1, 10, 15, 20, 100]));
console.log("Finish")