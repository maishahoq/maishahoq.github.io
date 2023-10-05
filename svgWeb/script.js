const svgElement = document.querySelector("svg");
const textContainer = document.getElementById("textContainer");

// reference to the specific <g> element, which is the cloud for us, not the winds
const gElement = document.getElementById("MzFovhb0gbCDskhfiPv9T");

let textVisible = false; // Track if the text is visible or not
let text = "Hello, you are beautiful and calm.";
// Function to toggle text visibility when the <g> is clicked
gElement.addEventListener("click", function () {
  if (textVisible) {
    // If text is visible, hide it
    textContainer.innerHTML = ""; // Clear the text container
  } else {
    // If text is not visible, show it
    const textElement = document.createElement("p");
    textElement.textContent = text;
    textContainer.appendChild(textElement);
  }

  // Toggle the text visibility state
  textVisible = !textVisible;
});
