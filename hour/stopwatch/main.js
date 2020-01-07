const startBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
const counter = document.querySelector('.time div');

const cnrParams = {
    onOff: false,
    time: 0,
    interval: null,
}

startBtn.addEventListener('click', startAction);
resetBtn.addEventListener('click', resetAction);

function resetAction() {
    clearInterval(cnrParams.interval);
    cnrParams.onOff = false;
    cnrParams.time = 0;
    counter.textContent = '---';
    startBtn.textContent = 'Start';
}

function startAction() {
    cnrParams.onOff = !cnrParams.onOff;
    if(cnrParams.onOff) {
        cnrParams.interval = setInterval(showTime, 10);
        startBtn.textContent = 'Pause';
    } else {
        clearInterval(cnrParams.interval);
        startBtn.textContent = 'Start';
    }
}

function showTime() {
    counter.textContent = roundToDecSecond(cnrParams.time);
    cnrParams.time++;
}

function roundToDecSecond(decSeconds) {
    const second = Math.floor(decSeconds/100);
    const decSecond = decSeconds % 100;

    return `${second}.${decSecond}`;
}
