const showWord = document.querySelector("#showWord") as HTMLElement;
const vowels = document.querySelector("#vowels") as HTMLElement;
const submitWord = document.querySelector("#submitWord") as HTMLButtonElement
const inputWord = document.querySelector("#word") as HTMLInputElement


/**
 * countVowels
 *
 * Função que retorna a quantidade de vogais contida na palavra inserida.
 * 
 * @param verifyWord - a palavra a ser verificada.
 *  
 * @returns A quantidade de vogais encontrada na palavra.
 */

function countVowels(verifyWord: string):number {
    const VOGAIS: string[] = ["A","E","I","O","U"];
    let word: string = verifyWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()
    
    let count: number = word.split('').reduce((count, char) => {
        return VOGAIS.includes(char) ? count + 1 : count;
    }, 0);

    showWord.textContent= verifyWord;
    vowels.textContent=`${count} vogal(is)`;
    
    return count;
}

countVowels("JOGADOR");


submitWord.addEventListener('click',(event)=>{
    event.preventDefault();
    const word: string = inputWord.value.toUpperCase();
    countVowels(word);
    
})




