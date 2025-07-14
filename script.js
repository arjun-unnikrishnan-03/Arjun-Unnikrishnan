function copyEmail(event) {
  event.preventDefault();
  navigator.clipboard.writeText("arjun@example.com").then(() => {
    alert("Email copied to clipboard!");
  });
}
