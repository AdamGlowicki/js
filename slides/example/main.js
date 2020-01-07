const slidesList = [{
    img: 'images/img1.jpg',
    text: 'First text',
},
{
    img: 'images/img2.jpg',
    text: 'Second text',
},
{
    img: 'images/img3.jpg',
    text: 'Third text',
}];

const keyCode = {
    right: 39,
    left: 37,
}

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

const timeDuration = 1000;
let active = 0;

let interval = setInterval(intervalChangeSlide, timeDuration);

window.addEventListener('keydown', keyChangeSlide);

function keyChangeSlide(e) { 
    changeSlide(e.keyCode);
}

function intervalChangeSlide() {
    changeSlide(null);
}

function changeSlide(code) {
    clearInterval(interval);
    if(code == keyCode.right || code == null) {
        active++;
        if(active === slidesList.length) {
            active = 0;
        }
    } else {
        active--;
        if(active === -1) {
            active = slidesList.length -1;
        }
    }
    image.src = slidesList[active].img;
    h1.textContent = slidesList[active].text;
    changeDot();
    interval = setInterval(intervalChangeSlide, timeDuration);

}

function changeDot() {
    const activeDots = dots.findIndex(d => d.classList.contains('active'));
    console.log(activeDots);
    console.log(active);
    dots[activeDots].classList.remove('active');
    dots[active].classList.add('active');
}