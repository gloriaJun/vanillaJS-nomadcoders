const clock = (function() {
  const clockContainer = document.querySelector('div.js-clock'),
      clockTitle = clockContainer.querySelector('h1');

  function getTime() {
    const date = new Date();
    const numberFormat = (num) => num < 10 ? `0${num}` : num;
    clockTitle.innerHTML = `${numberFormat(date.getHours())}:${numberFormat(date.getMinutes())}:${numberFormat(date.getSeconds())}`
  }

  return {
    init() {
      getTime();
      setInterval(getTime, 1000);
    }
  }
})();

clock.init();
