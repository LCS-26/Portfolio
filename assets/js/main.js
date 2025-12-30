// ================================
// Mobile menu toggle + year
// ================================
(() => {
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
})();

// ================================
// Lightbox zoom
// ================================
(() => {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = modal?.querySelector("img");

  if (!modal || !modalImg) return;

  document.addEventListener("click", (e) => {
    const img = e.target.closest("img.zoomable");
    if (!img) return;

    modalImg.src = img.currentSrc || img.src;
    modal.classList.add("visible");
  });

  modal.addEventListener("click", () => {
    modal.classList.remove("visible");
    modalImg.src = "";
  });
})();