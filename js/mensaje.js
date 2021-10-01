//Archivo js para realizar la funcion de dejar una sugerencia o comentario
//usando textarea y div.
window.onload = init;
function init() {
    var view = document.getElementById('view');
    var area = document.getElementById('area');
    var txt = document.getElementById('form_wrap');
    txt.onclick = edit;
    view.onclick = edit;
    area.style.display = 'none';//Al cargar el documento no se muestre el textarea
    document.onkeydown = function (e) {
        e = e || event;
        //Salir de la edición
        if (e.keyCode == 27) {
            cancel();
            return false;
        }
        //Condición al presionar las teclas Ctrl+E
        if ((e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) && !area.offsetHeight) {
            edit();
            return false;
        }
        //Condición al presionar las teclas Ctrl+S
        if ((e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) && area.offsetHeight) {
            save();
            return false;
        }
    }
    //Funcion para editar el textarea
    function edit() {
        //Ocultar el elemento div
        view.style.display = 'none';
        //Dibujar el campo textarea y ponerle estilos
        area.value = view.innerHTML;
        area.style.display = 'block';
        area.style.height = '80px';
        area.style.padding = '6px';
        area.style.width = '500px';
        area.focus();
    }
    //Funcion para guardar los datos del textarea en el div
    function save() {
        area.style.display = 'none';
        view.innerHTML = area.value;
        view.style.display = 'block';
        view.style.letterSpacing = '1.2px';
    }
    //Funcion para cancelar cuando se edita el textarea
    function cancel() {
        area.style.display = 'none';
        view.style.display = 'block';
    }
}