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
  if (i >= textArray.length) i = 0;

  if (!isDeleting && j <= textArray[i].length) {
    currentText = textArray[i].substring(0, j++);
    delay = 100; // Typing speed
  } else if (isDeleting && j >= 0) {
    currentText = textArray[i].substring(0, j--);
    delay = 50; // Deleting speed
  }

  document.querySelector(".typewriter-text").innerHTML = currentText + "|";

  // Pause after full word typed
  if (j === textArray[i].length && !isDeleting) {
    isDeleting = true;
    delay = 1200; // Pause before deleting
  }

  // Pause before typing next word
  if (j === 0 && isDeleting) {
    isDeleting = false;
    i++;
    delay = 500;
  }

  setTimeout(type, delay);
}

window.addEventListener("load", type);


window.onload = () => {
  type();
  document.getElementById("preloader").style.display = "none";

  // Dark Mode Restore
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
};

// Scroll Progress
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
