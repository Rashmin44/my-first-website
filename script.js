/**
 * ⚡ Live Page Terminal Log Initialization Engine
 */
document.addEventListener("DOMContentLoaded", () => {
    const logBox = document.getElementById("log-output");
    if (logBox) {
        // Reads the current file path to determine which file you are viewing
        const currentPath = window.location.pathname.split("/").pop();
        let currentFile = "introduction.sh"; // Backup fallback text

        if (currentPath === "education.html") {
            currentFile = "education.cfg";
        } else if (currentPath === "jobs.html") {
            currentFile = "target_jobs.exe";
        }

        // Prints your automated server console boot text logs
        logBox.innerHTML = `&gt; initialising system console... done.<br>
&gt; loaded profile asset: rashmin<br>
&gt; current file view: ${currentFile}<span class="cursor"></span>`;
    }
});

/**
 * ⏰ Live Synchronized System Clock Engine
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
 * 🟢 4K Multi-Theme Flowing Matrix Rain Animation Engine
 */
const canvas = document.getElementById('matrix-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Dynamically re-colors the falling stream depending on the active body class theme
    let renderColor = '#00ff66'; // Default main page console green
    if (document.body.classList.contains('education-screen-body')) {
        renderColor = '#38bdf8'; // Lab data archive cyan
    } else if (document.body.classList.contains('jobs-screen-body')) {
        renderColor = '#f97316'; // Tactical operations orange
    }

    // High-tech terminal grid matrix symbols
    const matrixSymbols = '0123456789XÆØΩΨΞ∇ΔΘΦ█▓▒░𝄔⚡📊💻🛠️🎯'.split('');
    const fontSize = 16;
    let columns = canvas.width / fontSize;

    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
        rainDrops[x] = Math.random() * -100; // Staggers drops so they stream naturally
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = renderColor;
        ctx.font = '700 ' + fontSize + 'px monospace';

        for (let i = 0; i < rainDrops.length; i++) {
            const text = matrixSymbols[Math.floor(Math.random() * matrixSymbols.length)];
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.985) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    }
    setInterval(drawMatrix, 33);
}
