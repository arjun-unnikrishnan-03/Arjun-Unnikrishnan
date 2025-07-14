function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function copyEmail(event) {
  event.preventDefault();
  const email = "youremail@example.com";
  navigator.clipboard.writeText(email).then(() => {
    alert("Email copied to clipboard: " + email);
  });
}
