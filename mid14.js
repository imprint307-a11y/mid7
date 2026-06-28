// Mobile Navbar
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const icon = menuToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

// Close mobile menu after clicking link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    const icon = menuToggle.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  });
});

// Generate professional doctor profile photo as SVG placeholder
function generateDoctorProfile() {
  const svg = `
    <svg width="900" height="1100" viewBox="0 0 900 1100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#dff7ff"/>
          <stop offset="45%" stop-color="#f8fbff"/>
          <stop offset="100%" stop-color="#d1fae5"/>
        </linearGradient>

        <linearGradient id="coat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#e2e8f0"/>
        </linearGradient>

        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#0f172a" flood-opacity="0.18"/>
        </filter>
      </defs>

      <rect width="900" height="1100" fill="url(#bg)"/>

      <circle cx="730" cy="180" r="120" fill="#38bdf8" opacity="0.18"/>
      <circle cx="150" cy="880" r="170" fill="#0f766e" opacity="0.13"/>
      <circle cx="160" cy="190" r="70" fill="#14b8a6" opacity="0.14"/>

      <g filter="url(#shadow)">
        <path d="M245 1080 C260 770 330 635 450 635 C570 635 640 770 655 1080 Z" fill="url(#coat)"/>
        <path d="M345 680 L450 880 L555 680 L590 1080 L310 1080 Z" fill="#ffffff"/>
        <path d="M392 680 L450 805 L508 680" fill="#0f766e" opacity="0.9"/>
        <path d="M450 805 L410 1080 L490 1080 Z" fill="#0f766e" opacity="0.95"/>

        <path d="M325 1080 L350 740 L415 1080 Z" fill="#f8fafc"/>
        <path d="M575 1080 L550 740 L485 1080 Z" fill="#f8fafc"/>

        <path d="M355 418 C340 315 385 235 450 235 C515 235 560 315 545 418 C535 532 500 595 450 595 C400 595 365 532 355 418 Z" fill="#f0c7a2"/>
        <path d="M350 390 C340 270 390 205 450 205 C520 205 565 275 550 390 C520 350 380 350 350 390 Z" fill="#263238"/>

        <path d="M390 442 C405 430 425 430 440 442" stroke="#263238" stroke-width="8" stroke-linecap="round" fill="none"/>
        <path d="M460 442 C475 430 495 430 510 442" stroke="#263238" stroke-width="8" stroke-linecap="round" fill="none"/>
        <path d="M450 455 C440 488 440 508 455 518" stroke="#c08457" stroke-width="6" stroke-linecap="round" fill="none"/>
        <path d="M400 540 C430 568 475 568 505 540" stroke="#7f1d1d" stroke-width="7" stroke-linecap="round" fill="none"/>

        <circle cx="415" cy="462" r="8" fill="#111827"/>
        <circle cx="485" cy="462" r="8" fill="#111827"/>

        <path d="M370 720 C365 760 360 840 390 900" stroke="#64748b" stroke-width="14" stroke-linecap="round" fill="none"/>
        <path d="M530 720 C535 760 540 840 510 900" stroke="#64748b" stroke-width="14" stroke-linecap="round" fill="none"/>
        <circle cx="390" cy="900" r="24" fill="#0f766e"/>
        <circle cx="510" cy="900" r="24" fill="#0f766e"/>
      </g>

      <text x="450" y="1020" text-anchor="middle" font-family="Arial" font-size="34" font-weight="800" fill="#0f172a">
        Professional Medical Portfolio
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

document.getElementById("profilePhoto").src = generateDoctorProfile();

// Generate research thumbnails automatically
function generateThumbnail(type) {
  const data = {
    cardiology: {
      title: "Cardiology",
      icon: "♥",
      color1: "#0f766e",
      color2: "#38bdf8"
    },
    emergency: {
      title: "Emergency",
      icon: "+",
      color1: "#dc2626",
      color2: "#fb7185"
    },
    "public-health": {
      title: "Public Health",
      icon: "●",
      color1: "#16a34a",
      color2: "#86efac"
    },
    research: {
      title: "Research",
      icon: "∞",
      color1: "#4f46e5",
      color2: "#38bdf8"
    }
  };

  const item = data[type];

  const svg = `
    <svg width="700" height="420" viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${item.color1}"/>
          <stop offset="100%" stop-color="${item.color2}"/>
        </linearGradient>
      </defs>

      <rect width="700" height="420" rx="0" fill="url(#g)"/>
      <circle cx="575" cy="80" r="105" fill="white" opacity="0.14"/>
      <circle cx="120" cy="330" r="130" fill="white" opacity="0.12"/>

      <text x="70" y="155" font-family="Arial" font-size="82" font-weight="900" fill="white">
        ${item.icon}
      </text>

      <text x="70" y="245" font-family="Arial" font-size="48" font-weight="900" fill="white">
        ${item.title}
      </text>

      <text x="70" y="300" font-family="Arial" font-size="24" font-weight="500" fill="white" opacity="0.88">
        Medical Portfolio Project
      </text>

      <rect x="70" y="335" width="220" height="12" rx="6" fill="white" opacity="0.7"/>
      <rect x="70" y="360" width="320" height="12" rx="6" fill="white" opacity="0.35"/>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

document.querySelectorAll(".project-thumb").forEach((img) => {
  const type = img.dataset.thumb;
  img.src = generateThumbnail(type);
});

// Contact form demo behavior
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  formMessage.textContent =
    "Thank you! Your message has been prepared successfully. Please connect this form to a backend service to send real emails.";

  contactForm.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 6000);
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Reveal animation on scroll
const revealElements = document.querySelectorAll(
  ".skill-card, .timeline-item, .education-card, .project-card, .testimonial-card, .blog-card"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});