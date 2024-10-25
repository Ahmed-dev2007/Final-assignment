const track = document.querySelector('.carousel-track');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
  if (currentIndex < track.children.length - 1) {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  }
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  });
});

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}
