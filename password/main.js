const input = document.getElementById('pass');
const div = document.querySelector('.message');

const passwords =["user", "wiosna", "wiatr"];
const messages = ["I have been leave forever", "pora roku", "pizdzi jak wsciekly"];

input.addEventListener('input', (e) => {
    // if (password === e.target.value) {
    //     div.textContent = message;
    // }
    div.textContent = '';
    const text = e.target.value;
    passwords.forEach((m, i) => {
        if(m === text )
        div.textContent = messages[i];
    })
    console.log(e.target.value);
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})
