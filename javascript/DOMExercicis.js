// Ejercicio 1
function estiljs(){
    document.getElementById("text").style.color = "red";
}

// Ejercicio 2
function prenValorForm(){
    const persona = document.getElementById("formulari1");
    let nombre = persona[0].value;
    let apellido = persona[1].value;
    console.log(nombre + " " + apellido);
}

// Ejercicio 3
function trucoMagia(){
    let articulo = document.getElementById("articulo");
    articulo.getElementsByTagName("p").style.background = "orange";
}