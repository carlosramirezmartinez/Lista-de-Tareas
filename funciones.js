

/* añadir tarea */


function añadirTarea() {
let li = document.getElementsByTagName('li');
let inputTarea = document.getElementById('inputTarea').value;
//console.log(li);


let inputText = document.createTextNode(inputTarea)
li.appendChild(inputText);

let UL = document.getElementById('ListaPendiente')


inputTarea === "" ? alert('Escribe una tarea para añadir') : UL.appendChild(li)

let button = document.createElement('span');

let text = document.createTextNode("\u00D7");


button.className = 'close';

button.appendChild(text)

li.appendChild(button);


for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none"

    }

    }
}
