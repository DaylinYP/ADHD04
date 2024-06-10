function numeroParOImpar(): void {
    const numeroElement = document.getElementById('txtNumero') as HTMLInputElement;
    const numero: number = parseFloat(numeroElement.value);

    if (numero % 2 === 0) {
        document.getElementById('resultado').value = "El número es par";
    } else {
        document.getElementById('resultado').value = "El número es impar";
    }
}

document.getElementById('btnNumero').addEventListener('click', numeroParOImpar);
