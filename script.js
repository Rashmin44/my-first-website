/**
 * Page Interface Switching Core Engine
 */
function openPage(event, pageId, filename) {
    // 1. Locate and hide all separate content screens
    const pages = document.getElementsByClassName("resume-page");
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active-page");
    }

    // 2. Clear highlighting states across all active controls
    const buttons = document.getElementsByClassName("nav-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // 3. Render target screen layer stack open
    document.getElementById(pageId).classList.add("active-page");

    // 4. Highlight the triggered dashboard element
    event.currentTarget.classList.add("active");

    // 5. Update Interactive Diagnostic Terminal Gadget text stream
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

// Spin clock update listeners at continuous 1-second ticks
setInterval(updateClock, 1000);
updateClock();
