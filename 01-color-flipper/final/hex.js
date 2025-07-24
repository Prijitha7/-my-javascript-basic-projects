const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor.toUpperCase();
  document.body.style.backgroundColor = hexColor;
  btn.textContent = "Change Again!";
});

// Copy color to clipboard on click
color.addEventListener("click", function () {
  navigator.clipboard.writeText(color.textContent);
  alert("Color copied: " + color.textContent);
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
