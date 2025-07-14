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

