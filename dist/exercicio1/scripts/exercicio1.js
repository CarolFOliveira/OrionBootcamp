"use strict";
const showWord = document.querySelector("#showWord");
const vowels = document.querySelector("#vowels");
const submitWord = document.querySelector("#submitWord");
const inputWord = document.querySelector("#word");
countVowels("JOGADOR");
function countVowels(verifyWord) {
    const VOGAIS = ["A", "E", "I", "O", "U"];
    let word = verifyWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (VOGAIS.includes(word[i])) {
            count++;
        }
    }
    showWord.textContent = verifyWord;
    vowels.textContent = `${count} vogal(is)`;
    return count;
}
submitWord.addEventListener('click', (event) => {
    event.preventDefault();
    const word = inputWord.value.toUpperCase();
    countVowels(word);
});
//# sourceMappingURL=exercicio1.js.map