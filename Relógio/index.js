const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const Clock = setInterval(function time() {
    let data = new Date();
    let hour = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

    if (hour < 10) hour = '0' + hour;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    Hours.textContent = hour;
    Minutes.textContent = minutes;
    Seconds.textContent = seconds;
})