//función llamada al click del botón.
function numeroAleatorio(){
    const lista = document.getElementById('lista');
    const numAleatorio = Math.floor(Math.random() * (1000 - 1) + 1);
    const li = document.createElement("li"); // Creo un li.
    li.append(numAleatorio); // Al li le añado el aleatorio.
    lista.append(li); // En el ul "lista" añado el li.
}