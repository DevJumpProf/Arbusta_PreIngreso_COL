const prompt = require("prompt-sync")();
/* FUNCIONES / CONDICIONALES  */

/* 01-Crea una función que tenga dos argumentos: num1, num2, y que deuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos.
 */

/* ayuda:
Llamo a la función como sumar(3,5) deberá devolver 8. */

//solucion:

console.log(
  "----------------------------------------Ejercicio1----------------------------------------"
);
console.log("");
function suma(num1, num2) {
  if (num1 < 0 || num2 < 0 || (num1, num2)) {
    console.log("Por favor ingrese números válidos");
  } else {
    console.log(num1 + num2);
  }
}
console.log(suma(10, 5));
console.log("");

/* 02-Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */

// solucion:

console.log(
  "----------------------------------------Ejercicio2----------------------------------------"
);
console.log("");
function esPar(num) {
  if (num < 0) {
    console.log("Por favor ingrese un número válido");
  } else {
    console.log(`Es par: ${num % 2 == 0}`);
  }
}
console.log(esPar(5));
console.log("");

/* 03-Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento. */

/* ayuda: Si ejecuto o llamo a la función con esMultiplo(40,4) debe devolver true porque 40 es divisible por 4. */

//solucion

console.log(
  "----------------------------------------Ejercicio3----------------------------------------"
);
console.log("");
function esMultiplo(num1, num2) {
  if (num1 % num2 == 0) {
    console.log(`El número: ${num1} es múltiplo de ${num2}`);
  } else {
    console.log(`El número ${num1} no es múltiplo de ${num2}`);
  }
}
console.log(esMultiplo(40, 4));
console.log("");

/* 04-Escribe una función que recibe como argumento un precio y el porcentaje de impuestos. La función devolverá el valor total a pagar, teniendo en cuenta que al precio se le descuenta un porcentaje del 10% si es mayor de 1000 pesos. */

/* ayuda:Si he comprado por valor de 2000 pesos con un impuesto del 5%, me descuentan un 10% por tanto pago 1800 pesos  más los impuestos que son el 5% de 1800. En total 1890 euros. */

//solucion

console.log(
  "----------------------------------------Ejercicio4----------------------------------------"
);
console.log("");
function totalAPagar(precio, impuesto) {
  let valorTotal = precio - (precio * 10) / 100;
  let totalPagar = valorTotal + (valorTotal * impuesto) / 100;
  return `Su total a pagar es de: ${totalPagar}$`;
}
console.log(totalAPagar(2000, 5));
console.log("");

/* 05-En esta función se trata de convertir notas a calificaciones literales de manera que menos de 5 es suspenso, un 5 es aprobado, el 6 es bien, el 7 y el 8 son notable, el 9 es sobresaliente y el 10 es matrícula. */
/* Utilizar switch */

/* ayuda:Por ejemplo si pido miCalificacion(5) la función me dirá tu calificación es Aprobado */

console.log(
  "----------------------------------------Ejercicio5----------------------------------------"
);
console.log("");
function miCalificacion(nota) {
  if (nota >= 0 && nota <= 10) {
    switch (nota) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        return `Suspendió, su nota es: ${nota}`;
        break;
      case 5:
        return `Aprobado, su nota es: ${nota}`;
        break;
      case 6:
        return `Bien, su nota es: ${nota}`;
        break;
      case 7:
      case 8:
        return `Notable, su nota es: ${nota}`;
        break;
      case 9:
        return `Sobresaliente, su nota es: ${nota}`;
        break;
      case 10:
        return `Matrícula, su nota es: ${nota}`;
        break;
    }
  } else {
    console.log("Por favor digite una nota válida");
  }
}
console.log(miCalificacion(8));
console.log("");

/* 06-Escribe una función que devuelva el siglo al que correponde un año que se la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200.... */

/* ayuda:Por ejemplo si le pido siglo de (1910) me dirá siglo 20 */

//solucion:

console.log(
  "----------------------------------------Ejercicio6----------------------------------------"
);
console.log("");
function siglo(año) {
  let resultado = año / 100;
  if (resultado % 2 == 0 || resultado % 2 == 1) {
    return `El año ${año} está en el siglo ${resultado}`;
  } else {
    resultado++;
    return `El año ${año} está en el siglo ${resultado.toFixed(0)}`;
  }
}
console.log(siglo(101));
console.log("");

/* 07-crear Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo */

/* ayuda: Si num es 2 debe decir que num es positivo */

//solucion:

console.log(
  "----------------------------------------Ejercicio7----------------------------------------"
);
console.log("");
function esPositivo(num) {
  if (num < 0) {
    return `El número ${num} es negativo`;
  } else {
    return `El número ${num} es positivo`;
  }
}

console.log(
  esPositivo(Number(prompt("Por favor dime que número quieres evaluar ")))
);
console.log("");

/* 08 -En este ejemplo la persona entrará dos números. Debe devvolver la diferencia entre el mayor y el menor */

/* ayuda: Si  la persona elige entre el 5 y el 8, el programa devolverá 3 (8 - 5) */

//solucion

console.log(
  "----------------------------------------Ejercicio8----------------------------------------"
);
console.log("");
function diferencia(num1, num2) {
  let resta = Math.abs(num1 - num2);
  return `La diferencia entre el mayor y el menor de ${num1} y ${num2} es: ${resta}`;
}
console.log(
  diferencia(
    Number(prompt("Dime el primer dígito ")),
    Number(prompt("Dime el segundo dígito "))
  )
);
console.log("");

/* 09-Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7. */

/* ayuda: Para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable */

//solucion:

console.log(
  "----------------------------------------Ejercicio9----------------------------------------"
);
console.log("");
function promedioAnual(nota1, nota2, nota3) {
  promedio = (nota1 + nota2 + nota3) / 3;
  if (promedio >= 0 && promedio <= 10) {
    switch (promedio) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        return `Suspendió, su nota es: ${promedio}`;
        break;
      case 5:
      case 6:
      case 7:
        return `Aprobado, su nota es: ${promedio}`;
        break;
      case 8:
      case 9:
      case 10:
        return `Notable, su nota es: ${promedio}`;
        break;
    }
  } else {
    console.log("Por favor digite una nota válida");
  }
}
console.log(promedioAnual(6, 8, 10));
console.log("");

/* 10- Considera estás desarrollando un script donde trabajas con tipos de motor (suponemos que se trata del tipo de motor de una bomba para mover fluidos). Crea una función denominada dimeTipoMotor() donde pidas el tipo de motor al usuario (indicando que los valores posibles son 1, 2, 3, 4) y a través de un condicional switch hagas lo siguiente:

a) Si el tipo de motor es 0, mostrar un mensaje indicando “No hay establecido un valor definido para el tipo de bomba”.

b) Si el tipo de motor es 1, mostrar un mensaje indicando “La bomba es una bomba de agua”.

c) Si el tipo de motor es 2, mostrar un mensaje indicando “La bomba es una bomba de gasolina”.

d) Si el tipo de motor es 3, mostrar un mensaje indicando “La bomba es una bomba de hormigón”.

e) Si el tipo de motor es 4,mostrar un mensaje indicando “La bomba es una bomba de pasta alimenticia”.

f) Si no se cumple ninguno de los valores anteriores mostrar el mensaje “No existe un valor válido para tipo de bomba”. */

/* ayuda: utlizar switch */

// solucion

console.log(
  "----------------------------------------Ejercicio10----------------------------------------"
);
console.log("");
function dimeTipoMotor(nMotor) {
  switch (nMotor) {
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

console.log(
  dimeTipoMotor(
    Number(
      prompt(
        "Dime el tipo de motor al que quieres acceder con números del 1 al 4 "
      )
    )
  )
);
console.log("");
