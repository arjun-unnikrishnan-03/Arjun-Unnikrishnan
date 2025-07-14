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

// 🖋️ Typewriter Effect (Improved Loop)
const textArray = ["AI Enthusiast", "Software Developer", "Problem Solver"]; // Changed one for variety
let textIndex = 0; // Current text in textArray
let charIndex = 0; // Current character being typed
let isDeleting = false;
const typewriterElement = document.querySelector(".typewriter-text");
const typingSpeed = 100; // ms per character
const deletingSpeed = 60; // ms per character
const delayBeforeDelete = 1500; // ms to wait after typing
const delayBeforeType = 500; // ms to wait before typing next

function typeWriterEffect() {
    const currentWord = textArray[textIndex];

    if (isDeleting) {
        // Delete characters
        typewriterElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        // Type characters
        typewriterElement.textContent = currentWord.substring(0, charIndex++);
    }

    // Add/remove blinking caret
    typewriterElement.classList.toggle('typing-caret', !isDeleting || charIndex > 0);

    let speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        // Typed current word fully, now wait and start deleting
        speed = delayBeforeDelete;
        isDeleting = true;
    } else if (isDeleting && charIndex === -1) {
        // Deleted current word fully, move to next word
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        speed = delayBeforeType;
    }

    setTimeout(typeWriterEffect, speed);
}


// 🌑 Preloader
window.onload = () => {
    typeWriterEffect(); // Start typewriter effect
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.display = "none";
    }
};

// 🔄 Scroll Reveal + Progress Bar
function handleScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }

    document.querySelectorAll(".reveal").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 150) { // Adjusted offset for reveal
            el.classList.add("active");
        }
    });

    // Trigger counters on scroll
    const statsSection = document.getElementById("stats");
    if (!window.countersStarted && statsSection && statsSection.getBoundingClientRect().top < window.innerHeight - 100) {
        animateCounters();
        window.countersStarted = true; // Ensure it runs only once
    }
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);
// Run handleScroll once on load to reveal elements already in view
document.addEventListener("DOMContentLoaded", handleScroll);


// 🔗 Smooth Scroll for Nav Links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const targetElement = document.querySelector(this.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
                // Collapse navbar on mobile after clicking a link
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarToggler && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click(); // Simulate click to close
                }
            }
        }
    });
});

// 🔢 Animated Counters
// Function moved outside and now part of window scope or module if needed.
// It's called by handleScroll when stats section comes into view.
function animateCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / 100;
    counter.innerText = "0";

    const updateCount = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}



// 🎯 Trigger counter animation on mouse hover
// ✅ Trigger counter animation when .stats-section scrolls into view
let countersAnimated = false;

function handleCounterTrigger() {
  const statsSection = document.querySelector(".stats-section");
  if (!countersAnimated && statsSection) {
    const sectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      animateCounters();
      countersAnimated = true;
    }
  }
}

// ✅ Works on both mobile + desktop
window.addEventListener("scroll", handleCounterTrigger);
window.addEventListener("load", handleCounterTrigger);





// Typing caret animation for typewriter text
// This CSS is added directly in JavaScript to ensure it's loaded after element is available
const style = document.createElement('style');
style.innerHTML = `
    .typing-caret {
        border-right: 2px solid #0dcaf0; /* Use primary color */
        animation: blink-caret 0.75s step-end infinite;
    }
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #0dcaf0; }
    }
`;
document.head.appendChild(style);

