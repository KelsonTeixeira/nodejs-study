const teste = document.getElementById('teste');
var i = 0;

function change(){
    i += 1;
    teste.textContent = i;
}

setInterval(change, 1000);