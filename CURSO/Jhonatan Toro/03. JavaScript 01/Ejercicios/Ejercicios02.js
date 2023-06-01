
/* FUNCIONES / CONDICIONALES  */

/* 01-Crea una función que tenga dos argumentos: num1, num2, y que deuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos. */

/* ayuda:
Llamo a la función como sumar(3,5) deberá devolver 8. */

//solución:

console.log("------------------Ejercicio #1------------------");
console.log("                                                ");

function suma(num1, num2) {
    let total = num1 + num2;
    return console.log(`El total es de: ${total}`);
}

suma(100, 250);

console.log("                                                ");


/* 02-Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */

/* ayuda:Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */

//solución:

console.log("------------------Ejercicio #2------------------");
console.log("                                                ");

function esPar(num) {
    let procedencia = num % 2 === 0;
    return console.log(`El número ${num}, ¿es par?: ${procedencia}`);
}

esPar(100);

console.log("                                                ");


/* 03-Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento. */

/* ayuda: Si ejecuto o llamo a la función con esMultiplo(40,4) debe devolver true porque 40 es divisible por 4. */

//solucion:

console.log("------------------Ejercicio #3------------------");
console.log("                                                ");

function calcularMultiplo(multiplo, num) {
    let procedencia = multiplo % num === 0;
    return console.log(procedencia ? `El ${multiplo} es múltiplo de ${num}, ya que es divisible por este mismo` : `El ${multiplo} NO es múltiplo de ${num}, ya que NO es divisible por este mismo`);
}

calcularMultiplo(100, 10);

console.log("                                                ");


/* 04-Escribe una función que recibe como argumento un precio y el porcentaje de impuestos. 
La función devolverá el valor total a pagar, teniendo en cuenta que al precio se le descuenta un porcentaje del 10% si es mayor de 1000 pesos. */

/* ayuda: Si he comprado por valor de 2000 pesos con un impuesto del 5%, me descuentan un 10% por tanto pago 1800 pesos más los impuestos que son el 5% de 1800. 
En total 1890 pesos. */

//solución:

console.log("------------------Ejercicio #4------------------");
console.log("                                                ");

function calcularTotal(precio, impuesto) {
    let precioEvaluado = precio > 1000 ? precio * 0.9 : precio;
    let total = precioEvaluado + (precioEvaluado * (impuesto / 100));
    return console.log(`El total a pagar es de: ${total} $`);
}

calcularTotal(2000, 5);

console.log("                                                ");


/* 05-En esta función se trata de convertir notas a calificaciones literales de manera que menos de 5 es suspenso, 
un 5 es aprobado, el 6 es bien, el 7 y el 8 son notable, el 9 es sobresaliente y el 10 es excelente. Utilizar switch */

/* ayuda: Por ejemplo, si pido miCalificacion(5) la función me dirá tu calificación es Aprobado */

console.log("------------------Ejercicio #5------------------");
console.log("                                                ");

let calificacion = "";

function miCalificacion(nota) {
    switch (nota) {
        case (0):
        case (1):
        case (2):
        case (3):
        case (4):
            calificacion = "Suspenso";
            console.log(`Tu calificación es: ${calificacion}`);
            break;
        case (5):
            calificacion = "Aprobado";
            console.log(`Tu calificación es: ${calificacion}`);
            break;
        case (6):
            calificacion = "Bien";
            console.log(`Tu calificación es: ${calificacion}`);
            break;
        case (7):
        case (8):
            calificacion = "Notable";
            console.log(`Tu calificación es: ${calificacion}`);
            break;
        case (9):
            calificacion = "Sobresaliente";
            console.log(`Tu calificación es: ${calificacion}`);
            break;
        case (10):
            calificacion = "Excelente";
            console.log(`Tu calificación es: ${calificacion}`);
            break;
        default:
            console.log("Error, la nota ingresada no se encuentra entre 0 y 10");
            break;
    }
}

miCalificacion(5);

console.log("                                                ");


/* 06-Escribe una función que devuelva el siglo al que correponde un año que se la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200.... */

/* ayuda:Por ejemplo si le pido siglo(1910) me dirá siglo 20 */

//solución:

console.log("------------------Ejercicio #6------------------");
console.log("                                                ");

function calcularSiglo(año) {
    let siglo = Math.ceil(año / 100);
    return console.log(`El año ${año} corresponde al siglo: ${siglo}`);
}

calcularSiglo(1910);

console.log("                                                ");


/* 07-crear Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo */

/* ayuda: Si num es 2 debe decir que num es positivo */

//solución:

console.log("------------------Ejercicio #7------------------");
console.log("                                                ");

function naturalezaNumero(num) {
    let naturaleza = num >= 0 ? "Positivo" : "Negativo";
    return console.log(`El número ${num} es: ${naturaleza}`);
}

//naturalezaNumero(prompt("Ingrese un número: "));  -------> Al usar prompt se crashea la terminal, voy a pasar el número al llamar la función
naturalezaNumero(2);

console.log("                                                ");


/* 08 -En este ejemplo la persona entrará dos números. Debe devolver la diferencia entre el mayor y el menor */

/* ayuda: Si  la persona elige entre el 5 y el 8, el programa devolverá 3 (8 - 5) */

//solución: 

console.log("------------------Ejercicio #8------------------");
console.log("                                                ");

function diferencia(num1, num2) {
    let diferencia = Math.abs(num1 - num2);
    return console.log(`La diferencia es de: ${diferencia}`);
}

//diferencia(prompt("Ingrese un número: "), prompt("Ingrese otro número: "));  -------> Al usar prompt se crashea la terminal, voy a pasar los números al llamar la función
diferencia(6, 10);

console.log("                                                ");

/* 09-Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio. 
El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7. */

/* ayuda: Para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable */

//solución:

console.log("------------------Ejercicio #9------------------");
console.log("                                                ");

function definitiva(nota1, nota2, nota3) {      //Se podría pedir con prompt pero crashearía la terminal, así que solo asigno el valor

    let promedio = (nota1 + nota2 + nota3) / 3;

    switch (promedio) {
        case (0):
        case (1):
        case (2):
        case (3):
        case (4):
            calificacion = "Suspenso";
            console.log(`Tuviste un promedio de ${promedio}, tu rendimiento fue: ${calificacion}`);
            break;
        case (5):
        case (6):
            calificacion = "Aprobado";
            console.log(`Tuviste un promedio de ${promedio}, tu rendimiento fue: ${calificacion}`);
            break;
        case (7):
        case (8):
        case (9):
        case (10):
            calificacion = "Notable";
            console.log(`Tuviste un promedio de ${promedio}, tu rendimiento fue: ${calificacion}`);
            break;
        default:
            console.log("Error, las notas ingresadas no se encuentran entre 0 y 10");
            break;
    }
}

definitiva(6, 8, 10);

console.log("                                                ");


/* 10-Considera estás desarrollando un script donde trabajas con tipos de motor (suponemos que se trata del tipo de motor de una bomba para mover fluidos). 
Crea una función denominada dimeTipoMotor() donde pidas el tipo de motor al usuario (indicando que los valores posibles son 1, 2, 3, 4) y a través de un condicional 
switch hagas lo siguiente:

a) Si el tipo de motor es 0, mostrar un mensaje indicando “No hay establecido un valor definido para el tipo de bomba”.

b) Si el tipo de motor es 1, mostrar un mensaje indicando “La bomba es una bomba de agua”.

c) Si el tipo de motor es 2, mostrar un mensaje indicando “La bomba es una bomba de gasolina”.

d) Si el tipo de motor es 3, mostrar un mensaje indicando “La bomba es una bomba de hormigón”.

e) Si el tipo de motor es 4,mostrar un mensaje indicando “La bomba es una bomba de pasta alimenticia”.

f) Si no se cumple ninguno de los valores anteriores mostrar el mensaje “No existe un valor válido para tipo de bomba”. */

/* ayuda: utlizar switch */

// solución:

console.log("------------------Ejercicio #10------------------");
console.log("                                                 ");

function dimeTipoMotor(tipoMotor) {      

    switch (tipoMotor) {
        case (0):
            console.log("No hay establecido un valor definido para el tipo de bomba");
            break;
        case (1):
            console.log("La bomba es una bomba de agua");
            break;
        case (2):
            console.log("La bomba es una bomba de gasolina");
            break;
        case (3):
            console.log("La bomba es una bomba de hormigón");
            break;
        case (4):
            console.log("La bomba es una bomba de pasta alimenticia");
            break;
        default:
            console.log("No existe un valor válido para tipo de bomba");
            break;
    }
}

//let tipoMotor = console.log("Indique el número del tipo de motor (Valores entre 1 y 4): ")  --> Dejo indicado cómo se trabajaría en caso de usar prompt
//dimeTipoMotor(parseInt(prompt(""Indique el número del tipo de motor (Valores entre 1 y 4): "")));  -->  Se podría pedir con prompt pero crashearía la terminal, así que paso el valor como parámetro
dimeTipoMotor(2);

console.log("                                                ");