let intentos = 5;
var respuesta;
let numero = 0;

let aleatorio = Math.ceil(Math.random()*101);
console.log(aleatorio);
do{
    numero = window.prompt("Adivine el numero que estoy pensando (entre 1 y 100)...");
    if (numero<aleatorio){
        respuesta = window.confirm("El numero que estoy pensando es mayor...");
    }else if (numero>aleatorio){
        respuesta = window.confirm("El numero que estoy pensando es menor...");
    }
    intentos --
}while(numero!=aleatorio && intentos < 5 && respuesta);
if (numero==aleatorio){
    continuar = window.alert("Ha adivinado el numero!");
}else if (intentos==0){
    continuar = window.alert("Ha gastado todos sus intentos :(");
}else{
    window.alert("Ha cancelado el juego :(");
}