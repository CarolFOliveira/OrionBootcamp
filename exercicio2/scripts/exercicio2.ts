interface Pessoa{
    id:number;
    name:string;
    bio:string;
}


let lista: Array<Pessoa> = [
    {   
        id : 1,
        name: "Ada Lovelace", 
        bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
    },
    {
        id : 2, 
        name: "Alan Turing", 
        bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"
    },
    {
        id : 3, 
        name: "Nikola Tesla", 
        bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
    },
    {
        id : 4, 
        name: "Nicolau Copérnico", 
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    }
    ];

const list = document.querySelector("#list") as HTMLUListElement
const input_search = document.querySelector("#input_search") as HTMLInputElement;
const input_name = document.createElement("input") as HTMLInputElement;
const btn_showList = document.querySelector("#btn_showList") as HTMLButtonElement;
const btn_searchBio = document.querySelector("#btn_searchBio") as HTMLButtonElement;
const btn_searchName = document.querySelector("#btn_searchName") as HTMLButtonElement;
const btn_name = document.createElement("button") as HTMLButtonElement;
const btn_remove = document.querySelector("#btn_remove") as HTMLButtonElement;
const btn_modify = document.querySelector("#btn_modify") as HTMLButtonElement;
const result_search = document.querySelector(".result_search") as HTMLDivElement;
const p = document.createElement("p") as HTMLElement



function showList() {
    list.innerHTML = '';
    lista.forEach((item) => {
        const item_list = document.createElement("li") as HTMLLIElement
        let text_list =  document.createTextNode(`Id: ${item.id} - ${item.name} => ${item.bio}`)
        item_list.appendChild(text_list)
        item_list.classList.add("list-group-item");
        list.appendChild(item_list);
        });
   
}
showList();

function searchId(id: number) {
    return lista.find((pessoa) => pessoa.id === id)
   }

function getId():number{
    const id:string = input_search.value;
    const searchId: number = parseInt(id);
    return searchId;
}

function showResult(result:string){
    p.textContent = result;
    result_search.appendChild(p);
}

btn_searchBio.addEventListener('click', (event)=>{
    event.preventDefault();
    const resultBio: string = showBio_funcional(getId())
    showResult(resultBio);
    
})

btn_searchName.addEventListener('click', (event)=>{
    event.preventDefault();
    const resultName: string = showName_funcional(getId())
    showResult(resultName);
    
})

btn_remove.addEventListener('click', (event)=>{
    event.preventDefault();
    const result: string = removeItem_funcional(getId(),lista)
    showResult(result);
    showList();
    
})

btn_modify.addEventListener('click', (event)=>{
    event.preventDefault();
    const id:number = getId()
    if(searchId(id)){
        input_name.placeholder = "Insira o novo nome";
        input_name.id = "input_name"
        result_search.appendChild(input_name);
        btn_name.id = "btn_name"
        btn_name.textContent = "Atualizar"
        result_search.appendChild(btn_name);
        update_name(id)
        
    } else{
        p.textContent = "Id não encontrado"
    }
        
    
    
})

function update_name(searchId:number){
    btn_name.addEventListener('click',(event)=>{
        event.preventDefault();
        const newname: string = input_name.value;
        const resultName: string = modify_funcional(searchId,newname,lista)
        showResult(resultName);
        showList();
        result_search.removeChild(input_name);
        result_search.removeChild(btn_name);
    })
}

// a) Crie uma função que retorne a bio do id passado

function showBio_imperativo(id:number): string{
	let answer: string = ""
    for(let i:number=0; i<lista.length; i++){
   		
   		if(lista[i].id === id){
            console.log("Bio do id passado: ")
 			answer = lista[i].bio
            break
        }
    }
    if(answer === ""){
    	answer = "Id não encontrado"
    }
    return answer;
    
}
console.log(showBio_imperativo(3))

const showBio_funcional = (id:number):string => {
    const item: any = searchId(id)
    return item ? item.bio : "Id não encontrado";
};

// b) Crie uma função que retorne o name do id passado

function showName_imperativo(id:number): string{
	let answer: string = ""
    for(let i:number=0; i<lista.length; i++){
   		
   		if(lista[i].id === id){
            console.log("Name do id passado: ")
 			answer = lista[i].name
            break
        }
    }
    if(answer === ""){
    	answer = "Id não encontrado"
    }
    return answer;
    
}
console.log(showName_imperativo(3))

const showName_funcional = (id:number):string  => {
    const item : any = searchId(id)
    return item ? item.name : "Id não encontrado";
};



// c) Crie uma função que apague um item da lista a partir de um id passado

function removeItem_imperativo(id:number):string{
	let answer:string = ""
    for(let i:number=0; i<lista.length; i++){
   		
   		if(lista[i].id === id){
        	answer = `Item removido: \n id: ${id} \n name: ${lista[i].name} \n bio: ${lista[i].bio}`
 			lista.splice(i,1)
            console.log(lista)
            break
        }
    }
    if(answer === ""){
    	answer = "Id não encontrado"
    }
    return answer;
    
}
console.log(removeItem_imperativo(6))

const removeItem_funcional = (id:number, lista:Array<Pessoa>):string => {
    const item : any = searchId(id);
    const index : any = lista.indexOf(item)
    if(index !== -1){
        lista.splice(index,1)
    }
    
    return item ? "Item removido" : "Id não encontrado";
};



// d) Crie uma função que altere a bio ou o name a partir de um id passado

function modify_imperativo(id:number, name:string):string{
    let answer:string = ""
    for(let i:number=0; i<lista.length; i++){
   		
   		if(lista[i].id === id){
        	lista[i].name = name;
            console.log(lista[i])
            answer = "Item modificado"
            break
        }
    }
    if(answer === ""){
    	answer = "Id não encontrado"
    }
    return answer;
}

console.log(modify_imperativo(4,"Elon Musk"))


const modify_funcional = (id:number,nome:string, lista:Array<Pessoa>):string => {
    const item: any= searchId(id);
    const index : any = lista.indexOf(item);
    lista[index].name = nome;
    console.log(item)
    return item ? "Nome alterado" : "Id não encontrado";
};
