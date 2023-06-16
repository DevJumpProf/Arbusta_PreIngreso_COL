//variables
let nombre = "Roman"
var apellido = "Riquelme"
const documento = 333334444
nombre = "Juan"
/* documento = 33333 */
console.log(nombre);

//tipos de datos

let palabras = "Hola" // STRING - cadena de texto
let num1= 123.45 // NUMBER - numero
let num2 = 33 // NUMBER - numero
let encendido = true // BOOLEAN - Bolleano (verdadero o falso) - logico
let apagado = false// BOOLEAN - Bolleano (verdadero o falso) - logico


// OBJECT - OBJETO
let persona = {
    nombre: "Barry",
    apellido: "Allen",
    edad: 28,
    superheroe:true,
    // funcion
}

// array

let instrumentos = ["Congas", "Piano","Bongo"]

//operadores

//de asignacion
let edad = 35 // asigno el numero 35 a edad

//aritmeticos
10+15 // suma 25
10-15 // resta -5
10*15 // multiplicacion 150
10/15 //  division 1.5

21 % 5 // modulo 1

/* 15++ */ // incremento, es igual a 15+1 = 16
/* 15-- */ // decremento , es igual a 15-1 = 14

// de comparacion simple
console.log(10=="10");// devuelve un booleano false

// de comparacion estricta
console.log(10==="10")// devuelve un booleano false

15>15   /* mayor que -- false*/ 
15>=15 /*  mayor o igual que --true*/
10<15   /* menor que  -- true*/
10<=15  /* menor o igual que -- true*/

//logicos
/* and or */

/* AND && */
/* (10>15)&&(10>5) */
//FALSE - TRUE
// FaLSE

/* OR || */
/* (10>15)||(10>5) */
//FALSE - TRUE
  // TRUE

  // CONCATENACION
  let nombre1 = "Julieta"
  let apellido1 = "Perez"
  let edad1= 21

console.log("su edad es: "+ edad + " el nombre es "+ nombre1 +" su apellido es "+ apellido1);
console.log(`su edad es ${edad} el nombre es ${nombre1}`);

// condicional

let edad3= 18 
let nombre3 = "Gabriel"

if ((edad3>=18)&&(nombre3=="Faustino")) {
    console.log(nombre3+" podes pasar");
} else {
    console.log(nombre3 + " no podes pasar ( no te llamas Faustino)");
}

// funcion
/* function saludar () {
    console.log("hola como estas");
}
saludar() */

/* 
function saludar (nombre) {
    console.log("hola " + nombre + " como estas");
}
saludar("Edgar") */



// switch

function semaforo (color){
    switch (color.toUpperCase()) {
        case "ROJO":
            console.log("NO PODES PASAR");
            break;
            case "AMARILLO":
                console.log("PRECAUCION");
                break;
                case "VERDE":
                    console.log("PODES PASAR");
                    break;
                    default: 
                    console.log("no ingresaste un color correcto");
    }
}
semaforo("VerDe")








// evaluacion 1
/*  VARIABLES / TIPOS DE DATOS / OPERADORES / OBJETOS */

/* Precalentamos: */

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3245;

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

// tu solucion: 


/* 02- En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
el area la calculas como lado multiplicado por lado. El perémetro es la suma de los cuatro lados. */

/* Ayuda:
Lado 40
El area es 1600
El perímetro es 169 */

// tu solucion: 


/* 03- Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre" */

/*Ayuda:
 Aparecerá el prompt y el usuario escribirá su nombre:
Usuario escribe juan
Hola Juan. */

// tu solucion: 

/* 04- En este ejercicio vas a pedir a una persona que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3. */

/* Ayuda:
Si la persona teclea:
3
2
4
La media de los números es 3. */

// tu solucion: 


/* 05-Escribe un programa que solicite a una persona ingresar el número de kilómetros recorridos por su coche, luego le pide el número de kilómetros recorridos. El script debe mostrar el consumo de combustible por kilómetro.
Un problema matemático muy simple numero de litros dividido por número de kilómetros. */

/*Ayuda:
La persona teclea
Num de litros: 20
Num de kilómetros: 80
Has consumido 4 l/km */

// tu solucion: 


/* 06- Cambio de unidades: en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
Recuerda una hora son 6o minutos y cada minuto son 60 segundos. */

/* Ayuda:
horas : 2
minutos 30
Resultado 2*60*60 + 30*60 = 9000 segundos */

/* tu solucion:  */

/* 7-Una tortilla de papas lleva 200 gramos de papas por persona. Por cada kilo de papas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias */

/* Ayuda:
.5 comensales,
Se necesitará:
1 kg de papas
5 huevos
300 gr de cebolla */

/* tu solucion: */

/* 8/No todo van ser números. Escribe un código que dado un número nos devuelva true si es un número par y false si es un número impar. No usar condiconales. */

/* Ayuda: */
/* numero: 50
¿Es par? : true */

// tu solución

/* 8-vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTML, el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones */

/* ayuda: Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Juan 8
 */

/* tu solucion:*/












