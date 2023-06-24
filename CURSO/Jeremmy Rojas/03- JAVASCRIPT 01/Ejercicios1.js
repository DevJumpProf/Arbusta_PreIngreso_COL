const prompt = require("prompt-sync")();
/*  VARIABLES / TIPOS DE DATOS / OPERADORES / OBJETOS */

/* Precalentamos: */

// Crea una variable "string", puede contener lo que quieras:
var nuevaString = "Camioneta";

// Crea una variable numérica, puede ser cualquier número:
var nuevoNum = 577;

// Crea una variable booleana:
var nuevoBool = true;

// Resuelve el siguiente problema matemático:
var nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
var nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
var nuevoModulo = 21 % 5 === 1;

/* 01- Realizaste una compra y sabes el precio del producto (inventalo) y su iva (21)%. 
Haz un script que te calcule el precio total que vas a pagar por tu compra.
Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar precio por el iva y dividir por 100. */

/* Ayuda:
Precio 100€
Iva: 21%
El total son 121 €. */

// tu solucion:
console.log(
  "----------------------------------------Ejercicio1----------------------------------------"
);
console.log("");
var precio = 500;
var iva = (precio * 21) / 100;
var total = precio + iva;

console.log("El total a pagar es " + total);
console.log("");

/* 02- En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
el area la calculas como lado multiplicado por lado. El perémetro es la suma de los cuatro lados. */

/* Ayuda:
Lado 40
El area es 1600
El perímetro es 160 */

// tu solucion:
console.log(
  "----------------------------------------Ejercicio2----------------------------------------"
);
console.log("");
var lado = 40;
var area = lado * lado;
var perimetro = lado * 4;
console.log(
  `El area del cuadrado es ${area}. El perimetro del cuadrado es ${perimetro}`
);
console.log("");

/* 03- Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre" */

/*Ayuda:
 Aparecerá el prompt y el usuario escribirá su nombre:
Usuario escribe juan
Hola Juan. */

// tu solucion:

console.log(
  "----------------------------------------Ejercicio3----------------------------------------"
);
console.log("");
var nombre = prompt("Por favor ingrese su nombre ");
console.log("");
console.log("Hola " + nombre);
console.log("");

/* 04- En este ejercicio vas a pedir a una persona que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3. */

/* Ayuda:
Si la persona teclea:
3
2
4
La media de los números es 3. */

// tu solucion:

console.log(
  "----------------------------------------Ejercicio4----------------------------------------"
);
console.log("");
console.log(
  "A continuación encontraremos la media de los 3 números que usted decida."
);
console.log("");
var numero1 = Number(prompt("Por favor digite el primer número "));
var numero2 = Number(prompt("Por favor digite el segundo número "));
var numero3 = Number(prompt("Por favor digite el tercer número "));

resultado = (numero1 + numero2 + numero3) / 3;
console.log("");
console.log(`La media de estos números es: ${resultado} `);
console.log("");

/* 05-Escribe un programa que solicite a una persona ingresar el número de kilómetros recorridos por su coche, luego le pide el número de kilómetros recorridos. El script debe mostrar el consumo de combustible por kilómetro.
Un problema matemático muy simple numero de litros dividido por número de kilómetros. */

/*Ayuda:
La persona teclea
Num de litros: 20
Num de kilómetros: 80
Has consumido 4 l/km */

// tu solucion:

console.log(
  "----------------------------------------Ejercicio5----------------------------------------"
);
console.log("");
console.log(
  "A continuación calcularemos el gasto de combustible de tu vehículo."
);
console.log("");
var combustible = Number(
  prompt("Por favor escriba los litros de su combustible ")
);
var kilometros = Number(prompt("Por favor escriba los kilómetros recorridos "));

var resultado = kilometros / combustible;
console.log("");
console.log(`su vehículo recorre ${resultado} Km/l`);
console.log("");

/* 06- Cambio de unidades: en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
Recuerda una hora son 60 minutos y cada minuto son 60 segundos. */

/* Ayuda:
horas : 2
minutos 30
Resultado 2*60*60 + 30*60 = 9000 segundos */

// tu solucion:

console.log(
  "----------------------------------------Ejercicio6----------------------------------------"
);
console.log("");
console.log("Convertiremos una hora dada en horas y minutos a segundos.");
console.log("");
var horas = Number(prompt("Por favor escriba las horas "));
var minutos = Number(prompt("Por favor escriba los minutos "));

var resultado = horas * 3600 + minutos * 60;
console.log("");
console.log(
  `La hora ${horas}:${minutos} convertida a segundos es: ${resultado}`
);
console.log("");

/* 7-Una tortilla de papas lleva 200 gramos de papas por persona. Por cada kilo de papas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias */

/* Ayuda:
.5 comensales,
Se necesitará:
1 kg de papas
5 huevos
300 gr de cebolla */

/* tu solucion: */

console.log(
  "----------------------------------------Ejercicio7----------------------------------------"
);
console.log("");
function ingredientes(nComensales) {
  nComensales = Number(nComensales);
  var grPapas = 0.2 * nComensales;
  var huevos = 5 * grPapas;
  var grCebolla = 300 * grPapas;
  return `Para ${nComensales} comensales se necesitarán: ${grPapas}kg de papas, ${huevos} huevos y ${grCebolla}gr de cebolla.`;
}

console.log(ingredientes(prompt("¿Cuantos comensales son? ")));
console.log("");

/* 8/No todo van ser números. Escribe un código que dado un número nos devuelva true si es un número par y false si es un número impar. No usar condiconales. */

/* Ayuda: */
/* numero: 50
¿Es par? : true */

// tu solución

console.log(
  "----------------------------------------Ejercicio8----------------------------------------"
);
console.log("");
var numero = Number(
  prompt("Por favor escribe el número del que quieras saber si es par o impar ")
);
resultado = numero % 2 == 0;
console.log(
  `Si el número es par, dirá true, si es impar, dirá false: ${resultado}`
);
console.log("");

/* 9-vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTML, el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones */

/* ayuda: Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Juan 8
 */

/* tu solucion:*/

console.log(
  "----------------------------------------Ejercicio9----------------------------------------"
);
console.log("");
var alumno = {
  nombreAlumno: "juan",
  notaIngles: 7,
  notaProgramacion: 9,
  notaHtml: 6,
};

var promedio =
  (alumno.notaIngles + alumno.notaProgramacion + alumno.notaHtml) / 3;
console.log(
  `Juan tiene un ${alumno.notaIngles} en inglés, un ${
    alumno.notaProgramacion
  } en programación y un ${
    alumno.notaHtml
  } en HTML. Con esto, su promedio para el semestre es ${promedio.toFixed(2)}`
);
console.log("");
