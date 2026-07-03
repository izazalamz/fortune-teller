console.log("main.js loaded");
// variables
const themeButtons = document.querySelectorAll(".theme-buttons .theme-button");
console.log(themeButtons);
// 10 fortunes
const fortunes = [
  "Believe in yourself and all that you are.",
  "Great things take time.",
  "Success begins with a single step.",
  "Today is a perfect day to start something new.",
  "Your hard work will soon pay off.",
  "Opportunities are everywhere.",
  "Every challenge is a chance to grow.",
  "Happiness comes from within.",
  "Stay patient and trust the journey.",
  "Dream big and dare to fail.",
];

// Four predefined themes
const themes = [
  {
    color: "#ffffff",
    background: "#2563eb",
    border: "#1e40af",
    fontSize: "22px",
    fontFamily: "Arial, sans-serif",
  },
  {
    color: "#222222",
    background: "#fef3c7",
    border: "#d97706",
    fontSize: "24px",
    fontFamily: "Georgia, serif",
  },
  {
    color: "#ffffff",
    background: "#15803d",
    border: "#14532d",
    fontSize: "21px",
    fontFamily: "'Trebuchet MS', sans-serif",
  },
  {
    color: "#ffffff",
    background: "#7c3aed",
    border: "#4c1d95",
    fontSize: "23px",
    fontFamily: "'Courier New', monospace",
  },
];

// Display a random quote only once when page loads
window.onload = function () {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  document.getElementById("fortuneText").textContent = fortunes[randomIndex];
};

// Change only the appearance
const box = document.getElementById("fortuneBox");
const text = document.getElementById("fortuneText");

function applyTheme(index) {
  console.log("Theme:", index);
  const theme = themes[index];

  box.style.backgroundColor = theme.background;
  box.style.borderColor = theme.border;
  text.style.color = theme.color;
  text.style.fontSize = theme.fontSize;
  text.style.fontFamily = theme.fontFamily;
}
themeButtons.forEach((button, index) => {
  button.addEventListener("click", () => applyTheme(index));
});
