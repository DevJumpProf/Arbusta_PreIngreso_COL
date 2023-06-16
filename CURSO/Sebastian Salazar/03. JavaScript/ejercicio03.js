/* CICLOS FOR / WHILE / DO WHILE */
 
/* 01-Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.  */ 

//ayuda:Si el usuario entra por teclado el número 5 el script devolverá la secuencia  0, 1, 2, 3, 4, 5  

//solucion

let valor = parseInt(prompt("Ingrese un valor entero: "));
let lista = "";

for (let i = 0; i <= valor; i++) {
  lista += i;
  if (i !== valor) {
    lista += ", ";
  }
}

console.log(lista);

/* 02-Se trata de que dado un número entero el script muesre una cuenta atrás, es decir, una lista de numeros separados por coma desde el número tecleado hasta el 0. */

/* ayuda: Si tecle o número 5 deberá mostarar 5,4,3,2,1. */

//solucion

let numero = parseInt(prompt("Ingrese un número entero: "));
let cuentaRegresiva = "";

for (let i = numero; i >= 0; i--) {
  cuentaRegresiva += i;
  if (i !== 0) {
    cuentaRegresiva += ", ";
  }
}

console.log(cuentaRegresiva);


/* 03-Este script debe escribir la tabla de multiplicar del número que la persona teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.
Recuerda que el salto de linea es el carácter "\n" */

/* ayuda: Si el usuario teclea el 4 la tabla mostrará diez líneas en la forma
4 x 1 = 4
4 x 2 = 8... */

//solucion

let num = parseInt(prompt("Ingrese un número entero: "));
let tabla = "";

for (let i = 1; i <= 10; i++) {
  tabla += num + " x " + i + " = " + num * i + "\n";
}

console.log(tabla);

/* 04-Este script la persona deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado. */

/* ayuda:Si la persona teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x */

//solucion

let letra = prompt("Ingrese una letra: ");
let nuemro1 = parseInt(prompt("Ingrese un número entero: "));
let cadena = "";

for (let i = 0; i < numero1; i++) {
  cadena += letra;
}

console.log(cadena);

/* 05 Programa un script que pida a una persona que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4 */

/* ayuda: El progrma pide 4 veces a la persona que telcee un número y este escribe 5,9,10,12. El programa dirá "La media es 9" */

//solucion:

let suma = 0;

for (let i = 0; i < 4; i++) {
  let numero = parseInt(prompt("Ingrese un número: "));
  suma += numero;
}

let media = suma / 4;
console.log("La media es " + media);

/* 05 Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado. Luego deberá sacar esa lista con un alert. Los números se separarán por comas.  */

/*ayuda: Si le doy el número 5 pues deberá contar 0,1,2,3,4,5 */

//solucion

let valr = parseInt(prompt("Ingrese un valor entero: "));
let list = "";
let contador = 0;

while (contador <= valor) {
  lista += contador;
  if (contador !== valor) {
    lista += ", ";
  }
  contador++;
}

alert(lista);

/* 06-Se trata de pedir a la persona que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número */

/* ayuda: Si tecleo 0 me dirá Por favor teclee un número entre 1 y 5. */

// solucion

let numero2;

do {
  numero2 = parseInt(prompt("Ingrese un número entre 1 y 5: "));
} while (numero2 < 1 || numero2 > 5);

console.log("Número válido: " + numero2);

/* 07 Escribir un script que pida una contraseña. Si coincide le devolverá el mensaje "Acceso concedido" y si no coincide le deolverá el mensaje "Acceso Denegado" . Solo falla tres veces se emitirá el mensaje "Alerta, intruso" */

/* ayuda: La contraseña es por ejemplo pasar. Tecleo tres veces otra distinta: Acceso Intruso. */

/* solucion*/

const contraseña = "pasar";
let intentos = 0;
let ingreso = "";

while (ingreso !== contraseña) {
  ingreso = prompt("Ingrese la contraseña: ");
  intentos++;

  if (intentos === 3) {
    console.log("Alerta, intruso");
    break;
  }
}

if (ingreso === contraseña) {
  console.log("Acceso concedido");
} else {
  console.log("Acceso denegado");
}


//8 Crear un Programa que Pide una nota (número). Muestra la calificación según la nota:
/* 
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente */

//ayuda: UTILIZAR condicionales y DO - WHILE

//solucion
let nota = parseInt(prompt("Ingrese una nota: "));
let calificacion;

if (nota >= 0 && nota <= 3) {
  calificacion = "Muy deficiente";
} else if (nota > 3 && nota <= 5) {
  calificacion = "Insuficiente";
} else if (nota > 5 && nota <= 6) {
  calificacion = "Suficiente";
} else if (nota > 6 && nota <= 7) {
  calificacion = "Bien";
} else if (nota > 7 && nota <= 9) {
  calificacion = "Notable";
} else if (nota > 9 && nota <= 10) {
  calificacion = "Sobresaliente";
} else {
  calificacion = "Nota inválida";
}

console.log(calificacion);

//9     Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//Retornar el valor final.

//ayuda: Usar el bucle do ... while.

function aumentarValor(valor) {
    let contador = 0;
  
    do {
      valor += 5;
      contador++;
    } while (contador < 8);
  
    return valor;
  }
  
  console.log(aumentarValor(10)); // Salida: 50


/* 10 Realiza un script que le pida al usuario que telee la letra A (en mayúscula) y mientras no lo haga se lo vuelva a pedir. Usa un bulce do..while y la ventana alert para los mensajes */
/* ayuda:
El usuario teclea b, el programa vuelve a pedirme que teclee una letra
*/

//solucion

let letra1;

do {
  letra1 = prompt("Ingrese la letra A (en mayúscula): ");
} while (letra !== "A");

console.log("¡Correcto!");