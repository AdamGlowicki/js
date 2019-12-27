const addBtn = document.querySelector('button.add');
const resetBtn = document.querySelector('button.reset');
const showBtn = document.querySelector('button.show');
const possibilitiesBtn = document.querySelector('button.possibilities');

const advices = ['Fight', 'Think once again'];

addBtn.addEventListener('click', addAdvice);

function addAdvice(e) {
    e.preventDefault();
    const newAdvice = document.querySelector('input').value;
    if(!checkDuplicate(newAdvice) && !checkEmpty(newAdvice)) {
        advices.push(newAdvice);
    }
}

resetBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    advices.length = 0;
})

showBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    if(advices.length) {
    const div = document.querySelector('div.advice');
    const index = randomNnumber(advices.length);
    const advice = advices[index];
    div.textContent = advice;
    console.log(advice.length);
    } else {
        alert("You have no advices");
    }
})

possibilitiesBtn.addEventListener('click', ()=> {
    if(advices.length) {
        alert(writeArrayItems(advices));
    } else{
        alert("You have no advices");
    }
}) 

function randomNnumber(number) {
    return Math.floor(Math.random() * number);
}

function checkDuplicate(newAdvice) {
    for(a of advices) {
        if(a === newAdvice) {
            return true;
        }
    }
    return false;
}

function checkEmpty(value) {
    return value === null;
}

function writeArrayItems(array) {
    const point = ', ';
    let text ='';
    for(n of array) {
        text += n;
        text += point;
    }

    return text.slice(0, -2);

    
}
