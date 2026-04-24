
// Dark mode toggle
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