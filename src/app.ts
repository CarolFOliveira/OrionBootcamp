Object.entries({
   'exercicio1': 'src/exercicio1/index.html',
   'exercicio2': 'src/exercicio2/index.html',
   'commits':'https://github.com/CarolFOliveira/OrionBootcamp/activity?sort=ASC'
 }).forEach(([buttonId, url]) => {
   const buttonElement = document.getElementById(buttonId) as HTMLButtonElement | null;
   if (buttonElement) {
      buttonElement.addEventListener('click', () => {
         window.location.href = url;
         })};
 })



