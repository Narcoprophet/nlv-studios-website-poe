/* =====================================================
   MAIN.JS — NLV Studios
   Features: Navigation Toggle + Lightbox + Dynamic Content
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ===================================================
     1. NAVIGATION TOGGLE (HAMBURGER MENU)
     =================================================== */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    document.querySelectorAll('#navMenu a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          hamburger.classList.remove('open');
          navMenu.classList.remove('open');
        }
      });
    });
  }

  /* ===================================================
     2. LIGHTBOX FUNCTIONALITY
     =================================================== */
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbClose = document.getElementById('lb-close');

  if (lightbox && lbImg && lbClose) {
    document.addEventListener('click', e => {
      if (e.target.matches('.product-card img')) {
        lbImg.src = e.target.src;
        lightbox.classList.add('active');
      }
    });

    lbClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        lightbox.classList.remove('active');
      }
    });
  }

  /* ===================================================
     3. SEARCH FILTER FUNCTIONALITY
     =================================================== */
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      const query = e.target.value.toLowerCase();
      document.querySelectorAll('.product-card').forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = name.includes(query) ? 'block' : 'none';
      });
    });
  }

});

/* ================================
   ACCORDION LOGIC (FAQ PAGE)
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  
  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const content = item.querySelector(".accordion-content");

      // Toggle active
      item.classList.toggle("active");

      // Expand / collapse
      if (item.classList.contains("active")) {
        content.style.height = content.scrollHeight + "px";
      } else {
        content.style.height = "0px";
      }
    });
  });
});

