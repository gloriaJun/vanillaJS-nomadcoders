const weather = (function() {
  const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
  const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";
  const COORDS_LS = 'coords';

  const weather = document.querySelector(".js-weather .weather__text");

  function getWeather(latitude, longitude) {
    fetch(`${WEATHER_API}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(res => {
        const { main: { temp }, name } = res;
        console.log(temp, name);
        weather.innerText = `${temp} ${name}`
      });
  }

  function handleGeoSuccess(pos) {
    const { coords: {
      latitude,
      longitude,
    } } = pos;
    const coordsObj = {
      latitude ,
      longitude,
    };
    console.log(latitude, longitude);
    getWeather(latitude, longitude);
  }

  function handleGeoError() {
    console.error('Cannot get geo location');
  }

  function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }

  function loadCoords() {
    askForCoords();
  }

  return {
    init() {
      loadCoords();
    }
  }
})();

weather.init();
