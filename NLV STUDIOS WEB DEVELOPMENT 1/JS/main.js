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

// =============================
// ENQUIRY FORM VALIDATION + EMAILJS
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enquiryForm");
  const feedback = document.getElementById("formFeedback");

  // Prefill saved name/email from localStorage
  if (localStorage.getItem("name")) document.getElementById("name").value = localStorage.getItem("name");
  if (localStorage.getItem("email")) document.getElementById("email").value = localStorage.getItem("email");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    // Validation
    if (name.length < 3) return showFeedback("Please enter your full name.", "red");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showFeedback("Please enter a valid email.", "red");
    if (subject === "") return showFeedback("Please select a subject.", "red");
    if (message.length < 10) return showFeedback("Message must be at least 10 characters.", "red");

    showFeedback("Sending your enquiry...", "green");

    // Save name/email for next visit
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    // EmailJS parameters for NLV Studios
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      to_email: "info@nlvstudios.co.za"
    };

    // Send email to studio
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
      .then(() => {
        // Optional: Send copy to user
        const copyParams = {
          from_name: "NLV Studios",
          from_email: "info@nlvstudios.co.za",
          to_email: email,
          subject: `Copy of your enquiry: ${subject}`,
          message: `Hello ${name},\n\nHere’s a copy of your enquiry:\n\n${message}\n\nThank you for contacting NLV Studios.`
        };
        return emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", copyParams);
      })
      .then(() => {
        showFeedback("Enquiry sent successfully! You should also receive a copy in your inbox.", "green");
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        showFeedback("Something went wrong. Please try again later.", "red");
      });
  });

  function showFeedback(msg, color) {
    feedback.textContent = msg;
    feedback.style.color = color;
    feedback.style.display = "block";
  }
});
