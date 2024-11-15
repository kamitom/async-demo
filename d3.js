console.log('hello, async');

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
