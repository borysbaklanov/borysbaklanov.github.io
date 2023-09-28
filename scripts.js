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