function copyEmail(event) {
  event.preventDefault();
  navigator.clipboard.writeText("arjun.u1968@gmail.com.com").then(() => {
    alert("Email copied to clipboard!");
  });
}
