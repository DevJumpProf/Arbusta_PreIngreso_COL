
//IF TERNARIO --> condicion ? expresión si verdadero : expresión si falso 

let pelicula = "Real steel 2"

let resultado = pelicula == "Gigantes de acero" ? "Me encanta esta película" : "Quiero ver gigantes de acero"
console.log(resultado)

// SWITCH

let semaforo = "Verde"

switch (semaforo) {

    case ("Verde" || "verde"):
        console.log("Puede Avanzar");
        break;

    case ("Amarillo" || "amarillo"):
        console.log("Avanzar con precaucion")
        break;

    case ("Rojo" || "rojo"):
        console.log("No podés avanzar")
        break;

    default:
        console.log("El semáforo no tiene ese color")
        break;
}