document.querySelectorAll('button[data-key]').forEach(i => {
    i.addEventListener('click', removeTask);
})

function removeTask(e) {
    // e.target.parentNode.remove();
    // e.target.parentNode.style.textDecoration = 'line-through';
    const index = e.target.dataset.key;
    console.log(index);
    document.querySelector(`li[data-key="${index}"]`).remove();
}