let isRunning = false;
let startTime;
let timer;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStopBtn').textContent = 'Start';
    } else {
        startTime = new Date().getTime();
        timer = setInterval(updateDisplay, 10);
        document.getElementById('startStopBtn').textContent = 'Stop';
    }

    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    startTime = undefined; 
    updateDisplay();
    document.getElementById('startStopBtn').textContent = 'Start';
}

function updateDisplay() {
    if (!startTime) {
        document.getElementById('display').textContent = '00:00:00.000';
        return;
    }

    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);

    document.getElementById('display').textContent = formattedTime;
}


function formatTime(milliseconds) {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const millis = milliseconds % 1000;

    return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}.${padNumber(millis, 3)}`;
}

function padNumber(num, length = 2) {
    return num.toString().padStart(length, '0');
}
