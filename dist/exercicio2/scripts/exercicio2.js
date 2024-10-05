"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var lista = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    }
];
var list = document.querySelector("#list");
var input_search = document.querySelector("#input_search");
var input_name = document.createElement("input");
var btn_showList = document.querySelector("#btn_showList");
var btn_searchBio = document.querySelector("#btn_searchBio");
var btn_searchName = document.querySelector("#btn_searchName");
var btn_name = document.createElement("button");
var btn_remove = document.querySelector("#btn_remove");
var btn_modify = document.querySelector("#btn_modify");
var result_search = document.querySelector(".result_search");
var p = document.createElement("p");
/**
 * showList
 *
 * Atualiza a lista HTML com os itens do array `lista`.
 *
 * Cada item é representado como um elemento `<li>` com a classe `list-group-item`.
 *
 *@remarks
 * - A função assume que `lista` é uma variável global.
 *
 *  - A função não recebe parâmetros.
 *
 * - Cada item em `lista` deve ter as propriedades `id`, `name` e `bio`.
 *
 */
function showList() {
    list.innerHTML = '';
    lista.forEach(function (item) {
        var item_list = document.createElement("li");
        var text_list = document.createTextNode("Id: ".concat(item.id, " - ").concat(item.name, " => ").concat(item.bio));
        item_list.appendChild(text_list);
        item_list.classList.add("list-group-item");
        list.appendChild(item_list);
    });
}
showList();
/**
 * searchId
 *
 * Esta função percorre o array `lista` e retorna o primeiro objeto que possui o `id` correspondente
 *
 * @param id - O ID a ser procurado
 *
 * @returns O objeto da pessoa correspondente ou `undefined` se não for encontrado.
 */
function searchId(id) {
    return lista.find(function (pessoa) { return pessoa.id === id; });
}
/**
 * getId
 *
 * Obtém o ID do campo de entrada e o converte para um número.
 *
 * @returns O ID convertido como um número.
 */
function getId() {
    var id = input_search.value;
    var searchId = parseInt(id);
    return searchId;
}
/**
 * showResult
 *
 * Esta função define o conteúdo de texto de um elemento de parágrafo `p` com o resultado fornecido
 * e, em seguida, anexa este parágrafo a `div` result_search para ser mostrado na tela.
 *
 * @param result - A string que será exibida.
 *
 *
 */
function showResult(result) {
    p.textContent = result;
    result_search.appendChild(p);
}
btn_searchBio.addEventListener('click', function (event) {
    event.preventDefault();
    var resultBio = showBio_funcional(getId());
    showResult(resultBio);
});
btn_searchName.addEventListener('click', function (event) {
    event.preventDefault();
    var resultName = showName_funcional(getId());
    showResult(resultName);
});
btn_remove.addEventListener('click', function (event) {
    event.preventDefault();
    var result = removeItem_funcional(getId(), lista);
    showResult(result);
    showList();
});
btn_modify.addEventListener('click', function (event) {
    event.preventDefault();
    var id = getId();
    if (searchId(id)) {
        input_name.placeholder = "Insira o novo nome";
        input_name.id = "input_name";
        result_search.appendChild(input_name);
        btn_name.id = "btn_name";
        btn_name.textContent = "Atualizar";
        result_search.appendChild(btn_name);
        update_name(id);
    }
    else {
        p.textContent = "Id não encontrado";
    }
});
/**
 * update_name
 *
 * Esta função obtém o novo nome do campo de entrada `input_name`, atualiza o array `lista` chamando a função  `modify_funcional`, exibe uma mensagem de sucesso, atualiza a lista exibida e remove os elementos de entrada e botão do DOM.
 *
 * @param searchId - O ID da pessoa cujo nome será atualizado.
 *
 */
function update_name(searchId) {
    btn_name.addEventListener('click', function (event) {
        event.preventDefault();
        var newname = input_name.value;
        lista = modify_funcional(searchId, newname, lista);
        showResult("Nome alterado");
        showList();
        result_search.removeChild(input_name);
        result_search.removeChild(btn_name);
    });
}
// a) Crie uma função que retorne a bio do id passado
/**
 * showBio_imperativo
 *
 * Função que retorna a bio de uma pessoa, dado o id de busca para a lista de dados.
 *
 * @param id - O ID da pessoa cuja biografia será retornada.
 * @returns A biografia da pessoa ou uma mensagem indicando que o ID não foi encontrado.
 *
 */
function showBio_imperativo(id) {
    var answer = "";
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            console.log("Bio do id passado: ");
            answer = lista[i].bio;
            break;
        }
    }
    if (answer === "") {
        answer = "Id não encontrado";
    }
    return answer;
}
console.log(showBio_imperativo(3));
/**
 * showBio_funcional
 *
 * Função que retorna a bio de uma pessoa, dado o id de busca para a lista de dados.
 *
 * Esta função utiliza a função `searchId` para encontrar a pessoa com o ID fornecido
 *
 * @param id - O ID da pessoa cuja biografia será retornada.
 * @returns A biografia da pessoa ou uma mensagem indicando que o ID não foi encontrado.
 *
 */
var showBio_funcional = function (id) {
    var item = searchId(id);
    return item ? item.bio : "Id não encontrado";
};
// b) Crie uma função que retorne o name do id passado
/**
 * showName_imperativo
 *
 * Função que retorna o nome de uma pessoa, dado o id de busca para a lista de dados.
 *
 * @param id - O ID da pessoa cujo nome será retornada.
 * @returns O nome da pessoa ou uma mensagem indicando que o ID não foi encontrado.
 *
 */
function showName_imperativo(id) {
    var answer = "";
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            console.log("Name do id passado: ");
            answer = lista[i].name;
            break;
        }
    }
    if (answer === "") {
        answer = "Id não encontrado";
    }
    return answer;
}
console.log(showName_imperativo(3));
/**
 * showName_funcional
 *
 * Função que retorna o nome de uma pessoa, dado o id de busca para a lista de dados.
 *
 * Esta função utiliza a função `searchId` para encontrar a pessoa com o ID fornecido
 *
 * @param id - O ID da pessoa cujo nome será retornado.
 * @returns O nome da pessoa ou uma mensagem indicando que o ID não foi encontrado.
 *
 */
var showName_funcional = function (id) {
    var item = searchId(id);
    return item ? item.name : "Id não encontrado";
};
// c) Crie uma função que apague um item da lista a partir de um id passado
/**
 * removeItem_imperativo
 *
 * Função que remove um item da lista com base no ID fornecido.
 *
 *
 * @param id - O ID do item a ser removido
 * @returns Retorna uma mensagem indicando se o item foi removido ou se o ID não foi encontrado
 *
 */
function removeItem_imperativo(id) {
    var answer = "";
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            answer = "Item removido: \n id: ".concat(id, " \n name: ").concat(lista[i].name, " \n bio: ").concat(lista[i].bio);
            lista.splice(i, 1);
            console.log(lista);
            break;
        }
    }
    if (answer === "") {
        answer = "Id não encontrado";
    }
    return answer;
}
console.log(removeItem_imperativo(6));
/**
 * removeItem_funcional
 *
 * Remove um item da lista com base no ID fornecido.
 *
 * Esta função utiliza a função `searchId` para encontrar o item com o ID fornecido e remove esse item da lista.
 * Se o item for encontrado e removido, retorna uma mensagem indicando que o item foi removido.
 * Se o ID não for encontrado, retorna uma mensagem indicando que o ID não foi encontrado.
 *
 * @param id - O ID do item a ser removido.
 * @param lista - O array de objetos `Pessoa` do qual o item será removido.
 * @returns Uma mensagem indicando o resultado da operação.
 *
 * */
var removeItem_funcional = function (id, lista) {
    var item = searchId(id);
    var index = lista.indexOf(item);
    if (index !== -1) {
        lista.splice(index, 1);
    }
    return item ? "Item removido" : "Id não encontrado";
};
// d) Crie uma função que altere a bio ou o name a partir de um id passado
/**
 * modify_imperativo
 *
 * Função que modifica o nome de um item da lista com base no ID fornecido.
 *
 *
 * @param id - O ID do item a ser modificado
 * @returns Retorna uma mensagem indicando se o item foi alterado ou se o ID não foi encontrado
 *
 */
function modify_imperativo(id, name) {
    var answer = "";
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            lista[i].name = name;
            console.log(lista[i]);
            answer = "Item modificado";
            break;
        }
    }
    if (answer === "") {
        answer = "Id não encontrado";
    }
    return answer;
}
console.log(modify_imperativo(4, "Elon Musk"));
/**
 * modify_funcional
 *
 * Esta função cria uma nova lista onde o nome do item cujo ID corresponde ao fornecido é atualizado.
 * Se o ID não for encontrado, a lista original é retornada sem modificações.
 *
 *
 * @param id - O ID do item a ser modificado.
 * @param nome - O novo nome a ser atribuído ao item.
 * @param lista - O array de objetos `Pessoa` no qual o item será modificado.
 * @returns Uma nova lista com o item modificado.
 *
 */
var modify_funcional = function (id, nome, lista) {
    var novaLista = lista.map(function (pessoa) {
        return pessoa.id === id ? __assign(__assign({}, pessoa), { name: nome }) : pessoa;
    });
    return novaLista;
};
