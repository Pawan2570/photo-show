const photos = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg',
    'images/photo5.jpg',
    'images/photo6.jpg',
    'images/photo7.jpg',
    'images/photo8.jpg'
];

let currentIndex = 0;

const photoElement = document.getElementById('photo');
const backgroundPhotoElement = document.getElementById('backgroundPhoto');
const downBtn = document.getElementById('downBtn');
const upBtn = document.getElementById('upBtn');
const downloadBtn = document.getElementById('downloadBtn');

downBtn.addEventListener('click', showPrevPhoto);
upBtn.addEventListener('click', showNextPhoto);
downloadBtn.addEventListener('click', downloadPhoto);

function showPrevPhoto() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updatePhoto();
}

function showNextPhoto() {
    currentIndex = (currentIndex + 1) % photos.length;
    updatePhoto();
}

function updatePhoto() {
    const newSrc = photos[currentIndex];
    photoElement.src = newSrc;
    backgroundPhotoElement.src = newSrc;
}

function downloadPhoto() {
    const link = document.createElement('a');
    link.href = photos[currentIndex];
    link.download = `photo${currentIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
