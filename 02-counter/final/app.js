// set inital value to zero
// Initial count value
let count = 0;

// Select value display and all buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// Loop through each button and add click events
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    // Update count based on button clicked
    switch (true) {
      case styles.contains("decrease"):
        count--;
        break;
      case styles.contains("increase"):
        count++;
        break;
      default:
        count = 0;
    }

    // Change color based on value
    value.style.color = count > 0 ? "green" : count < 0 ? "red" : "#222";

    // Update display
    value.textContent = count;
  });
});
