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
let colors = ["orange", "blue", "green", "yellow", "white"];
var counter = 0;
function trucoMagia(){
    let articulo = document.getElementById("articulo");
    let parrafos = articulo.getElementsByTagName("p");
    for (let i in parrafos){
        parrafos[i].style.background = colors[counter%5]
        counter++
    }
}

// Ejercicio 4
function obtenirAtributs(){
    let element = document.getElementById("itb")
    console.log(element.attributes)
}

// Ejercicio 5
function insertarFila(){
    document.getElementById("")
    document.appendChild(element)
}