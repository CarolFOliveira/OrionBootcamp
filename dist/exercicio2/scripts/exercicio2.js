"use strict";
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
btn_searchBio.addEventListener('click', function (event) {
    event.preventDefault();
    var id = input_search.value;
    var searchId = parseInt(id);
    var result_bio = showBio_funcional(searchId, lista);
    p.textContent = result_bio;
    result_search.appendChild(p);
});
btn_searchName.addEventListener('click', function (event) {
    event.preventDefault();
    var id = input_search.value;
    var searchId = parseInt(id);
    var result_name = showName_funcional(searchId, lista);
    p.textContent = result_name;
    result_search.appendChild(p);
});
btn_remove.addEventListener('click', function (event) {
    event.preventDefault();
    var id = input_search.value;
    var searchId = parseInt(id);
    var result_name = removeItem_funcional(searchId, lista);
    p.textContent = result_name;
    result_search.appendChild(p);
    showList();
});
btn_modify.addEventListener('click', function (event) {
    event.preventDefault();
    p.textContent = "";
    var id = input_search.value;
    var searchId = parseInt(id);
    input_name.placeholder = "Insira o novo nome";
    input_name.id = "input_name";
    result_search.appendChild(input_name);
    btn_name.id = "btn_name";
    btn_name.textContent = "Atualizar";
    result_search.appendChild(btn_name);
    update_name(searchId);
});
function update_name(searchId) {
    btn_name.addEventListener('click', function (event) {
        event.preventDefault();
        var newname = input_name.value;
        var result_name = modify_funcional(searchId, newname, lista);
        p.textContent = result_name;
        result_search.appendChild(p);
        showList();
    });
}
// a) Crie uma função que retorne a bio do id passado
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
var showBio_funcional = function (id, lista) {
    var item = lista.find(function (item) { return item.id === id; });
    return item ? item.bio : "Id não encontrado";
};
// b) Crie uma função que retorne o name do id passado
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
var showName_funcional = function (id, lista) {
    var item = lista.find(function (item) { return item.id === id; });
    return item ? item.name : "Id não encontrado";
};
// c) Crie uma função que apague um item da lista a partir de um id passado
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
var removeItem_funcional = function (id, lista) {
    var item = lista.find(function (item) { return item.id === id; });
    var index = lista.indexOf(item);
    lista.splice(index, 1);
    console.log(lista);
    return item ? "Item removido" : "Id não encontrado";
};
// d) Crie uma função que altere a bio ou o name a partir de um id passado
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
var modify_funcional = function (id, nome, lista) {
    var item = lista.find(function (item) { return item.id === id; });
    var index = lista.indexOf(item);
    lista[index].name = nome;
    console.log(item);
    return item ? "Nome alterado" : "Id não encontrado";
};
