//Mobile Toggle
/*
const mobileBtn = document.getElementById('mobile-toggle');
const mobileNav = document.getElementById('header');

if (window.matchMedia("(max-width: 1199px)").matches) {
  // Viewport is less or equal to 1199 pixels wide
  mobileBtn.addEventListener('click', () => {
  (window.innerWidth < 1200 && mobileNav.style.left === '-300px') ? mobileNav.style.left = '0' : mobileNav.style.left = '-300px';
  });
} 
*/




// Header Typing Effect
let typed = new Typed(".auto-type", {
  strings: ['Web Developer', 'Front-End Engineer', 'Web Designer'],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true
})


// Nav Scroll Highlight
const sections = document.querySelectorAll('.inNav');
const navLinks = document.querySelectorAll('.links');
const navAnchorLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  })

  navAnchorLinks.forEach(a => {
    console.log(a);
    a.classList.remove('active');
    if (a.classList.contains(current)) {
      a.classList.add('active');
    }
  })

})