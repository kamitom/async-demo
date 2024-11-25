// console.log('同步before');
// const user = getUser(2, (user) => {
//   console.log('inside callback');
//   console.log(user);
//   console.log('AFTER');
// });
// // console.log(user);
// console.log('同步after');

// function getUser(id, cb) {
//   setTimeout(() => {
//     console.log('Reading a user from a database...');
//     cb({ id: id, gitHubUsername: 'rossi' });
//   }, 2000);
// }

class Country {
  constructor(country) {
    this.country = country;
    this.region = 'asia';
    this.subregion = 'east asia';
  }
}

const testCountry = new Country('Taiwan');
console.log(testCountry.subregion);
// console.log(typeof testCountry.subregion);

let Vehicle = function (p = 99) {
  this.price = p;
};

let newCar = new Vehicle(100);
console.log(newCar.price);
