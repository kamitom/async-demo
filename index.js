'use strict';
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((p) => {
  p.style.color = 'red';
});

const btn = document.querySelector('.btn-country');
const txtCountry = document.querySelector('.txt-country');
const countriesContainer = document.querySelector('.countries');
/* 
const getCountryData = function (country) {
  // https://restcountries.com/v3.1/name/deutschland
  const targetCountry = country; // italy, deutschland, portugal, canada
  const request = new XMLHttpRequest();

  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${targetCountry}`,
    true
  );
  request.send();

  request.addEventListener('error', function () {
    console.error('網路錯誤,request失敗:', this.status);
  });

  request.addEventListener('load', function () {
    if (this.status === 200) {
      const [data] = JSON.parse(this.responseText);
      // console.log(typeof data);
      console.log(data);
      const [name, capital, region, subregion, population, area, flag] = [
        data.name.common,
        data.capital[0],
        data.region,
        data.subregion,
        data.population,
        data.area,
        data.flags.svg,
      ];
      const languagesKey = Object.keys(data.languages)[0];
      const languagesValue = data.languages[languagesKey];
      const currenciesKey = Object.keys(data.currencies)[0];
      console.log(
        `Country: ${name}\nCapital: ${capital}\nRegion: ${region}\nSubregion: ${subregion}\nPopulation: ${population}\nArea: ${area}
    \nLanguages: ${languagesValue}\nFlag: ${flag}`
      );

      const html = `
   <article class="country">
              <img class="country__img" src="${flag}" />
              <div class="country__data">
                <h3 class="country__name">${name}</h3>
                <h4 class="country__region">${subregion}</h4>
                <p class="country__row"><span>👫</span>${(
                  +population / 1000000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${languagesValue}</p>
                <p class="country__row"><span>💰</span>${currenciesKey}</p>
              </div>
            </article> 
  `;

      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
    } else {
      // console.error('request失敗,狀態碼:', this.status);
      console.error('Error:', JSON.parse(this.responseText));
    }
  });
};

// greece, usa, germany, portugal, canada, italy, israel, iran
// getCountryData('iraq');
// getCountryData('usa');
// getCountryData('israel');
// getCountryData('iran');
// getCountryData('norway');
// getCountryData('italy');
// getCountryData('spain');
getCountryData('portugal');

*/

/*
// 這裡開始呈現 callback hell 的問題
const renderCountry = function (data, className = '') {
  const [name, capital, region, subregion, population, area, flag] = [
    data.name.common,
    data.capital[0],
    data.region,
    data.subregion,
    data.population,
    data.area,
    data.flags.svg,
  ];
  const languagesKey = Object.keys(data.languages)[0];
  const languagesValue = data.languages[languagesKey];
  const currenciesKey = Object.keys(data.currencies)[0];
  console.log(
    `Country: ${name}\nCapital: ${capital}\nRegion: ${region}\nSubregion: ${subregion}\nPopulation: ${population}\nArea: ${area}
    \nLanguages: ${languagesValue}\nFlag: ${flag}`
  );

  const html = `
   <article class="country ${className}">
              <img class="country__img" src="${flag}" />
              <div class="country__data">
                <h3 class="country__name">${name}</h3>
                <h4 class="country__region">${subregion}</h4>
                <p class="country__row"><span>👫</span>${(
                  +population / 1000000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${languagesValue}</p>
                <p class="country__row"><span>💰</span>${currenciesKey}</p>
              </div>
            </article> 
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // https://restcountries.com/v3.1/name/deutschland
  const targetCountry = country; // italy, deutschland, portugal, canada
  const request = new XMLHttpRequest();

  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${targetCountry}`,
    true
  );
  request.send();

  request.addEventListener('error', function () {
    console.error('網路錯誤,request失敗:', this.status);
  });

  request.addEventListener('load', function () {
    if (this.status === 200) {
      const [data] = JSON.parse(this.responseText);
      // console.log(typeof data);
      console.log(data);
      renderCountry(data);

      // Get neighbour country
      if (!data.borders) return;
      const [neighbour] = data.borders;
      if (!neighbour) return;
      console.log(neighbour);

      // AJAX call country 2
      const request2 = new XMLHttpRequest();
      request2.open(
        'GET',
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        true
      );
      request2.send();
      request2.addEventListener('load', function () {
        if (this.status === 200) {
          const [data2] = JSON.parse(this.responseText);
          const myNeighbour = data2.name.common;
          console.log(myNeighbour);
          // getCountryAndNeighbour(myNeighbour); // will raise a stack overflow error
          renderCountry(data2, 'neighbour');
        } else {
          console.error('Error:', JSON.parse(this.responseText));
        }
      });
    } else {
      // console.error('request失敗,狀態碼:', this.status);
      console.error('Error:', JSON.parse(this.responseText));
    }
  });
};

// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('korea');
// getCountryAndNeighbour('japan');
// getCountryAndNeighbour('finland');
// getCountryAndNeighbour('denmark');
getCountryAndNeighbour('austria');
*/

// 這裡開始使用promise
const renderCountryDetails = function (data, className = '') {
  const [name, capital, region, subregion, population, area, flag] = [
    data.name.common,
    data.capital[0],
    data.region,
    data.subregion,
    data.population,
    data.area,
    data.flags.svg,
  ];
  const languagesKey = Object.keys(data.languages)[0];
  const languagesValue = data.languages[languagesKey];
  const currenciesKey = Object.keys(data.currencies)[0];
  console.log(
    `Country: ${name}\nCapital: ${capital}\nRegion: ${region}\nSubregion: ${subregion}\nPopulation: ${population}\nArea: ${area}
    \nLanguages: ${languagesValue}\nFlag: ${flag}`
  );

  const html = `
   <article class="country ${className}">
              <img class="country__img" src="${flag}" />
              <div class="country__data">
                <h3 class="country__name">${name}</h3>
                <h4 class="country__region">${subregion}</h4>
                <p class="country__row"><span>👫</span>${(
                  +population / 1000000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${languagesValue}</p>
                <p class="country__row"><span>💰</span>${currenciesKey}</p>
              </div>
            </article> 
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryDataAndNeighbour = function (country) {
  // const targetCountry = 'portugal';
  const targetCountry = country;
  fetch(`https://restcountries.com/v3.1/name/${targetCountry}`)
    .then((response) => {
      console.log('response:', response.toString());
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then((data) => {
      console.log('data:', data);
      renderCountryDetails(data[0]);
      // const neighbour = data[0].borders[0];
      const [neighbour] = data[0].borders;

      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Neighbour country not found (${response.status})`);
      return response.json();
    })
    .then((data) => {
      console.log('neighbour:', data);
      renderCountryDetails(data[0], 'neighbour');
    })
    .catch((err) => {
      console.error('Error here:', `${err}`);
    })
    .finally(() => {
      console.log('這裡是finally');
    });
};

btn.addEventListener('click', function () {
  const countryValue = txtCountry.value;
  // getCountryData('portugal');
  getCountryDataAndNeighbour(countryValue);
});
