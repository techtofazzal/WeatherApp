class OpenWeather {

  constructor() {
    // this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    this.apikey = 'c0cb773d975df87f59b485d1c1e185b4';
  }

  async search(cityName) {

    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apikey}`);

    const results = await response.json();

    return results;

  }







  // search(cityName) {
  //   const cName = cityName;
  //   const url = this.url;
  //   const apikey = this.apikey;

  //   fetch(url + cName + '&appid=' + apikey).then(function (response) {

  //     console.log(response.json());

  //   })
  // }

}