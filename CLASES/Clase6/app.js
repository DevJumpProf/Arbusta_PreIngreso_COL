//interaccion con users

/* alert ("Esto es un alerta")

confirm("desea confirmar") */


/* let nombre = prompt ("decime tu nombre")

alert ("hola "+ nombre)
 */
/* let num1 = Number(prompt ("decime un numero para multiplicar"))
let num2 = prompt ("decime un numero para multiplicar")

let resultado = num1*num2

alert ("tu resultado es: " + resultado) */




function semaforo (color){
    switch (color.toUpperCase()) {
        case "ROJO":
            console.log("NO PODES PASAR");
            break;
            case "AMARILLO":
                console.log("PRECAUCION");
                break;
                case "VERDE":
                    console.log("PODES PASAR");
                    break;
                    default: 
                    console.log("no ingresaste un color correcto");
    }
}
semaforo(prompt("decime un color"))
