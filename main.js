const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const bullets = document.querySelectorAll('.bullet');

let slideIndex = 1;
let slideWidth = slides[0].clientWidth;

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slider.style.transform = `translateX(${-slideWidth * (slideIndex - 1)}px)`;
  bullets.forEach(bullet => bullet.classList.remove('active'));
  bullets[slideIndex - 1].classList.add('active');
}

showSlides(slideIndex);

function moveSlide(n) {
  showSlides((slideIndex += n));
}

prevBtn.addEventListener('click', () => {
  moveSlide(-1);
});

nextBtn.addEventListener('click', () => {
  moveSlide(1);
});

bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    showSlides((slideIndex = index + 1));
  });
});

setInterval(() => {
  moveSlide(1);
}, 5000);
