const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');

form.addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault();
    const taskText = input.value;
    const task = document.createElement('ul')
    task.className = 'task';
    task.innerHTML = taskText + '<button>Remove</button>'
    ul.appendChild(task);

    taskNumber.textContent = listItems.length;



}