function copyEmail(event) {
  event.preventDefault();
  navigator.clipboard.writeText("arjun.u1968@gmail.com.com").then(() => {
    alert("Email copied to clipboard!");
  });
}
const textArray = ["AI Enthusiast", "Software Developer", "Creative Thinker"];
let i = 0, j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  if (i < textArray.length) {
    if (!isDeleting && j <= textArray[i].length) {
      currentText = textArray[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = textArray[i].substring(0, j--);
    }

    document.querySelector(".typewriter-text").innerHTML = currentText + "|";

    if (j === textArray[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % textArray.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }
}
window.onload = type;
window.onscroll = function () {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scrollTop / scrollHeight) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
};
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}

window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
};
window.addEventListener("load", function () {
  document.getElementById("preloader").style.display = "none";
});

