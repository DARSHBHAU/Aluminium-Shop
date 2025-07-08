// Toggle Menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("open");
});

// Dark mode toggle
const toggle = document.getElementById("themeToggle");
const body = document.getElementById("page");

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});

// Scroll animation for .card and gallery images
function revealOnScroll() {
  const reveals = document.querySelectorAll('.card, .gallery-grid img');
  const triggerPoint = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerPoint) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
