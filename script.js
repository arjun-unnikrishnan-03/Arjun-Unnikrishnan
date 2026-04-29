// 📧 Send Email Logic (Mailto)
function sendEmail(event) {
    event.preventDefault();

    // Get form values
    const form = event.target;
    // Assuming the order is Name (text), Email (email), Message (textarea)
    const name = form.querySelector('input[type="text"]').value;
    const senderEmail = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    const myEmail = "arjun.u1968@gmail.com";
    const subject = `Portfolio Signal from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${senderEmail}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    // Open default mail client
    window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;

    alert("Opening your email client to send the signal...");
}

// 🌑 Preloader Logic
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        // Instant removal for that raw/analog feel
        preloader.style.display = "none";
    }
});

// 🔢 Minimalist Counters
// Simpler logic for the Chani style - less animation, more direct
let countersActivated = false;

function animateCounters() {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = Math.ceil(target / 50); // Fast increment

        const updateCount = () => {
            if (count < target) {
                count += increment;
                if (count > target) count = target;
                counter.innerText = count;
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// Trigger counters on intersection
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersActivated) {
            animateCounters();
            countersActivated = true;
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector(".section-feature"); // The about section with counters
if (statsSection) {
    observer.observe(statsSection);
}

// 📈 Scroll Progress Bar
const scrollProgress = document.querySelector(".scroll-progress");
if (scrollProgress) {
    const updateProgress = () => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
        scrollProgress.style.width = progress + "%";
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
}

// ✨ Scroll Reveal — fade + translate up on intersection
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealEls.forEach((el, i) => {
        // Stagger siblings within the same parent
        el.style.transitionDelay = (i % 6) * 80 + "ms";
        revealObserver.observe(el);
    });
} else {
    // Fallback: just show everything
    revealEls.forEach(el => el.classList.add("is-visible"));
}

// 🎯 Smooth-scroll offset compensation for sticky navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href === "#" || href.length < 2) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const navH = document.querySelector(".custom-navbar")?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navH - 8;
        window.scrollTo({ top, behavior: "smooth" });
    });
});
