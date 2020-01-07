const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam numquam aut ipsum aliquid, quo eveniet dolores voluptas cumque, provident, animi consectetur debitis tenetur repellat voluptatem blanditiis corrupti eum ut molestias!';
let indexText = 0;
const indexTyping = setInterval(addLetter, 50);
function addLetter() {
    spnText.textContent += text[indexText];
    indexText++;
    console.log(indexTyping);
    if(text.length == indexText) {
        clearInterval(indexTyping);
    }
}

setInterval(cursorAnimation, 400);

function cursorAnimation() {
    spnCursor.classList.toggle('active');
}