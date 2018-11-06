const weather = (function() {
  const COORDS_LS = 'coords';

  function saveCoords(coords) {
    localStorage.setItem(COORDS_LS, JSON.stringify(coords));
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
    saveCoords();
  }

  function handleGeoError() {
    console.error('Cannot get geo location');
  }

  function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }

  function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS_LS);
    if (!loadedCords) {
      askForCoords();
    } else {
    }
  }

  return {
    init() {
      loadCoords();
    }
  }
})();

weather.init();
