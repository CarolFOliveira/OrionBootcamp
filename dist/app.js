"use strict";
Object.entries({
    'exercicio1': 'src/exercicio1/index.html',
    'exercicio2': 'src/exercicio2/index.html',
    'commits': 'https://github.com/CarolFOliveira/OrionBootcamp/activity?sort=ASC'
}).forEach(function (_a) {
    var buttonId = _a[0], url = _a[1];
    var buttonElement = document.getElementById(buttonId);
    if (buttonElement) {
        buttonElement.addEventListener('click', function () {
            window.location.href = url;
        });
    }
    ;
});
