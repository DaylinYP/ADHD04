function numeroParOImpar() {
    var numeroElement = document.getElementById('txtNumero');
    var numero = parseFloat(numeroElement.value);
    if (numero % 2 === 0) {
        document.getElementById('resultado').value = "El número es par";
    }
    else {
        document.getElementById('resultado').value = "El número es impar";
    }
}
document.getElementById('btnNumero').addEventListener('click', numeroParOImpar);
