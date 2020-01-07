const endTime = new Date('2021-01-25 22:34:00').getTime();

const timeCosnt = {
    sToD: 60 * 60 * 24,
    sToH: 60 * 60,
    sToM: 60,
    
}

setInterval(showTime, 1000);

function showTime() {
    const nowTime = new Date().getTime();
    const date = changMsToDate(endTime - nowTime);

    document.querySelector('.d').textContent = changeIfSingle(date[0]);
    document.querySelector('.h').textContent = changeIfSingle(date[1]);
    document.querySelector('.m').textContent = changeIfSingle(date[2]);
    document.querySelector('.s').textContent = changeIfSingle(date[3]);
}

function changMsToDate(miliseconds) {
    const seconds = Math.floor(miliseconds/1000);
    const date = new Array()
    let restSeconds = 0;

    const days = clcClock(seconds, timeCosnt.sToD);
    restSeconds = clcRestTime(seconds, timeCosnt.sToD);

    const hours = clcClock(restSeconds, timeCosnt.sToH);
    restSeconds = clcRestTime(restSeconds, timeCosnt.sToH);

    const minutes = clcClock(restSeconds, timeCosnt.sToM);

    const sec = clcRestTime(restSeconds, timeCosnt.sToM); 

    date.push(days);
    date.push(hours);
    date.push(minutes);
    date.push(sec);

    return date;
}

function changeIfSingle(time) {
    return time <= 9 ? '0' + time : time;
}


function clcClock(time, unit) {
    return Math.floor(time / unit);
}

function clcRestTime(time, unit) {
    return time % unit;
}