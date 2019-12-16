const div = document.querySelector('div');
let divX = 150;
let divY = 50;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let insertX;
let insertY

let drowActive = false;

div.addEventListener('mousedown', (e)=> {
    drowActive = !drowActive
    div.style.backgroundColor = 'grey';
    console.log('mousedowan');

    insertX = e.offsetX;
    insertY = e.offsetY;
})
div.addEventListener('mousemove', (e)=> {

    if(drowActive) {
    divX = e.clientX;
    divY = e.clientY

    div.style.left = `${divX - insertX}px`
    div.style.top = `${divY - insertY}px`
    console.log('mousemove');
}
})
div.addEventListener('mouseup', ()=> {
    drowActive = !drowActive
    div.style.backgroundColor = 'black';
    console.log('mouseup');
})