const teste = document.getElementById('teste');
var i = 0;

function change(){
   fetch('/teste')
   .then(response => response.json())
   .then(response => teste.textContent = response);
}

setInterval(change, 1000);