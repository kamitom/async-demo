// https://restcountries.com/v3.1/name/deutschland

const req = fetch('https://restcountries.com/v3.1/name/usa');
req
  .then((response) => {
    console.log('response: ', response);
    return response.json();
  })
  .catch((err) => {
    console.log('錯誤:', err);
  })
  .then((data) => {
    // console.log('data-a: ', JSON.parse(JSON.stringify(data)));
    const [countryData] = JSON.parse(JSON.stringify(data));
    console.log('data2: ', countryData.name.official);
    console.log('subregion', countryData.subregion);
    // console.log('data: ', data);
  });

// console.log('nodemom d2.js');
// setTimeout(() => {
//   console.log('一輪的胸部不錯大');
// }, 2000);

// console.log('after');
