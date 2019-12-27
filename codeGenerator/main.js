const btn = document.querySelector('button');
const section = document.querySelector('section');


const chars = 'ABCDEFGHIJKLMNOPRSTUVWYZ0123456789';

btn.addEventListener('click', codeGenerator);

function codeGenerator() {
    const codeNumber = 1000;
    const charsNumber = 10;

    for(let i = 0; i < codeNumber; i++) {
        const div = document.createElement('div');
        div.textContent = generateCode(charsNumber);
        section.appendChild(div);
    }
}

function generateCode(charsNumber) {
    let code = '';
    for(let i = 0; i<charsNumber; i++) {
        const index = Math.floor(Math.random() * chars.length)
        code += chars[index]
    }
    return code;
}