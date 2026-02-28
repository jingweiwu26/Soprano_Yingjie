// =============================================
// HAMBURGER MENU
// =============================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Close menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

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
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    const videoId = card.dataset.videoId;
    // Use a fresh iframe src — works on both desktop and mobile
    mainPlayer.src = '';
    setTimeout(() => {
      mainPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`;
    }, 50);

    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  });
});

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -220, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: 220, behavior: 'smooth' });
});

// =============================================
// NAV: highlight active section on scroll
// =============================================
const navSectionLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section, footer');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navSectionLinks.forEach(link => link.classList.remove('active'));
      const id = entry.target.id;
      const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));

// =============================================
// NEWSLETTER FORM
// =============================================
const newsletterForm = document.getElementById('newsletterForm');
const newsletterThanks = document.getElementById('newsletterThanks');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsletterForm.style.display = 'none';
    newsletterThanks.style.display = 'block';
  });
}
