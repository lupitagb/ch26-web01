console.log("sesion Web 1");

function changeGrettings(){
    const clientName = getNameOfClient();
    // TODO obtener referencia del label h1
    const grettingsReference = getReferenceOfIdGrettings();

    grettingsReference.innerHTML = "Hola " + clientName;
    // TODO cambiar el saludo
}

function getNameOfClient(){
    const clientName = prompt("escribe tu nombre");
    return clientName;
}

function getReferenceOfIdGrettings(){
    return document.getElementById("grettings");
}