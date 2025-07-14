// 📋 Copy Email on Form Submit
function copyEmail(event) {
  event.preventDefault();
  navigator.clipboard.writeText("arjun.u1968@gmail.com").then(() => {
    alert("Email copied to clipboard!");
  });
}

// 🖋️ Typewriter Effect (run once, then show all)
const textArray = ["AI Enthusiast", "Software Developer", "Creative Thinker"];
let i = 0, j = 0;
let currentText = "";

function typeOnce() {
  if (i >= textArray.length) {
    // ✅ Show all phrases after animation ends
    document.querySelector(".typewriter-text").innerHTML = textArray.join(" | ");
    return;
  }

  if (j <= textArray[i].length) {
    currentText = textArray[i].substring(0, j++);
    document.querySelector(".typewriter-text").innerHTML = currentText + "|";
    setTimeout(typeOnce, 100); // typing speed
  } else {
    // ✅ Wait before moving to next word
    setTimeout(() => {
      i++;
      j = 0;
      currentText = "";
      typeOnce();
    }, 1000);
  }
}

// 🌑 Dark Mode Memory + Preloader
window.onload = () => {
  typeOnce();
  document.getElementById("preloader").style.display = "none";
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
};

// 🔄 Scroll Reveal + Progress Bar
window.onscroll = function () {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";

  document.querySelectorAll(".reveal").forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add("active");
  });
};

// 🔗 Smooth Scroll for Nav Links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 🔢 Animated Counters
function animateCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const speed = 200;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

// ⏱️ Trigger counters on scroll
window.addEventListener("scroll", () => {
  const statsSection = document.getElementById("stats");
  if (statsSection && statsSection.getBoundingClientRect().top < window.innerHeight - 100) {
    animateCounters();
  }
});
