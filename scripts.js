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
    const textElement = document.getElementById("logo");
    logo.style.pointerEvents = "auto";
    textElement.addEventListener("mouseover", () => {
        textElement.textContent = "Борис Бакланов";
    });

    textElement.addEventListener("mouseout", () => {
        textElement.textContent = "Borys Baklanov";
    });
}