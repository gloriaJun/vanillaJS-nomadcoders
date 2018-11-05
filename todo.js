const todo = (function() {
  const form = document.querySelector('form.js-todo-form'),
      input = form.querySelector('input'),
      ul = document.querySelector('ul.js-todo-list');

  const TODO_LS_KEY = 'todos';

  const todosList = [];

  function loadTodos() {
    const list = localStorage.getItem(TODO_LS_KEY);
    if (!list) return false;
    const parseList = JSON.parse(list);
    parseList.forEach(item => paintToDo(item.text));
    // const html = parseList.reduce((result, item, key) => {
    //   result.push(`
    //   <li id="${item.id}">
    //     <span>${item.text}</span>
    //     <button>X</button>
    //   </li>
    //   `);
    //   todosList.push(item);
    //   return result;
    // }, []).join('');
    // ul.innerHTML = html;
  }

  function savedTodos() {
    localStorage.setItem(TODO_LS_KEY, JSON.stringify(todosList));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const currentValue = input.value;
    paintToDo(currentValue);
    input.value = '';
  }

  function paintToDo(text) {
    const id = todosList.length + 1;
    const li = document.createElement('li');
    li.id = id;
    li.innerHTML = `
      <span>${text}</span>
      <button>X</button>
  `
    ul.appendChild(li);

    todosList.push({
      id,
      text,
    })
    savedTodos();
  }

  return {
    init() {
      loadTodos();
      form.addEventListener('submit', handleSubmit);
      // document.addEventListener('destory')
    },
  }
})();

todo.init();
