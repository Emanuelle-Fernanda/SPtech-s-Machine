let local = document.getElementById("titulo-sptech");
escreverTexto(local);

function escreverTexto(texto) {
    const array = texto.innerHTML.split("");
    texto.innerHTML = "";
    array.forEach((letra, i) => {
        setTimeout(function(){
            texto.innerHTML += letra;
        }, 300 * i);
    });
}


function converter() {
    var decimal = Number(demo1.value);

    demo2.innerHTML = decimal.toString(8);
    demo3.innerHTML = decimal.toString(16);
    demo4.innerHTML = decimal.toString(2);
}

