// 📋 Copy Email on Form Submit
function copyEmail(event) {
    event.preventDefault();
    const email = "arjun.u1968@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email '" + email + "' copied to clipboard! You can now paste it into your email client.");
    }).catch(err => {
        console.error('Failed to copy email: ', err);
        alert("Failed to copy email. Please manually copy: " + email);
    });
}

// 🖋️ Typewriter Effect
const textArray = ["AI Enthusiast", "Software Developer", "Creative Thinker", "Problem Solver"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.querySelector(".typewriter-text");

// Config
const typingSpeed = 100;
const deletingSpeed = 60;
const delayBeforeDelete = 1500;
const delayBeforeType = 500;

function typeWriterEffect() {
    // Safety check if element exists
    if (!typewriterElement) return;

    const currentWord = textArray[textIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex++);
    }

    // Caret styling via JS toggle or CSS class
    typewriterElement.classList.toggle('typing', !isDeleting);

    let speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = delayBeforeDelete;
        isDeleting = true;
    } else if (isDeleting && charIndex === -1) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        speed = delayBeforeType;
    }

    setTimeout(typeWriterEffect, speed);
}


// 🌑 Preloader & Initialization
window.addEventListener("load", () => {
    // Start Typewriter
    typeWriterEffect();

    // Hide Preloader
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }
});


// 🔄 Scroll Reveal, Navbar Effect & Progress Bar
function handleScroll() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // 1. Progress Bar
    const scrolled = (scrollTop / scrollHeight) * 100;
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }

    // 2. Navbar Blurred Effect
    const navbar = document.getElementById("mainNav");
    if (navbar) {
        if (scrollTop > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    }

    // 3. Reveal Elements
    document.querySelectorAll(".reveal").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });

    // 4. Trigger Counters
    handleCounterTrigger();
}

// Throttled Scroll Listener
let isScrolling = false;
window.addEventListener("scroll", () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            handleScroll();
            isScrolling = false;
        });
        isScrolling = true;
    }
});


// 🔢 Animated Counters
let countersActivated = false;

function animateCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const duration = 2000; // ms
    const increment = target / (duration / 16); // 60fps approx
    
    let count = 0;
    const updateCount = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

function handleCounterTrigger() {
  const statsSection = document.querySelector(".stats-section");
  if (!countersActivated && statsSection) {
    const top = statsSection.getBoundingClientRect().top;
    if (top < window.innerHeight - 150) {
      animateCounters();
      countersActivated = true;
    }
  }
}

// 🔗 Smooth Scroll for Nav Links (Bootstrap offset fix)
document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Close mobile menu if open
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarToggler && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }

            // Smooth scroll
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
