/*  VARIABLES / TIPOS DE DATOS / OPERADORES / OBJETOS */

/* Precalentamos: */

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Sebastian Salazar";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 16;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5  === 5;

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

// tu solucion: 

// Definir el precio y el porcentaje de IVA
let precio = 100; // Precio del producto
let iva = 21; // Porcentaje de IVA

// Calcular el total a pagar
let total = precio + (precio * iva / 100);

// Imprimir el resultado
console.log("El total a pagar es: " + total + "€");


/* 02- En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
el area la calculas como lado multiplicado por lado. El perémetro es la suma de los cuatro lados. */

/* Ayuda:
Lado 40
El area es 1600
El perímetro es 169 */

// tu solucion:

// Definir el lado del cuadrado
let lado = 40;

// Calcular el área del cuadrado
let area = lado * lado;

// Calcular el perímetro del cuadrado
let perimetro = 4 * lado;

// Imprimir los resultados
console.log(`El área del cuadrado es de: ${area}`);
console.log(`El perímetro del cuadrado es de: ${perimetro}`);


/* 03- Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre" */

/*Ayuda:
 Aparecerá el prompt y el usuario escribirá su nombre:
Usuario escribe juan
Hola Juan. */

// tu solucion: 


let nombre = "juan"

// Mostrar el saludo
console.log("Hola " + nombre + ".");

/* 04- En este ejercicio vas a pedir a una persona que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3. */

/* Ayuda:
Si la persona teclea:
3
2
4
La media de los números es 3. */

// tu solucion: 


let nuemro1 = 3;
let numero2 = 2;
let numero3 = 4;

let valormedia = (nuemro1 + numero2 + numero3)/3;

// Mostrar el resultado en la consola
console.log("El valor medio de los tres números es: " + valormedia);

/* 05-Escribe un programa que solicite a una persona ingresar el número de kilómetros recorridos por su coche, luego le pide el número de kilómetros recorridos. El script debe mostrar el consumo de combustible por kilómetro.
Un problema matemático muy simple numero de litros dividido por número de kilómetros. */

/*Ayuda:
La persona teclea
Num de litros: 20
Num de kilómetros: 80
Has consumido 4 l/km */

// tu solucion: 


let litros = 20;
let kilometros = 80;


let consumo = litros / kilometros;

// Mostrar el resultado
console.log("Has consumido " + consumo.toFixed(2) + " l/km");

/* 06- Cambio de unidades: en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
Recuerda una hora son 6o minutos y cada minuto son 60 segundos. */

/* Ayuda:
horas : 2
minutos 30
Resultado 2*60*60 + 30*60 = 9000 segundos */

/* tu solucion:  */


let horas = 2;
let minutos = 30;


let segundos = horas * 60 * 60 + minutos * 60;

// Mostrar el resultado
console.log("El tiempo en segundos es: " + segundos + " segundos");

/* 7-Una tortilla de papas lleva 200 gramos de papas por persona. Por cada kilo de papas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias */

/* Ayuda:
.5 comensales,
Se necesitará:
1 kg de papas
5 huevos
300 gr de cebolla */

/* tu solucion: */

function calcularIngredientes(numComensales) {
    const gramosPapasPorPersona = 200;
    const gramosCebollaPorKiloPapas = 300;
    const huevosPorKiloPapas = 5;
  
    const kilosPapas = numComensales * gramosPapasPorPersona / 1000;
    const huevos = kilosPapas * huevosPorKiloPapas;
    const gramosCebolla = kilosPapas * gramosCebollaPorKiloPapas;
  
    return {
      papas: kilosPapas.toFixed(2),
      huevos: huevos.toFixed(0),
      cebolla: gramosCebolla.toFixed(2)
    };
  }
  

  const numComensales = 5; // Número de comensales
  const ingredientes = calcularIngredientes(numComensales);
  
  console.log(`Para ${numComensales} comensales, se necesitará:`);
  console.log(`${ingredientes.papas} kg de papas`);
  console.log(`${ingredientes.huevos} huevos`);
  console.log(`${ingredientes.cebolla} gr de cebolla`);


/* 8/No todo van ser números. Escribe un código que dado un número nos devuelva true si es un número par y false si es un número impar. No usar condiconales. */

/* Ayuda: */
/* numero: 50
¿Es par? : true */

// tu solución

function esPar(numero) {
    return numero % 2 === 0;
  }
  
  // Ejemplo de uso
  const numero = 50;
  const esParNumero = esPar(numero);
  
  console.log(`¿Es par? : ${esParNumero}`);

/* 8-vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTML, el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones */

/* ayuda: Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Juan 8
 */

/* tu solucion:*/

const alumno = {
    nombre: "Juan",
    calificaciones: {
      Ingles: 9,
      programacion: 8,
      HTML: 7
    }
  };
  
  function calcularPromedio(calificaciones) {
    const valoresCalificaciones = Object.values(calificaciones);
    const sumaCalificaciones = valoresCalificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
    const promedio = sumaCalificaciones / valoresCalificaciones.length;
    return promedio;
  }
  
  const promedioAlumno = calcularPromedio(alumno.calificaciones);
  
  console.log(`Nota media de ${alumno.nombre}: ${promedioAlumno}`)