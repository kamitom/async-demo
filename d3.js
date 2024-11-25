import * as d4Module from './d4.js';

// console.log('hello, async');
console.log(d4Module.qq);

// async function getTitle(url) {
//   let response = await fetch(url);
//   console.log(response);
//   let html = await response.text();
//   return html.match(/<title>([\s\S]+)<\/title>/i)[1];
// }

// // URL: https://tc39.es/ecma262/
// getTitle('https://tc39.es/ecma262/').then(console.log); // "ECMAScript® 2021 Language Specification"

async function f1() {
  await Promise.reject('出錯勒。颱風來勒');
  await Promise.resolve('颱風走勒'); // 不會執行
}

f1()
  .then((v) => console.log(v))
  .catch((e) => console.log(e)); // 出錯勒。颱風來勒

console.log(d4Module.q1);

d4Module.fn1();

const newObj1 = d4Module.obj1;
newObj1.name = 'MAC RAE';

newObj1.displayName();
console.log(newObj1.toString());
