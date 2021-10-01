//Redondeando el precio a mostrar a dos cifras decimales
function formatDecimal(val, n) {
    n = n || 2;
    var str = "" + Math.round(parseFloat(val) * Math.pow(10, n));
    while (str.length <= n) {
        str = "0" + str;
    }
    var pt = str.length - n;
    return str.slice(0, pt) + "." + str.slice(pt);
}

function getRadioVal(form, name) {
    var radios = form.elements[name];
    var val;
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked == true) {
            val = radios[i].value;
            break;
        }
    }
    return val;
}

//Calcula el subtotal de ingredientes seleccionados
function totalIngrediente(e) {
    var form = this.form;
    var val = parseFloat(form.elements['total_ing'].value);
    if (this.checked == true) {
        val += parseFloat(this.value);
    } else {
        val -= parseFloat(this.value);
    }
    form.elements['total_ing'].value = formatDecimal(val);
    pedidoTotal(form);
}

//Obtiene el subtotal del valor de los combos de acuerdo a la opcion seleccionada
function precioCombo(e) {
    this.form.elements['total_combos'].value = parseFloat(this.value);
    pedidoTotal(this.form);
}

//Obtiene el valor de la cantidad de combos
function combosCant() {
    this.form.elements['cantidadC'].value = parseFloat(this.value);
    pedidoTotal(this.form);
    factura(this.form);
}

//Obtiene el valor de la cantidad de ingredientes ad.
function ingredientesCant() {
    this.form.elements['cantIng'].value = parseFloat(this.value);
    pedidoTotal(this.form);
}

//Calculamos el total de combos dependiendo de si el usuario desea agregar más de un combo 
function agregar() {
    var sz = form.elements['combos'];

    for (var i = 0, len = sz.length; i < len; i++) {
        sz[i].onclick = precioCombo;
    }
    var prueba = sz[i];
    alert(prueba);
}

/*Calcula el precio total a cancelar por los combos tomando en cuenta
los subtotales de acuerdo al tamaño y a los ingredientes seleccionados*/
function pedidoTotal(form) {
    var total_combos = parseFloat(form.elements['total_combos'].value);
    var cantCombos = parseFloat(form.elements['cantidadC'].value);
    var totalCantCom = total_combos * cantCombos;

    var total_ing = parseFloat(form.elements['total_ing'].value);
    var cantIng = parseFloat(form.elements['cantIng'].value);
    var totalCantIng = total_ing * cantIng;

    form.elements['total'].value = formatDecimal(totalCantCom + totalCantIng);
}
(function () {
    var form = document.getElementById('pedidoForm');
    var el = document.getElementById('ingredientesAd');
    // Determinar los ingredientes seleccionados en las casillas de verificación
    var tops = el.getElementsByTagName('input');
    for (var i = 0, len = tops.length; i < len; i++) {
        if (tops[i].type === 'checkbox') {
            tops[i].onclick = totalIngrediente;
        }
    }
    var sz = form.elements['combos'];
    for (var i = 0, len = sz.length; i < len; i++) {
        sz[i].onclick = precioCombo;
    }
    // set total_combos to value of selected

    form.elements['total_combos'].value = formatDecimal(parseFloat(getRadioVal(form, 'size')));
    pedidoTotal(form);
})();

function factura() {
    alert("Su pedido ha sido realizado con exito");
    var txtFactura = document.getElementById('factura');
    txtFactura.style.display = "block";
    //var cantCombos = parseFloat(form.elements['cantidadC'].value);
    //form.elements['factura'].value = formatDecimal(cantCombos);

    //var imprimir = document.querySelector('factura');
    //imprimir.innerHTML = "Hola, pude imprimir";  
    

    //var node = document.getElementById('factura');
    //node.innerHTML('<p>Hola</p>');*/
}