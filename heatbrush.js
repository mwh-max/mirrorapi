// heatbrush.js
export function enableHeatBrush(ctx, isGhostViewActive) {
  window.addEventListener('mousemove', (e) => {
    if (!isGhostViewActive()) return;

    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(54, 79, 199, 0.05)';
    ctx.fill();
  });

  // Fading brush effect
  setInterval(() => {
    if (!isGhostViewActive()) return;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.01)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }, 100);
}

