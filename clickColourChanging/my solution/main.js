

document.body.addEventListener("click", (e) => {
    
    let x = e.clientX;
    let y = e.clientY;

    let colour = setColor(x, y);
    // backgroundColor = colour;
    document.body.style.backgroundColor = colour;
    console.log(`${x}, ${y}`);
})

function setColor(x, y) {
    if(twin(x, y)) {
        return "red";
    } if (notTwin(x, y)) {
        return "blue";
    } if (oneOfIsTwin(x, y)) {
        return "green"
    }
}

function twin(x, y) {
    return moduloDevide(x) == 0 && moduloDevide(y) == 0;
}

function notTwin(x, y) {
    return moduloDevide(x) == 1 && moduloDevide(y) == 1;
}

function oneOfIsTwin(x, y) {
    return (x + y) % 2 == 1;
}

function moduloDevide(x) {
    if(x == 0) {
        return 0;
    } else {
        return x % 2;
    }
}