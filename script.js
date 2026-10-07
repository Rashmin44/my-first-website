/**
 * Page Interface Switching Core Engine
 */
function openPage(event, pageId, filename) {
    const pages = document.getElementsByClassName("resume-page");
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active-page");
    }

    const buttons = document.getElementsByClassName("nav-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    document.getElementById(pageId).classList.add("active-page");
    event.currentTarget.classList.add("active");

    const logBox = document.getElementById("log-output");
    logBox.innerHTML = `&gt; request system branch fetch... verified.<br>&gt; opening storage block: [${filename}]<br>&gt; rendering graphical data pipeline... successful.<span class="cursor"></span>`;
}

/**
 * Live Synchronized System Clock Engine
 */
function updateClock() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    
    const clockElement = document.getElementById("live-time");
    if (clockElement) {
        clockElement.innerText = `SYS_TIME: ${hours}:${minutes}:${seconds}`;
    }
}
setInterval(updateClock, 1000);
updateClock();

/**
 * Live Hacker Matrix Rain Animation Engine
 */
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const katakana = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabet = katakana.split('');

const fontSize = 16;
let columns = canvas.width / fontSize;

const rainDrops = [];
for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff66';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}
setInterval(drawMatrix, 30);
