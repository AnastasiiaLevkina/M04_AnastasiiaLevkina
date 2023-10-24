var intentos = 0
var respuesta

var aleatorio = Math.ceil(Math.random()*100)
console.log(aleatorio);
do{
    var numero = window.prompt("Adivine el numero que estoy pensando (entre 1 y 100)...");
    if (numero<aleatorio){
        respuesta = window.confirm("El numero que estoy pensando es mayor...")
    }else if (numero>aleatorio){
        respuesta = window.confirm("El numero que estoy pensando es menor...")
    }
    intentos ++
}while(numero!=aleatorio && intentos < 5 && respuesta)
if (numero==aleatorio){
    continuar = window.alert("Ha adivinado el numero!")
}else if (intentos==5){
    continuar = window.alert("Ha gastado todas sus oportunidadaes :(")
}