const square = document.createElement('div');
document.body.appendChild(square);
let size = 10;
let grow = true;

square.style.width = size + "px";
square.style.height = size + "px";
square.style.backgroundColor = 'black';

window.addEventListener("scroll", function() {

    if(grow) {
        size += 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    } else {
        size -= 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }

    if (size >= window.innerHeight / 2) {
        grow = false;
    }

    if (size <=10) {
        grow = true;
    }
    
});
