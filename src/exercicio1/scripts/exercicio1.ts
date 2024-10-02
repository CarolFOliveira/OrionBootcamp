const showWord = document.querySelector("#showWord") as HTMLElement;
const vowels = document.querySelector("#vowels") as HTMLElement;
const submitWord = document.querySelector("#submitWord") as HTMLButtonElement
const inputWord = document.querySelector("#word") as HTMLInputElement


countVowels("JOGADOR");

function countVowels(verifyWord: string):number {
    const VOGAIS: string[] = ["A","E","I","O","U"];
    let word: string = verifyWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()
    let count: number = 0;
    
    for(let i:number = 0; i<word.length; i++){
        if(VOGAIS.includes(word[i])){
            count++;
        }
    }
    showWord.textContent= verifyWord;
    vowels.textContent=`${count} vogal(is)`;
    
    return count;
}


submitWord.addEventListener('click',(event)=>{
    event.preventDefault();
    const word: string = inputWord.value.toUpperCase();
    countVowels(word);
    
})




