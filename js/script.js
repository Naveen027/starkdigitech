const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking a link
links.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});



const slides = document.querySelectorAll('.text-slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 2500); // change text every 2.5 seconds



{/* <script> */}
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".process-card");
    let current = 0;

    function animateStep() {
        cards.forEach(card => card.classList.remove("active"));
        cards[current].classList.add("active");

        current = (current + 1) % cards.length; // loop back to first
    }

    animateStep(); // start immediately
    setInterval(animateStep, 1000); // change step every 1 second
});
// </script>
