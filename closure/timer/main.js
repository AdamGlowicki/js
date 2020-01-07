function timer(timerStart = 0) {
    const h1 = document.querySelector('h1');

    function showTimer() {
        h1.textContent = `${timerStart++} ${timerStart === 2 ? 'sekunda' : 'sekund'}`;
    }

    return setInterval(showTimer, 1000);
}

const time = timer();
time();