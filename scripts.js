const words = ["Danke.", "Thank you.", "Дякую."];
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}
function changeText() {
    const randomTextElement = document.getElementById("ty");
    randomTextElement.textContent = getRandomWord();
}
window.addEventListener("load", changeText);


if (window.matchMedia('(min-width: 768px)').matches) {
    const textElement = document.getElementById("logo-container");
    textElement.addEventListener("mouseover", () => {
        textElement.textContent = "Борис Бакланов";
    });
    textElement.addEventListener("mouseout", () => {
        textElement.textContent = "Borys Baklanov";
    });

    const linkElement = document.getElementById("logo-link");
    const linkText = document.createTextNode(linkElement.textContent);
    const parentElement = linkElement.parentNode;
    parentElement.replaceChild(linkText, linkElement);

}



function copytoClipboard() {
  var emailElement = document.getElementById("email");
  var emailText = emailElement.innerText;

  var textarea = document.createElement("textarea");
  textarea.value = emailText;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";

  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand("copy");

  document.body.removeChild(textarea);

  showTooltip(emailElement);

}


function showTooltip(element) {
  var tooltip = document.getElementById("copytooltip");

  // Calculate the center position of the span element
  var rect = element.getBoundingClientRect();
  var centerX = rect.left + rect.width / 2 + window.pageXOffset;

  // Set tooltip position
  tooltip.style.left = centerX - tooltip.offsetWidth / 2 + "px";
  tooltip.style.top = rect.top - 24 - tooltip.offsetHeight + window.pageYOffset + "px";

  // Show the tooltip
  tooltip.style.display = "block";
  tooltip.style.height = 16 + "px"

  // Hide the tooltip after a short delay
  setTimeout(function() {
    tooltip.style.display = "none";
  }, 2000); // Adjust the delay as needed

}


  const rotatingWheel = document.getElementById('rotating-wheel');

  rotatingWheel.addEventListener('mouseenter', () => {
    rotatingWheel.classList.add('hovered');

    // Get the current rotation angle
    const style = getComputedStyle(rotatingWheel);
    const transform = style.getPropertyValue('transform');
    const matrix = new DOMMatrix(transform);
    const currentRotation = matrix.rotate(0, 0).angle;

    // Set the animation direction based on the current rotation angle
    rotatingWheel.style.animationDirection = currentRotation < 0 ? 'reverse' : 'normal';
  });

  rotatingWheel.addEventListener('mouseleave', () => {
    rotatingWheel.classList.remove('hovered');
  });