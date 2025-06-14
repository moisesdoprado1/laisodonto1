// Toggle menu mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Accordion FAQ
const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(header => {
  header.addEventListener('click', () => {
    const active = header.classList.contains('active');
    accordions.forEach(h => {
      h.classList.remove('active');
      h.nextElementSibling.style.maxHeight = null;
    });
    if (!active) {
      header.classList.add('active');
      header.nextElementSibling.style.maxHeight = header.nextElementSibling.scrollHeight + 'px';
    }
  });
});

// Carousel Depoimentos
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Lightbox Gallery
const galleryItems = document.querySelectorAll('.gallery-item');

const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    lightboxImg.src = item.src;
    lightbox.classList.add('active');
  });
});

lightbox.addEventListener('click', e => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove('active');
  }
});

// Inicializa mapa Leaflet
const map = L.map('map').setView([-18.9149, -48.2754], 13); // Uberlândia coords

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([-18.9149, -48.2754]).addTo(map)
  .bindPopup('Consultório Dra. Lais Fernandes - Uberlândia')
  .openPopup();
