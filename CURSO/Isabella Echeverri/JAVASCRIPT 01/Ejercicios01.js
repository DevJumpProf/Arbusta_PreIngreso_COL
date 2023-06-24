/*  VARIABLES / TIPOS DE DATOS / OPERADORES / OBJETOS */

/* Precalentamos: */

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Me llamo Isabella";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 443;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;
 
 /* 01- Realizaste una compra y sabes el precio del producto (inventalo) y su iva (21)%. 
Haz un script que te calcule el precio total que vas a pagar por tu compra.
Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar precio por el iva y dividir por 100. */

/* Ayuda:
Precio 100€
Iva: 21%
El total son 121 €. */

// Solución ejercicio 1
console.log("--------------------EJERCICIO 1-------------------");


const precioDelProducto = 157;
console.log("El precio del producto es= " + precioDelProducto);

const resultado = (precioDelProducto*21)/100;
console.log("Total a pagar= " + (resultado+precioDelProducto));



/* 02- En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
el area la calculas como lado multiplicado por lado. El perémetro es la suma de los cuatro lados. */

/* Ayuda:
Lado 40
El area es 1600
El perímetro es 169 */

// tu solucion: 
console.log("---------------EJERCICIO 2----------------");

const ladoDelCuadrado = 40;
console.log("Los lados del cuadrado miden: " + ladoDelCuadrado);

const area = (ladoDelCuadrado*ladoDelCuadrado);
console.log("Por lo tanto, el area del cuadrado es de: "+ area);
console.log("Ahora calculemos el perimetro");
const perimetro = (ladoDelCuadrado+ladoDelCuadrado+ladoDelCuadrado+ladoDelCuadrado);
console.log("El perimetro del cuadrado es: "+ perimetro);

/* 03- Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre" */

/*Ayuda:
 Aparecerá el prompt y el usuario escribirá su nombre:
Usuario escribe juan
Hola Juan. */

// tu solucion: 
console.log("-----------------EJERCICIO 3----------------");

//NOTA: Se comenta la manera en la que se haría el ejercicio, puesto que en la terminal sale un error con el prompt
//var nombre = prompt("Escribe tu nombre");
//console.log("Bienvenid@ " + nombre);

var nombre = "Juan";
console.log("Escribe tu nombre");

console.log(nombre);
console.log("Bienvenid@ " + nombre);

/* 04- En este ejercicio vas a pedir a una persona que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3. */

/* Ayuda:
Si la persona teclea:
3
2
4
La media de los números es 3. */

// tu solucion: 

console.log("------------------EJERCICIO 4-----------------");

//NOTA: Se comenta la manera en la que se haría el ejercicio, puesto que en la terminal sale un error con el prompt
//calcularMedia(parseInt(prompt("Añade el primer numero: ")), parseInt(prompt("Añade el segundo numero: ")), parseInt(prompt("añade el tercer numero: ")));
function calcularMedia(num1 = 10, num2 = 32, num3 = 55) {
    media = (num1 + num2 + num3) / 3;
    return console.log("La media de los números ingresados es de: " + media);
}
calcularMedia();

/* 05-Escribe un programa que solicite a una persona ingresar el número de kilómetros recorridos por su coche, luego le pide el número de kilómetros recorridos. El script debe mostrar el consumo de combustible por kilómetro.
Un problema matemático muy simple numero de litros dividido por número de kilómetros. */

/*Ayuda:
La persona teclea
Num de litros: 20
Num de kilómetros: 80
Has consumido 4 l/km */

// tu solucion: 
console.log("-------------------EJERCICIO 5------------------");
//NOTA: Se comenta la manera en la que se haría el ejercicio, puesto que en la terminal sale un error con el prompt
//calcularConsumo(parseInt(prompt("Indique los Km recorridos: ")), parseInt(prompt("Indique los litros de gasolina consumidos: ")));

let litros = 30
let distancia = 90

let consumo = litros/distancia
let rendimiento = distancia/litros
console.log(`Usted ha consumido ${consumo} l/km y su rendimiento fue de ${rendimiento} km/l`);

/* 06- Cambio de unidades: en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
Recuerda una hora son 6o minutos y cada minuto son 60 segundos. */

/* Ayuda:
horas : 2
minutos 30
Resultado 2*60*60 + 30*60 = 9000 segundos */

/* tu solucion:  */
console.log("--------------------EJERCICIO 6---------------------");

function convertirASegundos(horas, minutos) {
    segundos = (horas * 60 * 60) + (minutos * 60);
    return console.log("Cuatro horas y quince minutos, equivalen a: " + segundos + " " + "segundos");
}

convertirASegundos(4, 15);

/* 7-Una tortilla de papas lleva 200 gramos de papas por persona. Por cada kilo de papas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias */

/* Ayuda:
.5 comensales,
Se necesitará:
1 kg de papas
5 huevos
300 gr de cebolla */

/* tu solucion: */
console.log("---------------------EJERCICIO 7-------------------------");
console.log("Ingrese la cantidad de comensales");

function calcularIngredientes(cantidadComensales) {
    kgPapas = cantidadComensales * 0.2;
    huevos = kgPapas * 5;
    cebolla = kgPapas * 300;
    return console.log(`Para ${cantidadComensales} comensales es necesario: ${kgPapas} kg de papas, ${huevos} huevos y ${cebolla} gramos de cebollas`);
}

calcularIngredientes(8);      

/* 8/No todo van ser números. Escribe un código que dado un número nos devuelva true si es un número par y false si es un número impar. No usar condiconales. */

/* Ayuda: */
/* numero: 50
¿Es par? : true */

// tu solución
console.log("---------------EJERCICIO 8---------------------");

function numeroPar(numero) {
    validar = numero % 2 === 0;
    return console.log(`El número ${numero}, ¿es par?: ${validar}`);
}

numeroPar(53);


/* 8-vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTML, el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones */

/* ayuda: Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Juan 8
 */

/* tu solucion:*/
console.log("--------------------EJERCICIO 9-----------------");
let estudiante = {
    nombre1: "Sara",
    notaIngles: 7 ,
    notaProgramacion: 10 ,
    notaHTML: 8
}
let mediaNotas = (estudiante.notaIngles + estudiante.notaProgramacion + estudiante.notaHTML)/3
console.log(`La media de las calificaciones de ${estudiante.nombre1} es de ${mediaNotas}`);
