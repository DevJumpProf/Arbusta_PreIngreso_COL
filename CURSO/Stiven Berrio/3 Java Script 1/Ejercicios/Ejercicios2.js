/* FUNCIONES / CONDICIONALES  */

/* 01-Crea una función que tenga dos argumentos: num1, num2, y que deuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos. 
 */

/* ayuda:
Llamo a la función como sumar(3,5) deberá devolver 8. */

//solucion
alert("ejercicio 1")
alert("suma de dos numeros")

let numero1, numero2;

function suma(num1, num2) {
    return num1 + num2
}

numero1 = parseInt(prompt("Ingrese por favor un número"));
numero2 = parseInt(prompt("Ingrese por favor un número"));

alert(suma(numero1, numero2));



/* 02-Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */

/* ayuda:Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */

//solucion:
alert("ejercicio 2")

const numero = prompt("Escribe un numero");

function esPar(numerDelUsuario) {
    return numero % 2 == 0
};

console.log("¿El numero ingresado es par?", esPar(numero));


/* 03-Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento. */

/* ayuda: Si ejecuto o llamo a la función con esMultiplo(40,4) debe devolver true porque 40 es divisible por 4. */

//solucion
alert("ejercicio 3")
alert(`ingresaras dos numeros si el primero es multiplo del segundo sera TRUE si no FALSE`);
var numeroUsuario, numeroAComparar;
numeroUsuario = parseInt(prompt("Ingresa por favor un número"));
numeroAComparar = parseInt(prompt("Ingresa por favor el número dos"));

function esMultiplo(numeroUsuario, numeroAComparar) {
    let multiplo = numeroUsuario % numeroAComparar == 0;
    
    return multiplo;
}

alert(validacionParImpar(numeroUsuario, numeroAComparar));

/* 04-Escribe una función que recibe como argumento un precio y el porcentaje de impuestos. La función devolverá el valor total a pagar, teniendo en cuenta que al precio se le descuenta un porcentaje del 10% si es mayor de 1000 pesos. */

/* ayuda:Si he comprado por valor de 2000 pesos con un impuesto del 5%, me descuentan un 10% por tanto pago 1800 pesos  más los impuestos que son el 5% de 1800. En total 1890 euros. */

//solucion
alert("ejercicio 4")

const precioDelProducto = parseInt(prompt("Escribe un precio"));
const porcentajeDelImpuesto = parseInt(prompt("Escribe un porcentaje para el impuesto del producto"));

function calcular1(precio, porcentaje) {
    if (precio > 1000) { 
        const precioDelProductoConDescuento = precio - (precio * 10 / 100);
        const precioTotalDelProducto = precioDelProductoConDescuento + (precioDelProductoConDescuento * porcentaje / 100);
        console.log('El precio total del producto con Descuento es:', precioTotalDelProducto);
    } else {
        const precioTotalDelProducto = precio + (precio * porcentaje / 100);
        console.log('El precio total del producto es:', precioTotalDelProducto);
    }
}

calcular1(precioDelProducto, porcentajeDelImpuesto)


/* 05-En esta función se trata de convertir notas a calificaciones literales de manera que menos de 5 es suspenso, un 5 es aprobado, el 6 es bien, el 7 y el 8 son notable, el 9 es sobresaliente y el 10 es matrícula. */
/* Utilizar switch */

/* ayuda:Por ejemplo si pido miCalificacion(5) la función me dirá tu calificación es Aprobado */

alert("ejercicio 5")

function calificacion(nota) {
    let calificacion;
    switch (nota) {
      case 5:
        calificacion = "Aprobado";
        console.log("has aprobad0" )
        break;
      case 6:
        calificacion = "Bien";
        console.log("bien" )
        break;
      case 7:
      case 8:
        calificacion = "Notable";
        console.log("felicidades notable" )
        break;
      case 9:
        calificacion = "Sobresaliente";
        console.log("felicidades has sobresalido" )
        break;
      case 10:
        calificacion = "Matrícula";
        break;
      default:
        calificacion = "Suspenso";
        console.log("mas cuidado" )
    }
    return calificacion;
  }
/* 06-Escribe una función que devuelva el siglo al que correponde un año que se la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200.... */

/* ayuda:Por ejemplo si le pido siglo(1910) me dirá siglo 20 */

//solucion
alert("ejercicio 6")

const añoIngresado = prompt("Escribe un año para calcular el siglo")
function siglo(año) {
   return Math.floor((año-1)/100)+ 1;
}

console.log("tu siglo para el año ingresado es:",siglo (añoIngresado) )

/* 07-crear Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo */

/* ayuda: Si num es 2 debe decir que num es positivo */

//solucion:
alert("ejercicio 7")
function esPositivo(num) {
    return num >= 0;
  }
  
/* 08 -En este ejemplo la persona entrará dos números. Debe devvolver la diferencia entre el mayor y el menor */

/* ayuda: Si  la persona elige entre el 5 y el 8, el programa devolverá 3 (8 - 5) */

//solucion
alert("ejercicio 8")
const primerNumero = parseInt(prompt("Escribe un numero"))
    const segundoNumero = parseInt(prompt("Escribe un numero"))

    if (primerNumero > segundoNumero) {
        alert("La diferencia entre los dos numeros es:", (primerNumero - segundoNumero))
    } else {
        alert("La diferencia entre los dos numeros es:", (segundoNumero - primerNumero))
    }


/* 09-Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7. */

/* ayuda: Para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable */

 //solucion:
 alert("ejercicio 9")
 function Promedio(nota1, nota2, nota3) {
    const promedio = (nota1 + nota2 + nota3) / 3;
    let calificacion;
    if (promedio < 5) {
      calificacion = "Suspenso";
    } else if (promedio >= 5 && promedio < 7) {
      calificacion = "Aprobado";
    } else if (promedio >= 7) {
      calificacion = "Notable";
    }
    return calificacion;
  }

/* 10- Considera estás desarrollando un script donde trabajas con tipos de motor (suponemos que se trata del tipo de motor de una bomba para mover fluidos). Crea una función denominada dimeTipoMotor() donde pidas el tipo de motor al usuario (indicando que los valores posibles son 1, 2, 3, 4) y a través de un condicional switch hagas lo siguiente:

a) Si el tipo de motor es 0, mostrar un mensaje indicando “No hay establecido un valor definido para el tipo de bomba”.

b) Si el tipo de motor es 1, mostrar un mensaje indicando “La bomba es una bomba de agua”.

c) Si el tipo de motor es 2, mostrar un mensaje indicando “La bomba es una bomba de gasolina”.

d) Si el tipo de motor es 3, mostrar un mensaje indicando “La bomba es una bomba de hormigón”.

e) Si el tipo de motor es 4,mostrar un mensaje indicando “La bomba es una bomba de pasta alimenticia”.

f) Si no se cumple ninguno de los valores anteriores mostrar el mensaje “No existe un valor válido para tipo de bomba”. */

/* ayuda: utlizar switch */

// solucion

function Motor(tipoMs) {
    let mensaje;
    switch (tipoMs) {
      case 0:
        mensaje = "No hay establecido un valor definido para el tipo de bomba";
        break;
      case 1:
        mensaje = "La bomba es una bomba de agua";
        break;
      case 2:
        mensaje = "La bomba es una bomba de gasolina";
        break;
      case 3:
        mensaje = "La bomba es una bomba de hormigón";
        break;
      case 4:
        mensaje = "La bomba es una bomba de pasta alimenticia";
        break;
      default:
        mensaje = "No existe un valor válido para tipo de bomba";
    }
    return mensaje;
  }
  