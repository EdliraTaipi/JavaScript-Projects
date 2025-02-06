const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const captionText = document.getElementById('caption');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const thumbnails = document.querySelectorAll('.thumbnail');
let currentIndex = 0;

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = thumbnail.getAttribute('data-full');
        captionText.innerHTML = thumbnail.alt;
        currentIndex = index;
    });
});

document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

prev.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
    modalImage.src = thumbnails[currentIndex].getAttribute('data-full');
    captionText.innerHTML = thumbnails[currentIndex].alt;
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
    modalImage.src = thumbnails[currentIndex].getAttribute('data-full');
    captionText.innerHTML = thumbnails[currentIndex].alt;
});
