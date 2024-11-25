// 這是一個模組
let qq = '\u0061';
let q1 = '\u4e2d';

const fn1 = () => {
  console.log('台東市區米苔目。。。');
};

const obj1 = {
  name: '小明',
  age: 18,
  address: '台北市',
  displayName: function () {
    console.log(`我是${this.name}`);
  },
};
obj1.toString = function () {
  return `name: ${this.name}, age: ${this.age}, address: ${this.address}`;
};

class NipponBaseballTeam {
  constructor(teamName) {
    this.teamName = teamName;
  }
  geoLocation = 'Japan';
  testFunc() {
    console.log(`Taem Name: ${this.teamName}`);
  }
}

export { qq, q1, fn1, obj1, NipponBaseballTeam };
