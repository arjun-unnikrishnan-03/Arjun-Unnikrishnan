// Preloader
window.onload = () => {
  document.getElementById('preloader').style.display = 'none';
};

// Scroll Progress Bar
window.onscroll = function () {
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
};

// Typewriter Effect
const text = "Arjun Unnikrishnan";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Contact email copy
function copyEmail(e) {
  e.preventDefault();
  const email = "your@email.com"; // Replace this
  navigator.clipboard.writeText(email);
  alert("📧 Email copied to clipboard!");
}
