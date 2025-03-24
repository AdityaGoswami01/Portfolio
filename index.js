// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');

  // Animate Hamburger Icon
  hamburger.classList.toggle('toggle');

});
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling Down → Hide Header
    header.classList.add("hidden");
  } else {
    // Scrolling Up → Show Header
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});
// Optional: Add any interactive JavaScript functionality here
// For example, smooth scrolling for the buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = button.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Optional: Add animations for progress bars on scroll
const skillItems = document.querySelectorAll('.skill-item');

const animateProgressBars = () => {
  skillItems.forEach((item) => {
    const progressBar = item.querySelector('.progress-bar');
    const width = progressBar.style.width;
    progressBar.style.width = '0%'; // Reset width
    setTimeout(() => {
      progressBar.style.width = width; // Animate to original width
    }, 100);
  });
};

// Trigger animation when section is in view
const skillsobserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgressBars();
        skillsobserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

skillsprojectsobserver.observe(document.querySelector('.skills'));
// Optional: Add animations for project items on scroll
const projectItems = document.querySelectorAll('.project-item');

const animateProjects = () => {
  projectItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 200); // Staggered animation
  });
};

// Trigger animation when section is in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProjects();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(document.querySelector('.projects'));
// Optional: Add form submission handling
const form = document.querySelector('.contact-form form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Simulate form submission (replace with actual API call)
  console.log('Form Data:', data);
  alert('Thank you for your message! I will get back to you soon.');
  form.reset();
});
// Back to Top Button Functionality
const backToTopButton = document.querySelector('.back-to-top .btn');

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});