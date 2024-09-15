let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.controls .dot');

function currentSlide(index) {
  showSlide(index);
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.left = '-100%'; 
  });

  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  slides[index].classList.add('active');
  slides[index].style.left = '0'; 
  dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => currentSlide(index));
});


showSlide(currentIndex);