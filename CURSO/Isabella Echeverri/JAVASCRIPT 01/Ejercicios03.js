/* CICLOS FOR / WHILE / DO WHILE */
 
/* 01-Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.  */ 

//ayuda:Si el usuario entra por teclado el número 5 el script devolverá la secuencia  0, 1, 2, 3, 4, 5  

//solucion

console.log("------------------EJERCICIO 1-----------------");

function numEntero(num) {
    let numeros = [];
    for (let i = 0; i <= num; i += 1) {
        numeros.push(i);
    }
    let resultado = numeros.join(", ");  
    console.log(resultado);
}

numEntero(10)

/* 02-Se trata de que dado un número entero el script muesre una cuenta atrás, es decir, una lista de numeros separados por coma desde el número tecleado hasta el 0. */

/* ayuda: Si tecle o número 5 deberá mostarar 5,4,3,2,1. */

//solucion

console.log("--------------------EJERCICIO 2--------------------");

function cuentaAtras(num) {
    let numeros = [];
    for (let i = num; i >= 0; i -= 1) {
        numeros.push(i);
    }
    let resultado = numeros.join(", ");  //Uno los números del objeto con comas
    console.log(resultado);
}

cuentaAtras(8)

/* 03-Este script debe escribir la tabla de multiplicar del número que la persona teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.
Recuerda que el salto de linea es el carácter "\n" */

/* ayuda: Si el usuario teclea el 4 la tabla mostrará diez líneas en la forma
4 x 1 = 4
4 x 2 = 8... */

//solucion

console.log("----------------EJERCICIO 3------------------");

function tablaMultiplicar(num) {
    let numeros = [];
    for (let i = 1; i <= 10; i += 1) {
        let producto = num * i;
        console.log(`${num} x ${i} = ${producto}`);
    }
}

tablaMultiplicar(7)

/* 04-Este script la persona deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado. */

/* ayuda:Si la persona teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x */

//solucion

console.log("------------------------EJERCICIO 4-----------------");

function mostrarCadena(letra, num) {
    let caracter = [];
    for (let i = 1; i <= num; i += 1) {
        caracter.push(letra);
    }
    let resultado = caracter.join("");  
    console.log(`Cadena de ${num} repeticiones el caracter ${letra}: ${resultado}`);
}

mostrarCadena("M",3)

/* 05 Programa un script que pida a una persona que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4 */

/* ayuda: El progrma pide 4 veces a la persona que telcee un número y este escribe 5,9,10,12. El programa dirá "La media es 9" */

//solucion:

console.log("------------------EJERCICIO 5---------------------");
function calcularMedia() {
    let suma = 0;
    let num1 = 9;
    let num2 = 20;
    let num3 = 50;
    let num4 = 15;
    suma = (num1 + num2 + num3 + num4);
    let media = suma / 4;
    console.log(`La media de los números escogidos es de: ${media}`);
}
calcularMedia()

/* 06 Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado. Luego deberá sacar esa lista con un alert. Los números se separarán por comas.  */

/*ayuda: Si le doy el número 5 pues deberá contar 0,1,2,3,4,5 */

//solucion

console.log("----------------------EJERCICIO 6------------------");

function crearLista(num) {
    let numeros = [];
    let i = 0;
    while (i <= num) {
        numeros.push(i);
        i += 1;
    }
    let resultado = numeros.join(","); 
    //alert(`Conteo: ${numeros}`); ----  (Así se muestra el Alert)
    console.log(`La lista con el número ingresados es: ${resultado}`);
}
 crearLista(7)

/* 07-Se trata de pedir a la persona que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número */

/* ayuda: Si tecleo 0 me dirá Por favor teclee un número entre 1 y 5. */

// solucion
console.log("----------------------EJERCICIO 7------------------");

function comprobarRango(num) {
    while ((num < 1) && (num > 5)) {
        num = parseInt(prompt("Por favor ingrese un número entre 1 y 5: "));
    }
    console.log(`El número ${num} pertenece al rango entre 1 y 5`);
}

comprobarRango(3)
/* 08-Escribir un script que pida una contraseña. Si coincide le devolverá el mensaje "Acceso concedido" y si no coincide le deolverá el mensaje "Acceso Denegado". 
Solo falla tres veces se emitirá el mensaje "Alerta, intruso" */

/* ayuda: La contraseña es por ejemplo pasar. Tecleo tres veces otra distinta: Alerta, intruso. */

// solución:

console.log("------------------------EJERCICIO 8-------------------");

function comprobarContraseña(contraseña) {
    let i = 2;
    while ((i >= 1) && (contraseña != "entrar")) {
        contraseña = prompt(`Acceso denegado, le quedan ${i} intentos: `);
        i -= 1;
        if (i == 0) {
            console.log(`Alerta, intruso!!`);
        }
    }
    if (contraseña == "entrar") {
        console.log(`Acceso concedido`);
    }
}

comprobarContraseña("entrar");
//Se realiza de esta manera puesto que al usar promp aparece un error en la terminal

// 09-Crear un Programa que Pide una nota (número). Muestra la calificación según la nota:
/* 
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente */

//ayuda: UTILIZAR condicionales y DO - WHILE

//solución: 

console.log("-------------------EJERCICIO 9------------------");

function mostrarCalificacion(nota) {
    do {
        //nota = parseInt(prompt("Ingrese la nota: "));  ---- Se realiza de esta manera puesto que al usar promp aparece un error en la terminal
    } while (isNaN(nota) || nota < 0 || nota > 10)

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
    }
    console.log(`Según su nota ingresada, ${nota} su calificación es: ${calificacion}`);
}
mostrarCalificacion(10);

// 10 Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//Retornar el valor final.

//ayuda: Usar el bucle do ... while.
// solución:

console.log("----------------EJERCICIO 10-------------------");

function aumentoValor(num) {
    let i = 8;

    do {
        num += 5;
        i -= 1;
    } while (i >= 1)

    console.log(`El valor final es de: ${num}`)
}

aumentoValor(30);

/* 11 Realiza un script que le pida al usuario que telee la letra A (en mayúscula) y mientras no lo haga se lo vuelva a pedir. Usa un bulce do..while y la ventana alert para los mensajes */
/* ayuda:
El usuario teclea b, el programa vuelve a pedirme que teclee una letra
*/

//solucion

console.log("-------------------EJERCICIO 11-------------------");

function confirmarLetra(letra) {
    do {
        //nota = parseInt(alert("Ingrese la letra A en mayúscula: "));   Se realiza de esta  manera porque aparece un valor en la terminal
    } while (letra != "A")

    console.log("La letra ingresada es correcta")
}

confirmarLetra("A");

