const prompt = require("prompt-sync")();
/* CICLOS FOR / WHILE / DO WHILE */

/* 01-Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.  */

//ayuda:Si el usuario entra por teclado el número 5 el script devolverá la secuencia  0, 1, 2, 3, 4, 5

//solucion:

console.log(
  "----------------------------------------Ejercicio1----------------------------------------"
);
console.log("");
var valor = Number(prompt("Ingrese un número para realizar la secuencia "));
var listaNumeros = "";

if (typeof valor != "number" || valor < 0 || !Number.isInteger(valor)) {
  console.log("Ingrese un número válido, debe ser un entero positivo.");
} else {
  for (var i = 0; i <= valor; i++) {
    listaNumeros += i;
    if (i < valor) {
      listaNumeros += ", ";
    }
  }
}
console.log(listaNumeros);

/* 02-Se trata de que dado un número entero el script muestre una cuenta atrás, es decir, una lista de numeros separados por coma desde el número tecleado hasta el 0. */

/* ayuda: Si tecleo el número 5 deberá mostarar 5,4,3,2,1. */

//solucion:
console.log("");
console.log(
  "----------------------------------------Ejercicio2----------------------------------------"
);
console.log("");

var num = Number(prompt("Ingrese un número para hacer la cuenta regresiva "));
var cuentaRegresiva = "";

if (typeof num != "number" || num < 0 || !Number.isInteger(num)) {
  console.log("Ingrese un número válido, debe ser un entero positivo.");
} else {
  // si queremos que solo sea hasta el 1, quitamos el >= y lo dejamos solo como >
  for (var i = num; i >= 0; i--) {
    cuentaRegresiva += i;
    if (i > 0) {
      cuentaRegresiva += ", ";
    }
  }
}
console.log(cuentaRegresiva);

/* 03-Este script debe escribir la tabla de multiplicar del número que la persona teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.
Recuerda que el salto de linea es el carácter "\n" */

/* ayuda: Si el usuario teclea el 4 la tabla mostrará diez líneas en la forma
4 x 1 = 4
4 x 2 = 8... */

//solucion:

console.log("");
console.log(
  "----------------------------------------Ejercicio3----------------------------------------"
);
console.log("");

var multiplicar = Number(
  prompt("Por favor dime el número que deseas multiplicar ")
);
var tabla = 1;

if (typeof multiplicar != "number") {
  console.log("Ingrese un número válido.");
} else {
  while (tabla <= 10) {
    console.log(`${multiplicar} x ${tabla} = ${multiplicar * tabla}`);
    tabla++;
  }
}

/* 04-Este script la persona deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado. */

/* ayuda:Si la persona teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x */

//solucion:

console.log("");
console.log(
  "----------------------------------------Ejercicio4----------------------------------------"
);
console.log("");

var numero = Number(prompt("Ingrese el número de caracteres de la cadena "));
var letra = prompt("Ingrese la letra de la cual quiere realizar la cadena ");
var cadena = "";

if (typeof numero != "number" || numero < 0 || !Number.isInteger(numero)) {
  console.log("Ingrese un número válido, debe ser un entero positivo.");
} else {
  for (var i = 0; i < numero; i++) {
    cadena += letra;
  }
  console.log(cadena);
}

/* 05 Programa un script que pida a una persona que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4 */

/* ayuda: El progrma pide 4 veces a la persona que telcee un número y este escribe 5,9,10,12. El programa dirá "La media es 9" */

//solucion:

console.log("");
console.log(
  "----------------------------------------Ejercicio5----------------------------------------"
);
console.log("");

var nMedia = [];

for (let i = 0; i < 4; i++) {
  var media = Number(prompt(`digame el número ${i + 1} `));
  nMedia[i] = media;
}
let total = nMedia.reduce((a, b) => a + b, 0);
console.log(total / 4);

/* 06 Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado. Luego deberá sacar esa lista con un alert. Los números se separarán por comas.  */

/*ayuda: Si le doy el número 5 pues deberá contar 0,1,2,3,4,5 */

//solucion:

console.log("");
console.log(
  "----------------------------------------Ejercicio6----------------------------------------"
);
console.log("");

var entero = Number(prompt("Ingrese un número para realizar la secuencia "));
var listaDeNumeros = "";

if (typeof entero != "number" || entero < 0 || !Number.isInteger(entero)) {
  console.log("Ingrese un número válido, debe ser un entero positivo.");
} else {
  for (var i = 0; i <= entero; i++) {
    listaDeNumeros += i;
    if (i < entero) {
      listaDeNumeros += ", ";
    }
  }
}
// si utlizaramos alert(listaDeNumeros) nos mostraría una ventana emergente en el navegador que diga el resultado de listaDeNumeros
// pero como VSC no permite usar este comando, para el ejercicio usaré el console.log() aunque esto haga que sea identico al primer ejercicio
console.log(listaDeNumeros);

/* 07-Se trata de pedir a la persona que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número */

/* ayuda: Si tecleo 0 me dirá Por favor teclee un número entre 1 y 5. */

// solucion:

console.log("");
console.log(
  "----------------------------------------Ejercicio7----------------------------------------"
);
console.log("");

do {
  var pedirNum = Number(prompt("Dime un Número del 1 al 5 "));
} while (pedirNum < 1 || pedirNum > 5);

/* 08 Escribir un script que pida una contraseña. Si coincide le devolverá el mensaje "Acceso concedido" y si no coincide le deolverá el mensaje "Acceso Denegado" . Solo falla tres veces se emitirá el mensaje "Alerta, intruso" */

/* ayuda: La contraseña es por ejemplo pasar. Tecleo tres veces otra distinta: Acceso Intruso. */

//solucion:

console.log("");
console.log(
  "----------------------------------------Ejercicio8----------------------------------------"
);
console.log("");

var contraseña = "pasar";
var oportunidades = 1;

while (oportunidades <= 3) {
  var dimeContaseña = prompt("Dime la contraseña, tienes 3 oportunidades ");
  if (contraseña === dimeContaseña) {
    console.log(`Acceso concedido`);
    oportunidades = 4;
  } else {
    console.log(`Acceso denegado`);
    oportunidades++;
    if (oportunidades > 3) {
      console.log(`!ALERTA, INTRUSO!`);
    }
  }
}

//9 Crear un Programa que Pide una nota (número). Muestra la calificación según la nota:
/* 
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente */

//ayuda: UTILIZAR condicionales y DO - WHILE

//solucion:

console.log("");
console.log(
  "----------------------------------------Ejercicio9----------------------------------------"
);
console.log("");

var notasEvaluar = Number(prompt("Dime cuantas notas quieres evaluar: "));
var i = 0;
do {
  var nota = Number(prompt("Dime tu nota. "));

  if (nota < 3) {
    console.log("Muy deficiente");
  } else {
    if (nota >= 3 && nota < 5) {
      console.log("Insuficiente");
    } else {
      if (nota >= 5 && nota < 6) {
        console.log("Suficiente");
      } else {
        if (nota >= 6 && nota < 7) {
          console.log("Bien");
        } else {
          if (nota >= 7 && nota < 9) {
            console.log("Notable");
          } else {
            if (nota >= 9 && nota <= 10) {
              console.log("Sobresaliente");
            }
          }
        }
      }
    }
  }
  i++;
} while (i < notasEvaluar);
//10 Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//Retornar el valor final.

//ayuda: Usar el bucle do ... while.

// Solucion:

console.log("");
console.log(
  "----------------------------------------Ejercicio10----------------------------------------"
);
console.log("");

const vFinal = (valor) => {
  var i = 0;
  do {
    valor += 5;
    i++;
  } while (i < 8);
  console.log(valor);
};

console.log(vFinal(Number(prompt("Dime un número: "))));

/* 11 Realiza un script que le pida al usuario que teclee la letra A (en mayúscula) y mientras no lo haga se lo vuelva a pedir. Usa un bulce do..while y la ventana alert para los mensajes */
/* ayuda:
El usuario teclea b, el programa vuelve a pedirme que teclee una letra
*/

//solucion:

console.log("");
console.log(
  "----------------------------------------Ejercicio11----------------------------------------"
);
console.log("");

do {
  var pedirLetra = prompt("Teclea la letra A en mayúscula ");
} while (pedirLetra !== "A");

console.log("");
