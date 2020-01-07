const input = document.querySelector('input');
const ul = document.querySelector('ul');
const li = [...document.querySelectorAll('li')];

input.addEventListener('input', serchTask);

function serchTask(e) {
    li.forEach(l => l.remove());
    let value = e.target.value.toLowerCase();
    const filtred = li.filter(l => l.textContent.toLocaleLowerCase().includes(value));
    filtred.forEach(f => ul.appendChild(f));
}

