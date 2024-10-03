const btn_exercicio1 = document.getElementById("exercicio1"); 
const btn_exercicio2 = document.getElementById("exercicio2");
const btn_historico = document.getElementById("commits");

   if(btn_exercicio1){
    btn_exercicio1.addEventListener('click',()=>{
      window.location.href = 'src/exercicio1/index.html'
    })
   } 
   if(btn_exercicio2){
      btn_exercicio2.addEventListener('click',()=>{
      window.location.href = 'src/exercicio2/index.html'
    })
   }
   if(btn_historico){
      btn_historico.addEventListener('click',()=>{
      window.location.href = 'https://github.com/CarolFOliveira/OrionBootcamp/activity?sort=ASC'
})
   }



