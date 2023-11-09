// This JavaScript code will add a smooth scroll animation to the portfolio website

const anchors = document.querySelectorAll('a[href^="#"]');

for (const anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
}