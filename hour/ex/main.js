
function clock() {
    const time = new Date();
    document.querySelector('.clock span').textContent = `${interval(time.getHours())}:${interval(time.getMinutes())}:${interval(time.getSeconds())}`;

}

function interval(time) {
    return time <= 9 ? '0' + time : time;
}

setInterval(clock, 1000);

