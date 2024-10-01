var showWord = document.querySelector("#showWord");
var vowels = document.querySelector("#vowels");
var submitWord = document.querySelector("#submitWord");
var inputWord = document.querySelector("#word");
countVowels("JOGADOR");
function countVowels(verifyWord) {
    var VOGAIS = ["A", "E", "I", "O", "U"];
    var word = verifyWord.toUpperCase();
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (VOGAIS.includes(word[i])) {
            count++;
        }
    }
    showWord.textContent = verifyWord;
    vowels.textContent = "".concat(count, " vogal(is)");
    return count;
}
submitWord.addEventListener('click', function (event) {
    event.preventDefault();
    var word = inputWord.value;
    countVowels(word);
});
