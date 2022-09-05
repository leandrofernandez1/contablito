
const descripcion = document.querySelector("#inputdesc");
const subtotal = document.querySelector("#subtotal");

function ingresar() {
    const transaccion = document.querySelector(`input[name="transaccion"]:checked`).value;
    const iva = document.querySelector(`input[name="iva"]:checked`).value;
    let ivaN = parseInt(iva);
    let subtotalN = parseInt(subtotal.value)
    const total = calcularIva(subtotalN, ivaN);
    const tabla = document.querySelector(".tabla").insertRow(1);
    let col1 = tabla.insertCell (0);
    let col2 = tabla.insertCell (1);
    let col3 = tabla.insertCell (2);
    let col4 = tabla.insertCell (3);
    let col5 = tabla.insertCell (4);

    col1.innerHTML = descripcion.value;
    col2.innerHTML = transaccion;
    col3.innerHTML = subtotal.value;
    col4.innerHTML = iva;
    col5.innerHTML = total;
    
}

function calcularIva(monto, tasa) {
    let iva = (monto * tasa)/100;
    return iva + monto;
}

