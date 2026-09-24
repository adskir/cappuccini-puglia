// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  reveals.forEach(r => obs.observe(r));
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => navList.classList.toggle('open'));
}

// Dropdown tap-to-open on mobile: the caret button toggles the submenu,
// the link itself always navigates normally (both on mobile and desktop) —
// keeps behavior predictable instead of overloading one tap target with two jobs.
document.querySelectorAll('.nav-item').forEach(item => {
  const caret = item.querySelector('.nav-caret');
  if (!caret) return;
  caret.addEventListener('click', (e) => {
    e.preventDefault();
    item.classList.toggle('open');
  });
});

// Lightbox for gallery photos (news-article galleries; applies automatically
// to any future photos added to a .news-gallery, since it just looks for
// that class rather than specific images).
(function () {
  const galleryImgs = document.querySelectorAll('.news-gallery img');
  if (!galleryImgs.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<button class="lightbox-close" aria-label="Chiudi">&times;</button><img class="lightbox-img" src="" alt="">';
  document.body.appendChild(overlay);
  const lightboxImg = overlay.querySelector('.lightbox-img');
  const closeBtn = overlay.querySelector('.lightbox-close');

  function largestSrc(img) {
    const srcset = img.getAttribute('srcset');
    if (!srcset) return img.currentSrc || img.src;
    let best = null, bestWidth = 0;
    srcset.split(',').forEach(entry => {
      const parts = entry.trim().split(/\s+/);
      const url = parts[0];
      const w = parseInt(parts[1]) || 0;
      if (w >= bestWidth) { bestWidth = w; best = url; }
    });
    return best || img.currentSrc || img.src;
  }

  function openLightbox(img) {
    lightboxImg.src = largestSrc(img);
    lightboxImg.alt = img.alt || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  galleryImgs.forEach(img => {
    img.addEventListener('click', () => openLightbox(img));
  });
  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
})();

// Netlify Forms success handling (progressive enhancement)
const vocForm = document.getElementById('vocForm');
if (vocForm) {
  vocForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(vocForm);
    fetch('/', { method: 'POST', body: data })
      .then(() => {
        vocForm.style.display = 'none';
        const success = document.getElementById('successMsg');
        if (success) success.classList.add('show');
      })
      .catch(() => { vocForm.submit(); });
  });
}
