// state.js
let ghostMode = false;

export function isGhostMode() {
  return ghostMode;
}

export function bindGhostToggle(toggleEl) {
  ghostMode = toggleEl.checked;
  toggleEl.addEventListener('change', () => {
    ghostMode = toggleEl.checked;
    document.dispatchEvent(new CustomEvent('ghostViewChange'));
  });
}
