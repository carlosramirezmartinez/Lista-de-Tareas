

/* añadir tarea */


function añadirTarea() {
    let li = document.createElement('li');
    let inputTarea = document.getElementById('inputTarea').value;
    let inputText = document.createTextNode(inputTarea)
    li.appendChild(inputText);

    let ul = document.getElementById('ListaPendiente')


    inputTarea === "" ? alert('Escribe una tarea para añadir') : ul.appendChild(li)


   
    let button = document.createElement('span');

    let text = document.createTextNode(`\u00D7`);


    button.className = 'close';

    button.appendChild(text)

    li.appendChild(button);


    let close = document.getElementsByClassName('close');
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none"
        }
    }
   
} 