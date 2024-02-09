const morseCodeMap = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    " ": " ",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
};

function textToMorse(text) {
    return text.toLowerCase().split("").map(char => morseCodeMap[char] || char).join(" ");
}

function morseToText(morse) {
    return morse.split(" ").map(code => {
        for (let char in morseCodeMap) {
            if (morseCodeMap[char] === code) return char;
        }
        return code
    }).join(" ")
}

// document.getElementById("convertButton").addEventListener("click", function () {
//     const inputText = document.getElementById("textInput").value.trim();
//     const outputElement = document.getElementById("output");

//     if (inputText === "") {
//         outputElement.textContent = "You must type something first.";
//     } else if (/[a-z]/i.test(inputText)) {
//         const morseCode = textToMorse(inputText);
//         outputElement.textContent = "Morse Code: " + morseCode + inputText;
//     } else if (inputText.toLowerCase() === "i love you") {
//         const morseCode = textToMorse(inputText);
//         outputElement.textContent = "Morse Code: " + morseCode + " me2.";
//     } else {
//         const text = morseToText(inputText);
//         outputElement.textContent = "Text: " + text;
//     }
// });

document.getElementById("convertButton").addEventListener("click", function () {
    const inputText = document.getElementById("textInput").value.trim();
    const outputElement = document.getElementById("output");

    if (inputText === "") {
        outputElement.textContent = "You must type something first.";
    } else if (inputText.toLowerCase() === "i love you") {
        const morseCode = textToMorse(inputText);
        outputElement.textContent = "Morse Code: " + morseCode + " me2 ♡";
    } else if (/[a-z]/i.test(inputText)) {
        const morseCode = textToMorse(inputText);
        outputElement.textContent = "Morse Code: " + morseCode;
    } else {
        const text = morseToText(inputText);
        outputElement.textContent = "Text: " + text;
    }
});