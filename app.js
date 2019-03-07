const form = document.querySelector('#task-form');
const inputTask = document.querySelector('#task');
const btnClear = document.querySelector('.clear-task');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');

loadEventListener();

function loadEventListener() {
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  btnClear.addEventListener('click', clearTask);
  filter.addEventListener('keyup', filteringTask);
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
  e.preventDefault();
}

function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

function clearTask() {
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function filteringTask(e) {
  const filterWord = e.target.value.toLowerCase();
  console.log(filterWord);
  document.querySelectorAll('.collection-item').forEach(function(item) {
    console.log(item.firstChild.textContent.toLowerCase());
    if(item.firstChild.textContent.toLowerCase().indexOf(filterWord) != -1) {
      item.style.display = 'block';
      console.log('show');
    } else {
      item.style.display = 'none';
      console.log('hide');
    }
  });
}
