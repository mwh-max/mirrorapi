import { setupHeatmapCanvas } from './heatmap.js';
import { enableHeatBrush } from './heatbrush.js';
import { bindGhostToggle, isGhostMode } from './state.js';
import { trackBehavior } from './logic.js';
import { setupOverlayBubble, showReflection } from './overlays.js';

document.addEventListener('DOMContentLoaded', () => {
  const demoBtn = document.getElementById('demo-extension');
  const ghostToggle = document.getElementById('ghostToggle');

  if (!demoBtn || !ghostToggle) return;

  let demoInitialized = false;

  demoBtn.addEventListener('click', () => {
    if (demoInitialized) return;
    demoInitialized = true;

    // Bind toggle and hide it after activation
    bindGhostToggle(ghostToggle);
    ghostToggle.parentElement.style.display = 'none';

    // Initialize modules
    setupOverlayBubble();
    trackBehavior(showReflection, isGhostMode);

    const ctx = setupHeatmapCanvas();
    enableHeatBrush(ctx, isGhostMode);

    demoBtn.textContent = 'Reflection Active';
  });
});