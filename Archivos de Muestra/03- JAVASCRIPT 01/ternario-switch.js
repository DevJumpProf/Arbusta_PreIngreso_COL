//IF TERNARIO

/* let pelicula = "linterna verde"

let resultado= pelicula == "El gran pez"? "Me encanta esta pelicula":"Quiero ver el gran Pez"

console.log(resultado) */

// SWITCH

let semaforo = "celeste"

switch (semaforo){

case "Verde" :
console.log("Puede Avanzar");
break;

case "Amarillo":
console.log("Precaucion")
break;

case "Rojo":
    console.log ("No podes Avanzar")
    break;

    default:
        console.log("el semaforo no tiene ese color")
        break;
}