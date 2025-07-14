function copyEmail(event) {
  event.preventDefault();
  navigator.clipboard.writeText("arjun.u1968@gmail.com").then(() => {
    alert("Email copied to clipboard!");
  });
}

const textArray = ["AI Enthusiast", "Software Developer", "Creative Thinker"];
let i = 0, j = 0;
let currentText = "";
let isDeleting = false;
let delay = 100;

function type() {
  if (i >= textArray.length) return; // Stop after last word is shown

  if (!isDeleting && j <= textArray[i].length) {
    currentText = textArray[i].substring(0, j++);
    delay = 100;
  } else if (isDeleting && j >= 0) {
    currentText = textArray[i].substring(0, j--);
    delay = 50;
  }

  document.querySelector(".typewriter-text").innerHTML = currentText + "|";

  if (j === textArray[i].length && !isDeleting) {
    if (i === textArray.length - 1) {
      document.querySelector(".typewriter-text").innerHTML = textArray[i]; // Show last word only, stop blinking
      return;
    }
    isDeleting = true;
    delay = 1000;
  }

  if (j === 0 && isDeleting) {
    isDeleting = false;
    i++;
    delay = 500;
  }

  setTimeout(type, delay);
}


window.onload = () => {
  type(); // ✅ Only one call
  document.getElementById("preloader").style.display = "none";

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
};

// Scroll Progress & Reveal
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

// Smooth Scroll
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: "smooth" });
    }
  });
});
// Counter Animation
function animateCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const speed = 200; // lower = faster
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

window.addEventListener("scroll", () => {
  const statsSection = document.getElementById("stats");
  if (statsSection && statsSection.getBoundingClientRect().top < window.innerHeight - 100) {
    animateCounters();
  }
});
