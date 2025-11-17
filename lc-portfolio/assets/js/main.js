// Mobile menu toggle + current year
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Lightbox zoom for installation gallery
document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('lightbox-modal');
    modal.querySelector('img').src = img.src;
    modal.classList.add('visible');
  });
});

document.getElementById('lightbox-modal').addEventListener('click', () => {
  document.getElementById('lightbox-modal').classList.remove('visible');
});