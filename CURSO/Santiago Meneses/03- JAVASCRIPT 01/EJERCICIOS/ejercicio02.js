/* FUNCIONES / CONDICIONALES  */

/* 01-Crea una función que tenga dos argumentos: num1, num2, y que deuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos. 
 */

/* ayuda:
Llamo a la función como sumar(3,5) deberá devolver 8. */

//solucion
alert("SUMA DE 2 NÚMEROS")

let numeroUno, numeroDos;

function suma(num1, num2) {
    return num1 + num2
}

alert ("Vamos a realizar una suma, a continuación te solicitamos dos números");

numeroUno = parseInt(prompt("Ingrese por favor el primer número"));
numeroDos = parseInt(prompt("Ingrese por favor el segundo número"));

alert(suma(numeroUno, numeroDos));

/* 02-Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */

/* ayuda:Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */

//solucion:

alert("¿PAR O IMPAR?");
alert(`Vamos a validar si tu número es par o impar. 
PAR = TRUE
IMPAR = FALSE`);
var numeroUsuario = parseInt(prompt("Ingresa por favor un número"));

function validacionParImpar(numeroUsuario) {
    let parImpar = numeroUsuario % 2 == 0;
    
    return parImpar;
}

alert(validacionParImpar(numeroUsuario));


/* 03-Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento. */

/* ayuda: Si ejecuto o llamo a la función con esMultiplo(40,4) debe devolver true porque 40 es divisible por 4. */

//solucion

alert("MULTIPLOS");
alert(`Vamos a validar si tu primer número es multiplo del segundo que ingreses:
ES MULTIPLO = TRUE
NO ES MULTIPLO = FALSE`);
var numeroUsuario, numeroAComparar;
numeroUsuario = parseInt(prompt("Ingresa por favor un número"));
numeroAComparar = parseInt(prompt("Ingresa por favor el número con el que vamos a validar si es multiplo"));

function esMultiplo(numeroUsuario, numeroAComparar) {
    let multiplo = numeroUsuario % numeroAComparar == 0;
    
    return multiplo;
}

alert(validacionParImpar(numeroUsuario, numeroAComparar));


/* 04-Escribe una función que recibe como argumento un precio y el porcentaje de impuestos. 
La función devolverá el valor total a pagar, teniendo en cuenta que al precio se le descuenta un porcentaje del 10% si es mayor de 1000 pesos. */

/* ayuda:Si he comprado por valor de 2000 pesos con un impuesto del 5%, me descuentan un 10% por tanto pago 1800 pesos  más los impuestos que son el 5% de 1800. En total 1890 euros. */

//solucion
alert("DESCUENTO E IVA")

var precioProducto, impuesto;

precioProducto = parseFloat(prompt("Ingresa el valor del producto que vas a comprar, recuerdo que por compras superiores a $1.000 te descontamos el 10%"));
impuesto = parseInt(prompt("Ingresa el valor del IVA"));

function calcularValorIVA(precioProducto, impuestos) {

    if (precioProducto > 999) {
        let descuentoProducto = precioProducto - (precioProducto * 0.1);
        precioProducto = (descuentoProducto * (impuestos/100)) + descuentoProducto;
        return `Hemos aplicado el descuento de 10% y el iva de ${impuesto}% que nos indicaste, por lo que el total de la compra queda en: ` + precioProducto;
    } else {
        precioProducto = (precioProducto * (impuestos/100)) + precioProducto;
        return `Te recordamos que para acceder al beneficio la compra deberá ser igual o superior a $1.000, por lo que tú precio queda en: ` + precioProducto;
    }
    
}

alert(`${calcularValorIVA(precioProducto, impuesto)}`);

/* 05-En esta función se trata de convertir notas a calificaciones literales de manera que menos de 5 es suspenso, un 5 es aprobado, el 6 es bien, 
el 7 y el 8 son notable, el 9 es sobresaliente y el 10 es matrícula. */
/* Utilizar switch */

/* ayuda:Por ejemplo si pido miCalificacion(5) la función me dirá tu calificación es Aprobado */

//solucion
alert("VALIDAR LA CALIFICACIÓN");

var notaUsuario = parseInt(prompt("Ingrese la nota que has sacado."))

function validarNota(nota) {
    switch (nota) {
        case 1:
            mensaje = "Lo sentimos, usted ha suspendido. ☹️";
            break;
        case 2:
            mensaje = "Lo sentimos, usted ha suspendido. ☹️";
            break;
        case 3:
            mensaje = "Lo sentimos, usted ha suspendido. ☹️";
            break;
        case 4:
            mensaje = "Lo sentimos, usted ha suspendido. ☹️";
            break;
        case 5:
            mensaje = "Felicidades, aprobaste, sigue dando todo de ti";
            break;
        case 6:
            mensaje = "Super 😃, tu nota está muy bien, sigue así.";
            break;
        case 7:
            mensaje = "Excelente, eres una persona notable 😎";
            break;
        case 8:
            mensaje = "Excelente, eres una persona notable 😎";
            break;
        case 9:
            mensaje = "Super bien, sobresaliente 😎";
            break;
    
        case 10:
            mensaje = "Muy, muy, muy bien, matriculado 😎";
            break;
    
        default:
            alert("Ingresa por favor un valor valido");
            break;
    }
    return mensaje;
}

alert(validarNota(notaUsuario));



/* 06-Escribe una función que devuelva el siglo al que correponde un año que se la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200.... */

/* ayuda:Por ejemplo si le pido siglo(1910) me dirá siglo 20 */

//solucion
alert("¿QUÉ SIGLO ES?")

var annioUsuario = parseInt(prompt("Ingrese el año para saber a que siglo pertenece"));

function validarSigloVersionLargo(annio) {
    var mensaje;

    if (annio >= 1 && annio <= 100) {
        mensaje = "Con base al año que nos brindas, es el siglo: 1";
    } else if (annio >= 101 && annio <= 200){
        mensaje = "Con base al año que nos brindas, es el siglo: 2";
    } else if (annio > 201 && annio <= 300){
        mensaje = "Con base al año que nos brindas, es el siglo: 3";
    } else if (annio > 301 && annio <= 400){
        mensaje = "Con base al año que nos brindas, es el siglo: 4";
    } else if (annio > 401 && annio <= 500){
        mensaje = "Con base al año que nos brindas, es el siglo: 5";
    } else if (annio > 501 && annio <= 600){
        mensaje = "Con base al año que nos brindas, es el siglo: 6";
    } else if (annio > 601 && annio <= 700){
        mensaje = "Con base al año que nos brindas, es el siglo: 7";
    } else if (annio > 701 && annio <= 800){
        mensaje = "Con base al año que nos brindas, es el siglo: 8";
    } else if (annio > 801 && annio <= 900){
        mensaje = "Con base al año que nos brindas, es el siglo: 9";
    } else if (annio > 901 && annio <= 1000){
        mensaje = "Con base al año que nos brindas, es el siglo: 10";
    } else if (annio > 1001 && annio <= 1100){
        mensaje = "Con base al año que nos brindas, es el siglo: 11";
    } else if (annio > 1101 && annio <= 1200){
        mensaje = "Con base al año que nos brindas, es el siglo: 12";
    } else if (annio > 1201 && annio <= 1300){
        mensaje = "Con base al año que nos brindas, es el siglo: 13";
    } else if (annio > 1301 && annio <= 1400){
        mensaje = "Con base al año que nos brindas, es el siglo: 14";
    } else if (annio > 1401 && annio <= 1500){
        mensaje = "Con base al año que nos brindas, es el siglo: 15";
    } else if (annio > 1501 && annio <= 1600){
        mensaje = "Con base al año que nos brindas, es el siglo: 16";
    } else if (annio > 1601 && annio <= 1700){
        mensaje = "Con base al año que nos brindas, es el siglo: 17";
    } else if (annio > 1701 && annio <= 1800){
        mensaje = "Con base al año que nos brindas, es el siglo: 18";
    } else if (annio > 1801 && annio <= 1900){
        mensaje = "Con base al año que nos brindas, es el siglo: 19";
    } else if (annio > 1901 && annio <= 2000){
        mensaje = "Con base al año que nos brindas, es el siglo: 20";
    } else if (annio > 2001 && annio <= 2100){
        mensaje = "Con base al año que nos brindas, es el siglo: 21";
    } else {
        mensaje = "Ingresa un valor valido por favor.";
    }
        
    return mensaje;
}

// * El siguiente código lo hallé en internet debido a que el que yo hice es demasiado largo, sin embargo lo quise presentar así, ya que fue la forma en la que pensé hacerlo.
// * Y ya como tal este 'validarSigloVersionCorta' es el que encontré.

function validarSigloVersionCorta(annio) {
    var siglo = Math.ceil(annio / 100);
    
    return "Con base al año que nos brindas, es el siglo: " + siglo;
  }

alert(validarSigloVersionLargo(annioUsuario));
alert(validarSigloVersionCorta(annioUsuario));



/* 07-crear Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo */

/* ayuda: Si num es 2 debe decir que num es positivo */

//solucion:
alert ("POSITIVO - NEGATIVO");

var numeroUsuarioAValidar = parseFloat(prompt("Ingrese un número para validar si es positivo o negativo"))

function validarPositivoNegativo(numeroAValidar) {
    var mensaje;

    if (numeroAValidar >= 0) {
        mensaje = `El número ${numeroAValidar}, es positivo`;
    } else {
        mensaje = `El número ${numeroAValidar}, es negativo`;
    }

    return mensaje;

}

alert(validarPositivoNegativo(numeroUsuarioAValidar));

/* 08 -En este ejemplo la persona entrará dos números. Debe devvolver la diferencia entre el mayor y el menor */

/* ayuda: Si  la persona elige entre el 5 y el 8, el programa devolverá 3 (8 - 5) */

//solucion
alert("DIFERENCIA DE NÚMEROS");

var numRestaUno, numRestaDos;

alert("A continuación ingrese los números que se van a restar");
numRestaUno = parseFloat(prompt("Primer número"));
numRestaDos = parseFloat(prompt("Segundo número"));

function restaDeNumeros(numeroUno, numeroDos) {
    return numeroUno - numeroDos;
}

alert(restaDeNumeros(numRestaUno, numRestaDos));

/* 09-Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio. 
El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por enc  ima de 7. */

/* ayuda: Para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable */

 //solucion:

 alert("PROMEDIO DE ESTUDIANTE EN 3 TRIMESTRES");


 function promedioAlumno() {
     
     let bandera = true;
     let trimestreUno, trimestreDos, trimestreTres, promedio;
 
     while (bandera) {
         alert("A continuación ingrese las notas que sacó en cada uno de los trimestres");
         trimestreUno = parseFloat(prompt("Nota del primer trimestre"));
         trimestreDos = parseFloat(prompt("Nota del segundo trimestre"));
         trimestreTres = parseFloat(prompt("Nota del tercer trimestre"));
         if ((trimestreUno >= 0 && trimestreUno <= 10)&&(trimestreDos > 0 && trimestreDos <= 10)&&(trimestreTres > 0 && trimestreTres <= 10)) {
             promedio = (trimestreUno + trimestreDos + trimestreTres) / (3);
             bandera = false;
         } else {
             alert("Recuerda que las notas deben de estar entre 1 y 10, vuelve a intentar");
         }
     }
     
     if (promedio >= 0 && promedio < 5) {
         mensaje = alert(`Lo sentimos, has suspendido 😔 tu promedio fue de ${promedio.toFixed(2)}`);
     } else if (promedio >= 5 && promedio <= 7){
         mensaje = alert(`Muy bien, has aprobado 😃 tu promedio fue de ${promedio.toFixed(2)}`);
     } else {
         mensaje = alert(`Excelente eres un/a Alumno/a notable 😎 tu promedio fue de ${promedio.toFixed(2)}`);
     }
     
     
     
     return mensaje;
 }
 
 promedioAlumno();


/* 10- Considera estás desarrollando un script donde trabajas con tipos de motor (suponemos que se trata del tipo de motor de una bomba para mover fluidos). 
Crea una función denominada dimeTipoMotor() donde pidas el tipo de motor al usuario (indicando que los valores posibles son 1, 2, 3, 4) y a través de un condicional switch hagas lo siguiente:

a) Si el tipo de motor es 0, mostrar un mensaje indicando “No hay establecido un valor definido para el tipo de bomba”.

b) Si el tipo de motor es 1, mostrar un mensaje indicando “La bomba es una bomba de agua”.

c) Si el tipo de motor es 2, mostrar un mensaje indicando “La bomba es una bomba de gasolina”.

d) Si el tipo de motor es 3, mostrar un mensaje indicando “La bomba es una bomba de hormigón”.

e) Si el tipo de motor es 4,mostrar un mensaje indicando “La bomba es una bomba de pasta alimenticia”.

f) Si no se cumple ninguno de los valores anteriores mostrar el mensaje “No existe un valor válido para tipo de bomba”. */

/* ayuda: utlizar switch */

// solucion

alert("MOTOR DE BOMBAS 😎");

function dimeTipoMotor() {
    let opcionUsuario, mensaje;

    alert("Bienvenido, vamos a validar que tipo de motores tenemos en el sistema.");
    opcionUsuario = parseInt(prompt("Contamos con algunos tipos de motores, marca un número de 0 a 4 para validar cuál es."))

    switch (opcionUsuario) {
        case 0:
            mensaje = alert("No hay establecido un valor definido para el tipo de bomba.”");
            break;
        case 1:
            mensaje = alert("La bomba es una bomba de agua.");
            break;
        case 2:
            mensaje = alert("La bomba es una bomba de gasolina.");
            break;
        case 3:
            mensaje = alert("La bomba es una bomba de hormigón.");
            break;
        case 4:
            mensaje = alert("La bomba es una bomba de pasta alimenticia.");
            break;
        default:
            mensaje = alert("No existe un valor válido para tipo de bomba, recuerda, un valor de 0 a 4.")
            break;
    }

    return mensaje;
}

dimeTipoMotor();
