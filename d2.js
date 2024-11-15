'use strict';

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
    const runningResult = 9;
    if (runningResult === 1) {
      resolve('promise 回傳成功');
    } else {
      reject('promise 回傳失败');
    }
    setTimeout(resolve, ms, 'done!!');
  });
}

timeOutFunc(3000)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('finally');
  });
