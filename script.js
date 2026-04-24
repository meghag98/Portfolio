
// Dark mode toggle
const text = "Megha G 👩‍💻";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

type();
const toggle = document.getElementById("toggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
};

// Scroll animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// Contact form
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message Sent!");
});