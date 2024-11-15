// 'use strict';

console.log('test promise object');

/*

const my_promise = new Promise((resolve, reject) => {
  const runningResult = 1;
  // throw new Error('promise 錯誤');
  // 在這裡做一些 async 的工作

  if (runningResult === 1) {
    resolve('promise 回傳成功');
  } else {
    reject('promise 回傳失败');
  }
});

my_promise
  .then((result) => {
    console.log('promise 結果:' + result);
  })
  .catch((err) => {
    console.log('error:' + err);
  })
  .finally(() => {
    console.log('finally');
  });

*/

function timeOutFunc(ms) {
  return new Promise((resolve, reject) => {
    const runningResult = 1;
    if (runningResult === 1) {
      const obj1 = {
        a: 100,
        b: 2,
        c: 300,
      };
      // resolve('promise 回傳成功');
      resolve(obj1);
    } else {
      reject(new Error('promise 回傳失败'));
    }
    setTimeout(resolve, ms, 'done!!');
  });
}

timeOutFunc(5000)
  .then((value) => {
    value.d = 4;
    console.log(value);
  })
  .catch((err) => {
    console.log(`oh!${err}`);
  })
  .finally(() => {
    console.log('finally');
  });

/*
const someAsyncFunc = () => {
  return new Promise((resolve, reject) => {
    const x = 1;
    resolve(x + 2);
  });
};

someAsyncFunc().then((result) => {
  console.log('everything is great.');
});
*/
console.log('這裡是同步任務: finally.');
