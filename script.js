// Fade Slider
let fadeIndex = 0;
const fadeSlides = document.querySelectorAll(".fade-slide");

function showFadeSlide() {
  fadeSlides.forEach((slide, i) => slide.classList.toggle("active", i === fadeIndex));
  fadeIndex = (fadeIndex + 1) % fadeSlides.length;
}
setInterval(showFadeSlide, 6000);

// Scroll sırasında aktif menü ve reveal efekti
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (pageYOffset >= sectionTop) current = section.getAttribute('id') || 'home';
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current)
      link.classList.add('active');
  });
  revealOnScroll();
});

// Smooth scroll
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target)
        window.scrollTo({ top: target.offsetTop - 55, behavior: 'smooth' });
    }
  });
});

// Reveal animasyonu
function revealOnScroll() {
  const elements = document.querySelectorAll('section, header');
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) el.classList.add('visible');
  });
}
window.addEventListener('load', revealOnScroll);