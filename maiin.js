// ====== Dark/Light Mode Toggle ======
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent =
    document.body.classList.contains("dark-mode") ? "Light" : "Dark";
});

// ====== Responsive Navbar ======
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ====== Contact Form Validation ======
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields!");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  alert("Message sent successfully!");
  form.reset();
});