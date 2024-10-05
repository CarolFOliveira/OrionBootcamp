"use strict";
var showWord = document.querySelector("#showWord");
var vowels = document.querySelector("#vowels");
var submitWord = document.querySelector("#submitWord");
var inputWord = document.querySelector("#word");
countVowels("JOGADOR");
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
    var VOGAIS = ["A", "E", "I", "O", "U"];
    var word = verifyWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
    var count = word.split('').reduce(function (count, char) {
        return VOGAIS.includes(char) ? count + 1 : count;
    }, 0);
    showWord.textContent = verifyWord;
    vowels.textContent = "".concat(count, " vogal(is)");
    return count;
}
submitWord.addEventListener('click', function (event) {
    event.preventDefault();
    var word = inputWord.value.toUpperCase();
    countVowels(word);
});
