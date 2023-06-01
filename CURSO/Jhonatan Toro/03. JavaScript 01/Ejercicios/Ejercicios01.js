
/* VARIABLES / TIPOS DE DATOS / OPERADORES / OBJETOS */

/* Precalentamos: */

// Crea una variable "string", puede contener lo que quieras:

const nuevoString = "Jhonatan Toro";

// Crea una variable numérica, puede ser cualquier número:

const nuevoNum = 25;

// Crea una variable booleana:

const nuevoBool = true;

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

// tu solución: 

console.log("------------------Ejercicio #1------------------");
console.log("                                                ");

function calcularTotal(precio, iva) {            
    let total = precio + ((precio * iva) / 100);
    return console.log(`El precio total es de: ${total} €`);
}

calcularTotal(100, 21);     //Ingresar precio en euros, del iva solo ingresar la parte numérica

console.log("                                                ");


/* 02- En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
el área la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados. */

/* Ayuda:
Lado 40
El área es: 1600
El perímetro es: 160 */

// tu solución: 

console.log("------------------Ejercicio #2------------------");
console.log("                                                ");

let lado = 40;

let areaCuadrado = lado * lado;
console.log(`El área del cuadrado es de: ${areaCuadrado}`);

let perimetroCuadrado = lado * 4;
console.log(`El perímetro del cuadrado es de: ${perimetroCuadrado}`);

console.log("                                                ");


/* 03- Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre" */

/*Ayuda:
Aparecerá el prompt y el usuario escribirá su nombre:
Usuario escribe juan
Hola Juan. */

// tu solución:

console.log("------------------Ejercicio #3------------------");
console.log("                                                ");

//let nombre = prompt("Ingrese su nombre: ");
//nombre = "Jhonatan"
//console.log(`Hola, ${nombre} !`);

function saludar(nombre = "usuario") {
    return console.log(`Hola, ${nombre}!`);
}

//saludar(prompt("Ingrese su nombre: "));  -------> Al usar prompt se crashea la terminal, voy a dejar el nombre que coloqué por default
saludar();

console.log("                                                ");


/* 04- En este ejercicio vas a pedir a una persona que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3. */

/* Ayuda:
Si la persona teclea:
3
2
4
La media de los números es 3. */

// tu solución: 

console.log("------------------Ejercicio #4------------------");
console.log("                                                ");

function calcularMedia(num1 = 3, num2 = 2, num3 = 4) {
    media = (num1 + num2 + num3) / 3;
    return console.log(`La media de los números ingresados es de: ${media}`);
}

//calcularMedia(parseInt(prompt("Ingrese el número #1: ")), parseInt(prompt("Ingrese el número #2: ")), parseInt(prompt("Ingrese el número #3: ")));  -------> Al usar prompt se crashea la terminal, voy a dejar los números que coloqué por default
calcularMedia();

console.log("                                                ");


/* 05-Escribe un programa que solicite a una persona ingresar el número de kilómetros recorridos por su coche, 
luego le pide el número de litros de gasolina consumidos. El script debe mostrar el consumo de combustible por kilómetro.
Un problema matemático muy simple número de litros dividido por número de kilómetros. */

/*Ayuda:
La persona teclea
Num de litros: 20
Num de kilómetros: 80
Has consumido 4 l/km */

// tu solución: 

console.log("------------------Ejercicio #5------------------");
console.log("                                                ");

function calcularConsumo(distancia = 80, litros = 20) {
    consumo = litros / distancia;
    rendimiento = distancia / litros
    return console.log(`Has consumido ${consumo} L/Km, es decir, por cada litro de gasolina pudiste andar ${rendimiento} Km`);
}

//calcularConsumo(parseInt(prompt("Ingrese los Km recorridos: ")), parseInt(prompt("Ingrese los litros de gasolina consumidos: ")));  -------> Al usar prompt se crashea la terminal, voy a dejar los valores que coloqué por default
calcularConsumo();

console.log("                                                ");


/* 06- Cambio de unidades: en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
Recuerda una hora son 6o minutos y cada minuto son 60 segundos. */

/* Ayuda:
horas : 2
minutos 30
Resultado 2*60*60 + 30*60 = 9000 segundos */

/* tu solución:  */

console.log("------------------Ejercicio #6------------------");
console.log("                                                ");

function convertirASegundos(horas, minutos) {
    segundos = (horas * 60 * 60) + (minutos * 60);
    return console.log(`*${horas}h y ${minutos}min equivalen a ${segundos}s`);
}

convertirASegundos(2, 30);      //Primero ingresar las horas, luego los minutos

console.log("                                                ");


/* 07-Una tortilla de papas lleva 200 gramos de papas por persona. Por cada kilo de papas se necesitan 5 huevos y 300 gramos de cebolla. 
Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias */

/* Ayuda:
.5 comensales,
Se necesitará:
1 kg de papas
5 huevos
300 gr de cebolla */

/* tu solución: */

console.log("------------------Ejercicio #7------------------");
console.log("                                                ");

function calcularIngredientes(cantidadComensales) {
    kgPapas = cantidadComensales * 0.2;
    huevos = kgPapas * 5;
    cebolla = kgPapas * 300;
    return console.log(`*Para ${cantidadComensales} comensales se necesitan: ${kgPapas} Kg de papas, ${huevos} huevos y ${cebolla} gr de cebolla`);
}

calcularIngredientes(5);      //Ingresar la cantidad de comensales

console.log("                                                ");


/* 08-No todo van ser números. Escribe un código que dado un número nos devuelva true si es un número par y false si es un número impar. No usar condiconales. */

/* Ayuda: */
/* numero: 50
¿Es par? : true */

// tu solución

console.log("------------------Ejercicio #8------------------");
console.log("                                                ");

function verificarPar(numero) {
    procedencia = numero % 2 === 0;
    return console.log(`El número ${numero}, ¿es par?: ${procedencia}`);
}

verificarPar(50);      //Ingresar el número que deseemos verificar

console.log("                                                ");


/* 09-vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. 
El curso contiene tres materias: Ingles, programación y HTML, el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. 
El script imprimirá el nombre y la media de sus calificaciones */

/* ayuda: Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Juan 8 */

/* tu solucion:*/

console.log("------------------Ejercicio #9------------------");
console.log("                                                ");

let estudiante = {
    nombre: "Juan",
    notaIngles: 9,
    notaProgramacion: 8,
    notaHTML: 7
};

let mediaCalificaciones = (estudiante.notaIngles + estudiante.notaProgramacion + estudiante.notaHTML) /3;
console.log(`Estudiante: ${estudiante.nombre}`);
console.log(`Media de sus calificaciones: ${mediaCalificaciones}`);

console.log("                                                ");




