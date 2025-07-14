function toggleDarkMode() {
  document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-light");
  document.body.classList.toggle("text-dark");
}

function copyEmail(event) {
  event.preventDefault();
  const email = "your-email@example.com"; // Replace with your real email
  navigator.clipboard.writeText(email).then(() => {
    alert("Email copied to clipboard: " + email);
  });
}
