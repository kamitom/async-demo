// Object.is() method determines whether two values are the same value.
console.log(Object.is({}, {}));

const objA = { a: 100 };
const objB = { wbsc: 2024, b: 1 };

console.log(Object.is(objA, objB)); // true

const objC = { c: 1, d: 2, e: 3, a: 200 };
const objD = { a: 2025, k: 99 };

const objTarget = {};

// Object.assign() method copies all enumerable own properties from one or more source objects to a target object.o
Object.assign(objTarget, objA, objB, objC, objD);
console.log(objTarget); // { a: 1, b: 1, c: 1 }

// console.log(typeof Object.assign(undefined));
