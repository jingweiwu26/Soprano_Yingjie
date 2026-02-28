// =============================================
// VIDEO CAROUSEL
// =============================================
const cards = document.querySelectorAll('.video-card');
const mainPlayer = document.getElementById('main-player');
const carousel = document.getElementById('videoCarousel');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Update active state
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    // Swap the main player src
    const videoId = card.dataset.videoId;
    mainPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;

    // Scroll card into view in the carousel
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  });
});

// Scroll carousel buttons
prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -220, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: 220, behavior: 'smooth' });
});

// =============================================
// NAV: highlight active section on scroll
// =============================================
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section, footer');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const id = entry.target.id;
      const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));
