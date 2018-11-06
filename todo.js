const todo = (function() {
  const form = document.querySelector('form.js-todo-form'),
      input = form.querySelector('input'),
      ul = document.querySelector('ul.js-todo-list');

  const TODO_LS_KEY = 'todos';

  let todosList = [];

  function deleteTodo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    ul.removeChild(li);

    const newToDoList = todosList.filter((item) => item.id !== parseInt(li.id));
    todosList = newToDoList;
    savedTodos();
  }

  function loadTodos() {
    const list = localStorage.getItem(TODO_LS_KEY);
    if (!list) return false;
    const parseList = JSON.parse(list);
    parseList.forEach(item => paintToDo(item.text));
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
    const delBtn = document.createElement('button');
    const span = document.createElement('span');

    delBtn.innerText = 'X';
    delBtn.addEventListener('click', deleteTodo);

    span.innerText = text;

    li.id = id;
    li.appendChild(delBtn);
    li.appendChild(span);

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
