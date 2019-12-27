const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ['Jagienka', 'Dobrawa', 'Daria', 'Asia', 'Kira', 'Marysia', 'Usisko'];

btn.addEventListener('click', nameGenerator);

function nameGenerator() {
    const index = Math.floor(Math.random() * names.length);
    div.textContent = names[index];
}