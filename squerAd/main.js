const rectangle = document.createElement('div');
document.body.appendChild(rectangle);

let grow = true;
let size = 1;
let colour = "green";

rectangle.style.width = "100vw";
rectangle.style.position = "fixed";
rectangle.style.top = 0;
rectangle.style.left = 0;
rectangle.style.height = size + "px";

// rectangle.style.height = 100 + "vh";
// rectangle.style.backgroundColor = "blue";

window.addEventListener("scroll", function() {

    if(grow) {
        size += 5;
        colour = "green"
    }
    else {
        size -= 5;
        colour = "red";
    }
    rectangle.style.backgroundColor = colour;
    rectangle.style.height = size + "px";

    if (size >= window.innerHeight / 4) {
        grow = !grow;
    } else if (size <= 0) {
        grow = !grow;
    }

})