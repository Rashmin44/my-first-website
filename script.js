/**
 * 🟢 Premium Minimalist Matrix Background Engine
 * This renders a slow, low-opacity elegant animation layout.
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

    // High-tech architectural character layers
    const matrixSymbols = '0101011001XXXXXXXX//////////-----------'.split('');
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);

    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
        rainDrops[x] = Math.random() * -50; 
    }

    function drawMatrix() {
        // Very slow fade to create soft, luxurious tracing trails
        ctx.fillStyle = 'rgba(10, 14, 20, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Subdued soft deep color palette to protect typography contrast
        ctx.fillStyle = 'rgba(0, 255, 157, 0.12)';
        ctx.font = '400 ' + fontSize + 'px monospace';

        for (let i = 0; i < rainDrops.length; i++) {
            const text = matrixSymbols[Math.floor(Math.random() * matrixSymbols.length)];
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.995) {
                rainDrops[i] = 0;
            }
            rainDrops[i] += 0.5; // Slower stream rate for a relaxed, high-end feel
        }
    }
    // Reduced frequency loop for lower processing and relaxed visual presentation
    setInterval(drawMatrix, 45);
}
