// overlays.js
export function setupOverlayBubble() {
  const bubble = document.createElement('div');
  bubble.id = 'mirror-overlay';
  bubble.style.position = 'fixed';
  bubble.style.top = '1rem';
  bubble.style.right = '1rem';
  bubble.style.background = '#ffffff';
  bubble.style.color = '#1a1a1a';
  bubble.style.fontFamily = 'Source Sans Pro, sans-serif';
  bubble.style.padding = '0.75rem 1.25rem';
  bubble.style.border = '1px solid #d6dce2';
  bubble.style.borderRadius = '16px';
  bubble.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
  bubble.style.opacity = '0';
  bubble.style.transition = 'opacity 0.4s ease';
  bubble.style.zIndex = '1000';
  bubble.style.maxWidth = '300px';
  document.body.appendChild(bubble);
}

export function showReflection(message, ghostMode) {
  const bubble = document.getElementById('mirror-overlay');
  if (!bubble) return;

  if (ghostMode) {
    bubble.textContent = '';
    bubble.style.background = '#d8e4ff';
    bubble.style.opacity = '0.25';
  } else {
    bubble.textContent = message;
    bubble.style.background = '#ffffff';
    bubble.style.opacity = '1';
  }

  clearTimeout(bubble.timeout);
  bubble.timeout = setTimeout(() => (bubble.style.opacity = 0), 2500);
}
