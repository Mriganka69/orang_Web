const modal = document.querySelector('.modal');
const images = document.querySelectorAll('.column img'); // Selecting the <img> elements directly
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = image.src; // Use image.src to get the source of the clicked image
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
