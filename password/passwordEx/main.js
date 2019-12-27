const input = document.querySelector('input');
const div = document.querySelector('div');

const passwords = ['jeDEN', 'Dwa'];
const messages = ['excellent', 'It works!'];

input.addEventListener('input', (e) => {
    const text = e.target.value;
    div.textContent ='';
    showMessage(text);
})

input.addEventListener('focus', changeFildStyle)
input.addEventListener('blur', changeFildStyle)

function showMessage(tekst) {
    passwords.forEach((p, i) => { 
        if (checkPassword(tekst, p)) {
            console.log(tekst, p);
            div.textContent = messages[i];
        }
    }) 

}

function changeFildStyle(e) {
    e.target.classList.toggle('active');
}

function checkPassword(tekst, password) {
    return (tekst.toLowerCase() === password.toLowerCase());
}
