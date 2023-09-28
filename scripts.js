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



const textElement = document.getElementById("logo");
textElement.addEventListener("mouseover", () => {
    textElement.textContent = "Борис Бакланов";
});

textElement.addEventListener("mouseout", () => {
    textElement.textContent = "Borys Baklanov";
});