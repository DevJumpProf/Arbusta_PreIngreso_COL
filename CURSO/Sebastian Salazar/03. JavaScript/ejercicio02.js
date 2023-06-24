/* FUNCIONES / CONDICIONALES  */

/* 01-Crea una función que tenga dos argumentos: num1, num2, y que deuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos. 
 */

/* ayuda:
Llamo a la función como sumar(3,5) deberá devolver 8. */

//solucion

function sumar(num1, num2) {
    return num1 + num2;
  }
  
  console.log(sumar(3, 5)); // Salida: 8


/* 02-Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */

/* ayuda:Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */

//solucion:

function Par(num) {
    return num % 2 === 0;
  }
  
  console.log(Par(4)); // Salida: true
  console.log(Par(7)); // Salida: false


/* 03-Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento. */

/* ayuda: Si ejecuto o llamo a la función con esMultiplo(40,4) debe devolver true porque 40 es divisible por 4. */

//solucion

function esMultiplo(num, multiplo) {
    return num % multiplo === 0;
  }
  
  console.log(esMultiplo(40, 4)); // Salida: true
  console.log(esMultiplo(27, 5)); // Salida: false

/* 04-Escribe una función que recibe como argumento un precio y el porcentaje de impuestos. La función devolverá el valor total a pagar, teniendo en cuenta que al precio se le descuenta un porcentaje del 10% si es mayor de 1000 pesos. */

/* ayuda:Si he comprado por valor de 2000 pesos con un impuesto del 5%, me descuentan un 10% por tanto pago 1800 pesos  más los impuestos que son el 5% de 1800. En total 1890 euros. */

//solucion

function calcularTotal(precio, impuestos) {
    if (precio > 1000) {
      precio -= precio * 0.1; // Aplicar descuento del 10% si el precio es mayor a 1000
    }
    const total = precio + precio * impuestos / 100;
    return total;
  }
  
  console.log(calcularTotal(2000, 5)); // Salida: 1890
  console.log(calcularTotal(800, 8)); // Salida: 864

/* 05-En esta función se trata de convertir notas a calificaciones literales de manera que menos de 5 es suspenso, un 5 es aprobado, el 6 es bien, el 7 y el 8 son notable, el 9 es sobresaliente y el 10 es matrícula. */
/* Utilizar switch */

/* ayuda:Por ejemplo si pido miCalificacion(5) la función me dirá tu calificación es Aprobado */

//solucion

function obtenerCalificacion(nota) {
    let calificacion;
    switch (nota) {
      case 5:
        calificacion = "Aprobado";
        break;
      case 6:
        calificacion = "Bien";
        break;
      case 7:
      case 8:
        calificacion = "Notable";
        break;
      case 9:
        calificacion = "Sobresaliente";
        break;
      case 10:
        calificacion = "Matrícula";
        break;
      default:
        calificacion = "Suspenso";
    }
    return calificacion;
  }
  
  console.log(obtenerCalificacion(5)); // Salida: Aprobado
  console.log(obtenerCalificacion(8)); // Salida: Notable
  console.log(obtenerCalificacion(9)); // Salida: Sobresaliente

/* 06-Escribe una función que devuelva el siglo al que correponde un año que se la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200.... */

/* ayuda:Por ejemplo si le pido siglo(1910) me dirá siglo 20 */

//solucion

function obtenerSiglo(anio) {
    const siglo = Math.ceil(anio / 100);
    return siglo;
  }
  
  console.log(obtenerSiglo(1910)); // Salida: 20
  console.log(obtenerSiglo(1750)); // Salida: 18


/* 07-crear Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo */

/* ayuda: Si num es 2 debe decir que num es positivo */

//solucion:

function esPositivo(num) {
    return num >= 0;
  }
  
  console.log(esPositivo(2)); // Salida: true
  console.log(esPositivo(-7)); // Salida: false

/* 08 -En este ejemplo la persona entrará dos números. Debe devvolver la diferencia entre el mayor y el menor */

/* ayuda: Si  la persona elige entre el 5 y el 8, el programa devolverá 3 (8 - 5) */

//solucion

function calcularDiferencia(num1, num2) {
    return Math.abs(num1 - num2);
  }
  
  console.log(calcularDiferencia(5, 8)); // Salida: 3
  console.log(calcularDiferencia(10, 3)); // Salida: 7

/* 09-Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7. */

/* ayuda: Para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable */

 //solucion:

 function calcularPromedio(nota1, nota2, nota3) {
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
  
  console.log(calcularPromedio(6, 8, 10)); // Salida: Notable
  console.log(calcularPromedio(4, 4, 4)); // Salida: Suspenso

/* 10- Considera estás desarrollando un script donde trabajas con tipos de motor (suponemos que se trata del tipo de motor de una bomba para mover fluidos). Crea una función denominada dimeTipoMotor() donde pidas el tipo de motor al usuario (indicando que los valores posibles son 1, 2, 3, 4) y a través de un condicional switch hagas lo siguiente:

a) Si el tipo de motor es 0, mostrar un mensaje indicando “No hay establecido un valor definido para el tipo de bomba”.

b) Si el tipo de motor es 1, mostrar un mensaje indicando “La bomba es una bomba de agua”.

c) Si el tipo de motor es 2, mostrar un mensaje indicando “La bomba es una bomba de gasolina”.

d) Si el tipo de motor es 3, mostrar un mensaje indicando “La bomba es una bomba de hormigón”.

e) Si el tipo de motor es 4,mostrar un mensaje indicando “La bomba es una bomba de pasta alimenticia”.

f) Si no se cumple ninguno de los valores anteriores mostrar el mensaje “No existe un valor válido para tipo de bomba”. */

/* ayuda: utlizar switch */

// solucion

function Motor(tipoM) {
    let mensaje;
    switch (tipoM) {
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
  
  console.log(Motor(1)); // Salida: La bomba es una bomba de agua
  console.log(Motor(3)); // Salida: La bomba es una bomba de hormigón
  console.log(Motor(5)); // Salida: No existe un valor válido para tipo de bomba