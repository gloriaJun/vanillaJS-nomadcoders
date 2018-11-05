const greet = (function() {
  const form = document.querySelector('form.js-form'),
      input = form.querySelector('input'),
      greeting = document.querySelector('h4.js-greet');

  const USER_LS_KEY = 'name',
      SHOWING_CLS = 'showing';

  function paintGreeting(text) {
    form.classList.remove(SHOWING_CLS);
    greeting.classList.add(SHOWING_CLS);
    greeting.innerHTML = `Hello, ${text}`;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { value } = input;
    paintGreeting(value);
    savedName(value);
  }

  function askName() {
    form.classList.add(SHOWING_CLS);
    greeting.classList.remove(SHOWING_CLS);

    form.addEventListener('submit', handleSubmit);
  }

  function savedName(name) {
    localStorage.setItem(USER_LS_KEY, name);
  }

  function loadName() {
    const currentUser = localStorage.getItem(USER_LS_KEY);
    if (!currentUser) {
      askName();
    } else {
      paintGreeting(currentUser);
    }
  }

  return {
    init() {
      loadName();
    }
  }
})();

greet.init();
