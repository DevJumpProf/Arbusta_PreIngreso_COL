/* FUNCIONES / CONDICIONALES  */

/* 01-Crea una función que tenga dos argumentos: num1, num2, y que deuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos. 
 */

/* ayuda:
Llamo a la función como sumar(3,5) deberá devolver 8. */

//solucion
function sumar(num1, num2) {
    let resultado = num1 + num2;
    return console.log(resultado);
}
sumar(3, 5);

/* 02-Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */

/* ayuda:Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */

//solucion:
function esPar(num) {
    let validacion = num % 2 === 0;
    return console.log(validacion);
}
esPar(50);


/* 03-Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento. */

/* ayuda: Si ejecuto o llamo a la función con esMultiplo(40,4) debe devolver true porque 40 es divisible por 4. */

//solucion
function esMultiplo(num1, num2) {
    let validacion = num1 % num2 === 0;
    return console.log(validacion);
}
esMultiplo(40, 4);

/* 04-Escribe una función que recibe como argumento un precio y el porcentaje de impuestos. La función devolverá el valor total a pagar, teniendo en cuenta que al precio se le descuenta un porcentaje del 10% si es mayor de 1000 pesos. */

/* ayuda:Si he comprado por valor de 2000 pesos con un impuesto del 5%, me descuentan un 10% por tanto pago 1800 pesos  más los impuestos que son el 5% de 1800. En total 1890 euros. */

//solucion
function totalPagar(precio, impuesto) {
    if (precio > 1000) {
        let descuento = precio*0.1;
        let precioDescuento = precio-descuento;
        let total = precioDescuento+(precioDescuento*impuesto)/100;
        return console.log(total);
    } else {
        let total = precio+((precio*impuesto)/100);
        return console.log(total);
    }
}
totalPagar(2000,5)   

/* 05-En esta función se trata de convertir notas a calificaciones literales de manera que menos de 5 es suspenso, un 5 es aprobado, el 6 es bien, el 7 y el 8 son notable, el 9 es sobresaliente y el 10 es matrícula. */
/* Utilizar switch */

/* ayuda:Por ejemplo si pido miCalificacion(5) la función me dirá tu calificación es Aprobado */

//solucion
function notas(calificacion) {
    switch (calificacion) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            console.log("Suspenso");
            break;
        case 5:
            console.log("Aprobado");
            break;
        case 6:
            console.log("Bien");
            break;
        case 7:
        case 8:
            console.log("Notable");
            break;
        case 9:
            console.log("Sobresaliente");
            break;
        case 10:
            console.log("Matricula");
            break;
        default:
            console.log("No existe una nota valida");
            break;
    }
}
notas(5);

/* 06-Escribe una función que devuelva el siglo al que correponde un año que se la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200.... */

/* ayuda:Por ejemplo si le pido siglo(1910) me dirá siglo 20 */

//solucion
function siglo(year) {
    let siglo = Math.ceil(year/100);
    return console.log(`Siglo ${siglo}`);
}
siglo(1910);

/* 07-crear Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo */

/* ayuda: Si num es 2 debe decir que num es positivo */

//solucion:
function positivoNegativo(num) {
    if (num >= 0) {
        return console.log("El numero es positivo");
    } else {
        return console.log("El numero es negativo");
    }
}
positivoNegativo(2);

/* 08 -En este ejemplo la persona entrará dos números. Debe devvolver la diferencia entre el mayor y el menor */

/* ayuda: Si  la persona elige entre el 5 y el 8, el programa devolverá 3 (8 - 5) */

//solucion
function diferencia (n1, n2) {
    let resultado = Math.abs(n1-n2);
    return console.log(resultado);
}

// function diferencia(num1, num2) {
//     if (num1 > num2) {
//         let resultado = num1 - num2;
//         return console.log(resultado);
//     } else {
//         let resultado = num2 - num1;
//         return console.log(resultado);
//     }
// }
diferencia(5, 8);


/* 09-Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7. */

/* ayuda: Para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable */

 //solucion:
function promedio(nota1, nota2, nota3) {
    let promedio = (nota1+nota2+nota3)/3;
    if (promedio < 5) {
        return console.log("Suspenso");
    } else if (promedio >= 5 && promedio <= 7) {
        return console.log("Aprobado");
    } else {
        return console.log("Notable");
    }
}
promedio(6, 8, 10);

/* 10- Considera estás desarrollando un script donde trabajas con tipos de motor (suponemos que se trata del tipo de motor de una bomba para mover fluidos). Crea una función denominada dimeTipoMotor() donde pidas el tipo de motor al usuario (indicando que los valores posibles son 1, 2, 3, 4) y a través de un condicional switch hagas lo siguiente:

a) Si el tipo de motor es 0, mostrar un mensaje indicando “No hay establecido un valor definido para el tipo de bomba”.

b) Si el tipo de motor es 1, mostrar un mensaje indicando “La bomba es una bomba de agua”.

c) Si el tipo de motor es 2, mostrar un mensaje indicando “La bomba es una bomba de gasolina”.

d) Si el tipo de motor es 3, mostrar un mensaje indicando “La bomba es una bomba de hormigón”.

e) Si el tipo de motor es 4,mostrar un mensaje indicando “La bomba es una bomba de pasta alimenticia”.

f) Si no se cumple ninguno de los valores anteriores mostrar el mensaje “No existe un valor válido para tipo de bomba”. */

/* ayuda: utlizar switch */

// solucion
function dimeTipoMotor(tipoMotor) {
    switch (tipoMotor) {
        case 0:
            console.log("No hay establecido un valor definido para el tipo de bomba");
            break;
        case 1:
            console.log("La bomba es una bomba de agua");
            break;
        case 2:
            console.log("La bomba es una bomba de gasolina");
            break;
        case 3:
            console.log("La bomba es una bomba de hormigón");
            break;
        case 4:
            console.log("La bomba es una bomba de pasta alimenticia");
            break;
        default:
            console.log("No existe un valor válido para tipo de bomba");
            break;
    }
}
dimeTipoMotor(1);