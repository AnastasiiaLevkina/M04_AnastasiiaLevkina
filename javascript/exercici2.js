var numero = window.prompt("Introduzca un numero")
var factorial = 1

for (i = 1; i<=numero; i++){
    console.log(i)
    factorial *= i
}

window.alert("El factorial del numero "+ numero + " es " + factorial)