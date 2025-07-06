    // Toggle Menu
    document.getElementById("menu-toggle").addEventListener("click", function () {
      document.getElementById("nav-links").classList.toggle("open");
    });

    // Dark mode toggle
    const toggle = document.getElementById("themeToggle");
    const body = document.getElementById("page");

    // Load saved theme
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
