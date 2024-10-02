"use strict";
// const btn_exercicio1 = document.querySelector("#exercicio1") as HTMLButtonElement;
// const btn_exercicio2 = document.querySelector("#exercicio2") as HTMLButtonElement;
// const btn_historico = document.querySelector("#commits") as HTMLButtonElement;
const div_btn = document.createElement("div");
const btn_exercicio1 = document.createElement("button#exercicio1");
const btn_exercicio2 = document.createElement("button#exercicio2");
const btn_historico = document.createElement("button#commits");
div_btn.appendChild(btn_exercicio1);
btn_exercicio1.addEventListener('click', () => {
    window.location.href = 'src/exercicio1/index.html';
});
btn_exercicio2.addEventListener('click', () => {
    window.location.href = 'src/exercicio2/index.html';
});
btn_historico.addEventListener('click', () => {
    window.location.href = 'https://github.com/CarolFOliveira/OrionBootcamp/activity?sort=ASC';
});
//# sourceMappingURL=app.js.map