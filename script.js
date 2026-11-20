/* ShopEase: main script, shared by every page. Full guide: README.md */

/* ==================== MOBILE MENU (open / close) ==================== */
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.remove('active');
  });
}
