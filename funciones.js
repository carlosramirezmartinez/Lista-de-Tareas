

/* añadir tarea */


function añadirTarea() {
let li = document.getElementsByTagName('li');

for (let i = 0; i < li.length; i++) {
    let button = document.createElement('span');
    let text = document.createTextNode("\u00D7");

    button.className = 'close';
    button.appendChild(text);

    }
}


