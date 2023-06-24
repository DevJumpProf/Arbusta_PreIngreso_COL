/* FUNCIONES / CONDICIONALES  */

/* 01-Crea una función que tenga dos argumentos: num1, num2, y que deuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos. 
*/

/* ayuda:
Llamo a la función como sumar(3,5) deberá devolver 8. */

//solucion

console.log("-----------------------------------------------Ejercicio 1-----------------------------------------------")
console.log("                                                                                                     ")

function sumaNumeros(num1,num2){
let resultado = num1 + num2;

return console.log(`El resultado de la suma de los números ${num1} y ${num2} es: ${resultado}`);
}

sumaNumeros(3,5)

console.log("                                                                                                     ")

/* 02-Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */

/* ayuda:Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */

//solucion:

console.log("-----------------------------------------------Ejercicio 2-----------------------------------------------")
console.log("                                                                                                     ")

console.log("objetct");

function esPar(num) {

    let validacion = num % 2 === 0;

    return console.log(`¿el número ${num} que has ingresado es par? ${validacion}`);
}

esPar(3);
esPar(4);

console.log("                                                                                                     ")

/* 03-Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento. */

/* ayuda: Si ejecuto o llamo a la función con esMultiplo(40,4) debe devolver true porque 40 es divisible por 4. */

//solucion

console.log("-----------------------------------------------Ejercicio 3-----------------------------------------------")
console.log("                                                                                                     ")

function esMultiplo(num1,num2) {
  
    let multiplo = num1 % num2 === 0;
    return console.log(`¿El número ${num1} es multiplo de ${num2}? ${multiplo}`);
    
}

esMultiplo(40,4);

console.log("                                                                                                     ")

/* 04-Escribe una función que recibe como argumento un precio y el porcentaje de impuestos. La función devolverá el valor total a pagar, teniendo en cuenta que al precio se le descuenta un porcentaje del 10% si es mayor de 1000 pesos. */

/* ayuda:Si he comprado por valor de 2000 pesos con un impuesto del 5%, me descuentan un 10% por tanto pago 1800 pesos  más los impuestos que son el 5% de 1800. En total 1890 euros. */

//solucion

console.log("-----------------------------------------------Ejercicio 4-----------------------------------------------")
console.log("                                                                                                     ")

function calcularValor(precio,iva) {

    let precioEvaluado = precio > 1000 ? (precio*0.9) : precio;
    let total = (precioEvaluado)*(iva/100) + precioEvaluado;

    return console.log(`El total a pagar es de ${total}`);
    
}

calcularValor(2000, 5);


console.log("                                                                                                     ")

/* 05-En esta función se trata de convertir notas a calificaciones literales de manera que menos de 5 es suspenso, un 5 es aprobado, el 6 es bien, el 7 y el 8 son notable, el 9 es sobresaliente y el 10 es matrícula. */
/* Utilizar switch */

/* ayuda:Por ejemplo si pido miCalificacion(5) la función me dirá tu calificación es Aprobado */

console.log("-----------------------------------------------Ejercicio 5-----------------------------------------------")
console.log("                                                                                                     ")

function miCalificacion(nota) {
    let calificacion
    switch (nota) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            calificacion="suspenso";
            console.log(`Tu calificación es: ${calificacion}`);
            break;
            case 5:
                calificacion="Aprobado";
                console.log(`Tu calificación es: ${calificacion}`);
            break;
            case 6:
                calificacion="Bien";
                console.log(`Tu calificación es: ${calificacion}`);
            break;
            case 7:
            case 8:
                calificacion="Notable";
                console.log(`Tu calificación es: ${calificacion}`);
            break;
            case 9:
                calificacion="Sobresaliente";
                console.log(`Tu calificación es: ${calificacion}`);
            break;
            case 10:
                calificacion="Matricula";
                console.log(`Tu calificación es: ${calificacion}`);
            break;
        
            default:
            mensaje = "Ingrese un valor correcto";
            break;
    }
    
}

miCalificacion(0);
miCalificacion(8);
miCalificacion(10);


console.log("                                                                                                     ")

/* 06-Escribe una función que devuelva el siglo al que correponde un año que se la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200.... */

/* ayuda:Por ejemplo si le pido siglo(1910) me dirá siglo 20 */

//solucion

console.log("-----------------------------------------------Ejercicio 6-----------------------------------------------")
console.log("                                                                                                     ")

function validarSiglo(annio) {
var siglo = Math.ceil(annio/100);
return console.log("Con base al año que nos brindas, es el siglo: " + siglo);
}

validarSiglo(1910);

console.log("                                                                                                     ")

/* 07-crear Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo */

/* ayuda: Si num es 2 debe decir que num es positivo */

//solucion:

console.log("-----------------------------------------------Ejercicio 7-----------------------------------------------")
console.log("                                                                                                     ")

function esPositivo(numero) {

    let validacion = numero >=0 ? "positivo" : "negativo";

    return console.log(`El número ${numero} es: ${validacion}`);

}

esPositivo(2)
esPositivo(0)
esPositivo(-4)

console.log("                                                                                                     ")

/* 08 -En este ejemplo la persona entrará dos números. Debe devvolver la diferencia entre el mayor y el menor */

/* ayuda: Si  la persona elige entre el 5 y el 8, el programa devolverá 3 (8 - 5) */

//solucion

console.log("-----------------------------------------------Ejercicio 8-----------------------------------------------")
console.log("                                                                                                     ")

function diferencia(num1, num2) {
let diferencia = Math.abs(num1 - num2);

return console.log(`La diferencia entre ${num1} y ${num2} es: ${diferencia}`);
}

diferencia(8, 5);
diferencia(5, 8);

console.log("                                                                                                     ")

/* 09-Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7. */

/* ayuda: Para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable */

//solucion:

console.log("-----------------------------------------------Ejercicio 9-----------------------------------------------")
console.log("                                                                                                     ")

function promedioTrimestre(nota1, nota2, nota3)  {
    
    let promedio = (nota1 + nota2 + nota3) / 3; 
    let calificacion;
    switch (promedio) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            calificacion="suspenso";
            console.log(`Tu promedio fue de : ${promedio} , tu rendimiento fue: ${calificacion}`);
            break;
            case 5:
            case 6:
                calificacion="Aprobado";
            console.log(`Tu promedio fue de : ${promedio} , tu rendimiento fue: ${calificacion}`);
                 break;
            case 7:
            case 8:
            case 9:
            case 10:
                calificacion="Notable";
                console.log(`Tu promedio fue de : ${promedio} , tu rendimiento fue: ${calificacion}`);
                break;
        
            default:
            console.log("lo sentimos, las notas  ingresadas no se encuentran entre 0 y 10");
            break;
    }
}

promedioTrimestre(9, 8, 7);


console.log("                                                                                                     ")

/* 10- Considera estás desarrollando un script donde trabajas con tipos de motor (suponemos que se trata del tipo de motor de una bomba para mover fluidos). Crea una función denominada dimeTipoMotor() donde pidas el tipo de motor al usuario (indicando que los valores posibles son 1, 2, 3, 4) y a través de un condicional switch hagas lo siguiente:

a) Si el tipo de motor es 0, mostrar un mensaje indicando “No hay establecido un valor definido para el tipo de bomba”.

b) Si el tipo de motor es 1, mostrar un mensaje indicando “La bomba es una bomba de agua”.

c) Si el tipo de motor es 2, mostrar un mensaje indicando “La bomba es una bomba de gasolina”.

d) Si el tipo de motor es 3, mostrar un mensaje indicando “La bomba es una bomba de hormigón”.

e) Si el tipo de motor es 4,mostrar un mensaje indicando “La bomba es una bomba de pasta alimenticia”.

f) Si no se cumple ninguno de los valores anteriores mostrar el mensaje “No existe un valor válido para tipo de bomba”. */

/* ayuda: utlizar switch */

// solucion

console.log("-----------------------------------------------Ejercicio 10-----------------------------------------------")
console.log("                                                                                              ")

function dimeTipoMotor(opcionUsuario) {
    switch (opcionUsuario) {
        case 0:
            mensaje = console.log("No hay establecido un valor definido para el tipo de bomba.");
            break;
            case 1:
                mensaje = console.log("La bomba esta llena de agua.");
                break;
            case 2:
                mensaje = console.log("La bomba es una bomba de gasolina.");
                break;
            case 3:
                    mensaje = console.log("La bomba es una bomba de hormigon.");
                    break;
            case 4:
                mensaje = console.log("La bomba es una bomba de pasta alimenticia.");
                break;
        default:
            mensaje = console.log("No existe un valor valido para tipo de bomba, recuerda, un valor de 0 a 4.")
            break;
    }
return mensaje;

}

dimeTipoMotor(0);
dimeTipoMotor(1);
dimeTipoMotor(2);
dimeTipoMotor(3);
dimeTipoMotor(4);
dimeTipoMotor(5);