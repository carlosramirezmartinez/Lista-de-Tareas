

/* boton cierre tarea*/

let li = document.getElementsByTagName('li');

let i;
for (i = 0; i < li.length; i++) {
    let button = document.createElement('span');
    let text = document.createTextNode("\u2717");


    button.className = 'close';
    button.appendChild(text)
    li[i].appendChild(button);
}

/* ocultar tarea */

let close = document.getElementsByClassName('close');
for (i = 0; i < close.length; i++) {

    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";

    }
}

/*chequear simbolo*/

let ul = document.querySelector('ul');

ul.addEventListener('click', function (event) {
    if (event.target.tagName === 'li') {
        event.target.classList.toggle('checked')
    }
}, false);


/* añadir tarea */


function añadirTarea() {
    let li = document.createElement('li');
    let inputTarea = document.getElementById('inputTarea').value;
    let inputText = document.createTextNode(inputTarea)
    li.appendChild(inputText);

    let ul = document.getElementById('ListaPendiente')


    inputTarea === "" ? alert('Escribe una tarea para añadir') : ul.appendChild(li)



    let button = document.createElement('span');
    let text = document.createTextNode(`\u2717`);


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

