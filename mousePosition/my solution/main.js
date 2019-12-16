document.body.addEventListener("mousemove", (e) => {
    // console.log(e.clientX, e.clientY);
    let mousePositionX = e.clientX;
    let mousePositionY = e.clientY;
    const screenSizeX = window.innerWidth;
    const screenSizeY = window.innerHeight;
    document.querySelector('h1').textContent = `${e.clientX}, ${e.clientY}`;
    // document.querySelector('h1').textContent = `${e.pageX}, ${e.pageY}`;
    // document.querySelector('h1').textContent = `${e.screenX}, ${e.screenY}`;
    let averagePosition = average(mousePositionX, mousePositionY);
    let averageSize = average(screenSizeX, screenSizeY);

    let scaleSizeX = scaleSize(mousePositionX, screenSizeX).toFixed(0);
    let scaleSizeY = scaleSize(mousePositionY, screenSizeY).toFixed(0);
    let scaleSizeXy = scaleSize(averageSize, averageSize).toFixed(0);

    changeColour(scaleSizeX, scaleSizeY, scaleSizeXy);
    console.log(scaleSizeX);

})

function changeColour(positionX, positionY, positionXY) {
    document.body.style.backgroundColor = `rgb(${positionX},${positionY},${positionXY})`;
}

function scaleSize(position, screenSize) {
    const maxValue = 255;
    return (position/screenSize) * maxValue;
}

function average(x, y) {
    return (x + y) / 2;
}