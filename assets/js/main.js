document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('nav .nav-links');
  const navItems = document.querySelectorAll('nav .nav-links a');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navItems.forEach((link) => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  document.querySelectorAll('a, button, .service-item, .feature-card, .portfolio-card').forEach(el => {
    el.addEventListener('focus', () => el.classList.add('focus-visible'));
    el.addEventListener('blur', () => el.classList.remove('focus-visible'));
  });
});
