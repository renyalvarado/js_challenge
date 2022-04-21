const assert = require('assert').strict;

function sort_squared_array(number_array) {
    let squared_array = number_array.map(n => n ** 2);
    squared_array.sort((x, y) => x - y);
    return squared_array;
}

assert.deepEqual(sort_squared_array([1, 2, 3, 5, 6, 8, 9]), [1, 4, 9, 25, 36, 64, 81])
assert.deepEqual(sort_squared_array([-2, -1]), [1, 4])
assert.deepEqual(sort_squared_array([-10, -5, 0, 5, 10]), [0, 25, 25, 100, 100])


console.log(sort_squared_array([1, 2, 3, 5, 6, 8, 9]));
console.log(sort_squared_array([-2, -1]));
console.log(sort_squared_array([-10, -5, 0, 5, 10]));
