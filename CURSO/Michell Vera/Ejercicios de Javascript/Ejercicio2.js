/*1-Crea una función que tenga dos argumentos: 
num1, num2, y que deuelva como resultado la suma de ambos números.
 Se supone que se usarán solo números válidos. 
 */


const numero1 = parseInt(prompt("Escribe un numero"));
const numero2 = parseInt(prompt("Escribe un numero"));

const mostrarResultadoDeLosNumeros = function(num1,num2) {
    const resultadoDeLaSuma = (num1 + num2);
    return "Resultado de la operacion " + resultadoDeLaSuma;
}

mostrarResultadoDeLosNumeros(numero1,numero2);    

//02-Esta función se va a llamar esPar(num) y deberá devolver verdadero
 /*si el argumento es par y falso si es impar. Se acepta que solo 
 se usarán números válidos. */

const numero = prompt("Escribe un numero");

function esPar(numerDelUsuario) {
    return numero % 2 == 0
};

console.log("¿El numero ingresado es par?", esPar(numero));

//03-Función que calcule si un número es múltiplo de otro.
 /* La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo 
 argumento. */

const num = parseInt(prompt("Escribe un numero"));
const multiplo = parseInt(prompt("Escribe un numero para saber si es multiplo del primero"));

function paraSaberSiMultiplo(num, multiplo) {
    return num % multiplo == 0; 
}

if (paraSaberSiMultiplo(num, multiplo)) {
    console.log(multiplo + " es multiplo de " + num);
} else {
    console.log("No es multiplo");


 //04-Escribe una función que recibe como argumento un precio y el porcentaje de impuestos.
 /* La función devolverá el valor total a pagar, teniendo en cuenta que al precio se le descuenta
   un porcentaje del 10% si es mayor de 1000 pesos. */

    const precioDelProducto = parseInt(prompt("Escribe un precio"));
    const porcentajeDelImpuesto = parseInt(prompt("Escribe un porcentaje para el impuesto del producto"));

    function mostrarPrecioTotal(precio, porcentaje) {
        if (precio > 1000) { 
            const precioDelProductoConDescuento = precio - (precio * 10 / 100);
            const precioTotalDelProducto = precioDelProductoConDescuento + (precioDelProductoConDescuento * porcentaje / 100);
            console.log('El precio total del producto con Descuento es:', precioTotalDelProducto);
        } else {
            const precioTotalDelProducto = precio + (precio * porcentaje / 100);
            console.log('El precio total del producto es:', precioTotalDelProducto);
        }
    }

    mostrarPrecioTotal(precioDelProducto, porcentajeDelImpuesto)
    

//05-En esta función se trata de convertir notas a calificaciones literales de manera 
/*que menos de 5 es suspenso,un 5 es aprobado, el 6 es bien, el 7 y el 8 son notable,
 el 9 es sobresaliente y el 10 es matrícula */

    const notas = prompt("Escribe la nota")


    function convertirNotasACalificacioneLiterales(notas) {
        if (notas < 5) {
            console.log("suspenso")
        } else if (notas == 5) {
            console.log("aprobado")
        } else if (notas == 6) {
            console.log("bien")
        }
        else if (notas == 7 || notas == 8) {
            console.log("notable")
        }
        else if (notas == 9) {
            console.log("sobresaliente")
        }
        else if (notas == 10) {
            console.log("matricula")
        }
    }

    convertirNotasACalificacioneLiterales(notas)

 //* 06-Escribe una función que devuelva el siglo al que correponde un año que se la pasa 
 /*como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200.... */

 const añoIngresado = prompt("Escribe un año para calcular el siglo")
 function sigloParaAño(año) {
    return Math.floor((año-1)/100)+ 1;
}

console.log("tu siglo para el año ingresado es:",sigloParaAño(añoIngresado) )

 //07-crear Un programa que pida un número y diga si es positivo o negativo. 
 /*El cero se considera positivo */

    const numeroPedidoPorElUsuario = prompt("Escribe un numero")

    if (numeroPedidoPorElUsuario > 0) {
        console.log("El numero que elegiste es positivo")
    } else {
        console.log("El numer que elegists es negativo")
    }

 //08 -En este ejemplo la persona entrará dos números. Debe devvolver la diferencia entre el mayor 
 /*y el menor */

const primerNumero = parseInt(prompt("Escribe un numero"))
    const segundoNumero = parseInt(prompt("Escribe un numero"))

    if (primerNumero > segundoNumero) {
        console.log("La diferencia entre los dos numeros es:", (primerNumero - segundoNumero))
    } else {
        console.log("La diferencia entre los dos numeros es:", (segundoNumero - primerNumero))
    }

 //09-Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule 
 /*la nota promedio. El resultado que dará será suspenso si la media es menor de 5,
  aprobado si está entre 5 y 7 y  Notable por encima de 7. */

    const primerTrimestre = prompt("Escribe una nota")
    const segundoTrimestre = prompt("Escribe una nota")
    const tercerTrimeste = prompt("Escribe una nota")


    function notaPromedio(primerTrimestre, segundoTrimestre, tercerTrimeste) {
        const notasPromedioDeLosTresTrimestes = (primerTrimestre + segundoTrimestre + tercerTrimeste) / 3
        if (notasPromedioDeLosTresTrimestes < 5) {
            console.log("suspenso")
        }
        else if (notasPromedioDeLosTresTrimestes == 5 || notasPromedioDeLosTresTrimestes == 7) {
            console.log("aprobado")
        } else if (notasPromedioDeLosTresTrimestes > 7) {
            console.log("notable")
        }

    }
    notaPromedio(primerTrimestre, segundoTrimestre, tercerTrimeste)

  /* 10- Considera que estás desarrollando un script donde trabajas con tipos de motor 
  (suponemos que se trata del tipo de motor de una bomba para mover fluidos). 
  Crea una función denominada dimeTipoMotor() donde pidas el tipo de motor al usuario 
  (indicando que los valores posibles son 1, 2, 3, 4) y a través de un condicional switch hagas 
  lo siguiente:

a) Si el tipo de motor es 0, mostrar un mensaje indicando “No hay establecido un valor 
definido para el tipo de bomba”.

b) Si el tipo de motor es 1, mostrar un mensaje indicando “La bomba es una bomba de agua”.

c) Si el tipo de motor es 2, mostrar un mensaje indicando “La bomba es una bomba de gasolina”.

d) Si el tipo de motor es 3, mostrar un mensaje indicando “La bomba es una bomba de hormigón”.

e) Si el tipo de motor es 4,mostrar un mensaje indicando “La bomba es una bomba de pasta alimenticia”.

f) Si no se cumple ninguno de los valores anteriores mostrar el mensaje “No existe un valor 
válido para tipo de bomba”. */

const  tipoDeMotorAlUsuario = prompt("Escribe un valor del 1 al 4")

function dimeTipoMotor(tipoDeMotorAlUsuario) {

    switch (tipoDeMotorAlUsuario) {
        case "0":
          console.log("No hay establecido un valor definido para el tipo de bomba");
          break;
        case "1":
          console.log("La bomba es una bomba de agua");
          break;
        case "2":
          console.log("La bomba es una bomba de gasolina");
          break;
        case "3":
          console.log("a bomba es una bomba de hormigón");
          break;
        case "4":
          console.log("La bomba es una bomba de pasta alimenticia");
          break;
        default:
          console.log("No existe un valor  válido para tipo de bomba");
          break;
}
}

dimeTipoMotor(tipoDeMotorAlUsuario)
