// Preloader
window.onload = () => {
  document.getElementById("preloader").style.display = "none";
};

// Scroll Progress
window.onscroll = () => {
  const scroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const percent = (scroll / height) * 100;
  document.getElementById("scroll-bar").style.width = percent + "%";
};

// Copy email on form submit
function copyEmail(event) {
  event.preventDefault();
  navigator.clipboard.writeText("arjun@example.com").then(() => {
    alert("Email copied to clipboard!");
  });
}
