// The page content and links work without JavaScript.
// JavaScript only collapses navigation on small screens.
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.hidden = false;
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

// Facebook accepts Page Plugin widths from 180 to 500 pixels.
// Resize the embedded timeline to its column, including on phones.
const facebookFrame = document.querySelector('.facebook-feed iframe');
if (facebookFrame && 'ResizeObserver' in window) {
  let previousWidth = 340;
  let resizeTimer;
  const observer = new ResizeObserver(([entry]) => {
    const width = Math.max(180, Math.min(500, Math.floor(entry.contentRect.width)));
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (width === previousWidth) return;
      const source = new URL(facebookFrame.src);
      source.searchParams.set('width', String(width));
      facebookFrame.src = source.toString();
      previousWidth = width;
    }, 200);
  });
  observer.observe(facebookFrame.parentElement);
}
