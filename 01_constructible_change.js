const assert = require('assert').strict;

function make_change(coins) {
    const my_coins = [... coins]
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

assert.equal(make_change([5, 7, 1, 1, 2, 3, 22]), 20);
assert.equal(make_change([1, 1, 1, 1, 1]), 6);
assert.equal(make_change([1, 5, 1, 1, 1, 10, 15, 20, 100]), 55);
