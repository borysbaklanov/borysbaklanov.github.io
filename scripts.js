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
    const textElement = document.getElementById("logo-link");
    textElement.addEventListener("mouseover", () => {
        textElement.textContent = "Борис Бакланов";
    });
    textElement.addEventListener("mouseout", () => {
        textElement.textContent = "Borys Baklanov";
    });

/*  
    const linkElement = document.getElementById("logo-link");
    const linkText = document.createTextNode(linkElement.textContent);
    const parentElement = linkElement.parentNode;
    parentElement.replaceChild(linkText, linkElement);
*/
}



function copytoClipboard() {
  var emailText = "borys.baklanov@gmail.com";

  var textarea = document.createElement("textarea");
  textarea.value = emailText;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";

  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand("copy");

  document.body.removeChild(textarea);

  showTooltip(document.getElementById("email"));

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


/*
function filterSelection(filter) {  
  const elements = document.querySelectorAll('.content > div');
  elements.forEach(el => {
    if (filter === 'all') {
      el.style.display = 'flex';
      setTimeout(() => { el.style.opacity = 1; }, 10); // Slight delay for CSS transition
    } else {
      if (el.classList.contains(`filter-${filter}`)) {
        el.style.display = 'flex';
        setTimeout(() => { el.style.opacity = 1; }, 10);
      } else {
        el.style.opacity = 0;
        setTimeout(() => { el.style.display = 'none'; }, 300); // Match the CSS transition duration
      }
    }
  });
} 
*/

function filterSelection(filter) {  const elements = document.querySelectorAll('.content > div');
  const buttons = document.querySelectorAll('.filter-controls button');

  // First, fade out all elements
  elements.forEach(el => {
    el.style.opacity = 0;
  });

  // Remove active class from all buttons
  buttons.forEach(btn => {
    btn.classList.remove('filter-btn-active');
  });

  // Find the button that matches the filter and add the active class
  buttons.forEach(btn => {
    if (btn.getAttribute('onclick').includes(`'${filter}'`)) {
      btn.classList.add('filter-btn-active');
    }
  });

  // Wait for the fade-out transition to finish
  setTimeout(() => {
    elements.forEach(el => {
      if (filter === 'all' || el.classList.contains(`filter-${filter}`)) {
        el.style.display = 'flex'; // Adjust as needed
        setTimeout(() => { el.style.opacity = 1; }, 10); // Fade in
      } else {
        el.style.display = 'none';
      }
    });
  }, 300); // This matches the CSS transition duration for opacity
}

    // Get all elements with the class "myDiv"
    var divs = document.querySelectorAll(".filter-btn");

    // Loop through each div
    divs.forEach(function(div) {
        // Get the computed width of the div
        var computedWidth = window.getComputedStyle(div).getPropertyValue("width");

        // Remove "px" from the computed width and convert it to a number
        var widthNumber = parseFloat(computedWidth.replace("px", ""));

        // Add 16 pixels to the computed width
        var newWidth = widthNumber + 16;

        // Set the new width of the div
        div.style.width = newWidth + "px";
    });

document.addEventListener("DOMContentLoaded", () => {
  filterSelection('all'); // Ensure all items are shown on initial load
});

