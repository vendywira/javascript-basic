const form = document.querySelector('#task-form');
const inputTask = document.querySelector('#task');
const btnClear = document.querySelector('.clear-task');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');

loadEventListener();

function loadEventListener() {
  form.addEventListener('submit', addTask);
}

function addTask(e) {
  if (inputTask.value === '') {
    alert('task can not be null!');
  } else {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(inputTask.value));

    const removeLink = document.createElement('a');
    removeLink.className = 'delete-item secondary-content';
    removeLink.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(removeLink);

    taskList.appendChild(li);
  }
  
  console.log('test');
  e.preventDefault();
}