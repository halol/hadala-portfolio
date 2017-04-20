export default function initOffcanvasMenu() {
  const hamburger = document.querySelector('.hamburger');
  if (!hamburger) return;

  hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("test");
    document.querySelector('.container').classList.toggle('is-open');
  });
}
