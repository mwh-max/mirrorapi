// logic.js
export function trackBehavior(showFn, isGhostMode) {
  // Scroll velocity
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const delta = Math.abs(window.scrollY - lastScrollY);
    if (delta > 60) showFn("Skimming behavior detected", isGhostMode());
    else if (delta < 10) showFn("Close reading", isGhostMode());
    lastScrollY = window.scrollY;
    document.querySelectorAll('a, button, input').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    const hoverTime = setTimeout(() => {
      showFn("Hover lingering", isGhostMode());
    }, 300); // Trigger after 300ms of presence

    el.addEventListener('mouseleave', () => {
      clearTimeout(hoverTime);
    }, { once: true }); // Ensures the cleanup only happens once
    });
  });
});

  // Hover detection
  document.querySelectorAll('a, button, input').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      showFn("Hover lingering", isGhostMode());
    });
  });

  // Input hesitation
  document.querySelectorAll('input, textarea').forEach((el) => {
    let focusTime;
    el.addEventListener('focus', () => (focusTime = Date.now()));
    el.addEventListener('input', () => {
      const delay = Date.now() - focusTime;
      if (delay > 1500) showFn("Input hesitation detected", isGhostMode());
    });
  });
}
