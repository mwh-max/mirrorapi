// heatmap.js
export function setupHeatmapCanvas() {
  const canvas = document.createElement('canvas');
  canvas.id = 'ghostHeatmap';
  canvas.style.position = 'fixed';
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '999';
  canvas.style.opacity = '0'; // Default off until Ghost View
  document.body.appendChild(canvas);

  return canvas.getContext('2d');
}
