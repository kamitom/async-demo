'use strict';

console.log('同步before');

var obj = {
  a: 1,
  b: 2,
};
let arr_data = [2, 4, 6, 9, 10, 99, obj];

const obj_keys = Object.keys(obj);
console.log(arr_data.valueOf());
