"use strict";
const showWord = document.querySelector("#showWord");
const vowels = document.querySelector("#vowels");
const submitWord = document.querySelector("#submitWord");
const inputWord = document.querySelector("#word");
/**
 * countVowels
 *
 * Função que retorna a quantidade de vogais contida na palavra inserida.
 *
 * @param verifyWord - a palavra a ser verificada.
 *
 * @returns A quantidade de vogais encontrada na palavra.
 */
function countVowels(verifyWord) {
    const VOGAIS = ["A", "E", "I", "O", "U"];
    let word = verifyWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
    let count = word.split('').reduce((count, char) => {
        return VOGAIS.includes(char) ? count + 1 : count;
    }, 0);
    showWord.textContent = verifyWord;
    vowels.textContent = `${count} vogal(is)`;
    return count;
}
countVowels("JOGADOR");
submitWord.addEventListener('click', (event) => {
    event.preventDefault();
    const word = inputWord.value.toUpperCase();
    countVowels(word);
});
