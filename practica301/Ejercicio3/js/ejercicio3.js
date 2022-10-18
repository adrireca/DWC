function anyadirFila(){
    const tabla = document.querySelector("#bodyTabla tr");
    const td = document.createElement("td");
    const texto = document.getElementById('texto').value;
    td.append(texto);
    tabla.append(td);
}