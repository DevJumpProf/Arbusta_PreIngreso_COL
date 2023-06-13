/* CICLOS FOR / WHILE / DO WHILE */
 
/* 01-Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.  */ 

//ayuda:Si el usuario entra por teclado el número 5 el script devolverá la secuencia  0, 1, 2, 3, 4, 5  

//solucion

alert("SECUENCIA EN ASCENSO");

var numeroUsuario = parseInt(prompt("Ingrese un número por favor"));
var numeros = [];

if (numeroUsuario > 0) {
    for (let i = 0; i <= numeroUsuario; i++) {
        numeros.push(i);
    }
    alert(`Secuencia de números, del 0 al ${numeroUsuario}: ` + numeros);
} else {
    alert("El número debe ser positivo, intenta nuevamente.")
}


/* 02-Se trata de que dado un número entero el script muesre una cuenta atrás, es decir, una lista de numeros separados por coma desde el número tecleado hasta el 0. */

/* ayuda: Si tecle o número 5 deberá mostarar 5,4,3,2,1. */

//solucion

alert("SECUENCIA EN DESCENSO");

var numeroUsuario = parseInt(prompt("Ingrese un número por favor"));
var numeros = [];

if (numeroUsuario > 0) {
    for (let i = numeroUsuario; i > 0; i--) {
        numeros.push(i);
    }
    alert(`Secuencia de números, del 0 al ${numeroUsuario}: ` + numeros);
} else {
    alert("El número debe ser positivo, intenta nuevamente.")
}

/* 03-Este script debe escribir la tabla de multiplicar del número que la persona teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.
Recuerda que el salto de linea es el carácter "\n" */

/* ayuda: Si el usuario teclea el 4 la tabla mostrará diez líneas en la forma
4 x 1 = 4
4 x 2 = 8... */

//solucion

alert("TABLA DE MULTIPLICAR");

var numeroAMultiplicar = parseInt(prompt("Ingrese de que tabla quiere saber el número"));
console.log(`Tabla del número ${numeroAMultiplicar}`);
for (let i = 0; i <= 10; i++) {
    console.log(`Resultado de   ${i} * ${numeroAMultiplicar} =  ${numeroAMultiplicar * i}`);
}

/* 04-Este script la persona deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado. */

/* ayuda:Si la persona teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x */

//solucion

/* 05 Programa un script que pida a una persona que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4 */

/* ayuda: El progrma pide 4 veces a la persona que telcee un número y este escribe 5,9,10,12. El programa dirá "La media es 9" */

//solucion:

/* 05 Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado. Luego deberá sacar esa lista con un alert. Los números se separarán por comas.  */

/*ayuda: Si le doy el número 5 pues deberá contar 0,1,2,3,4,5 */

//solucion

/* 06-Se trata de pedir a la persona que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número */

/* ayuda: Si tecleo 0 me dirá Por favor teclee un número entre 1 y 5. */

// solucion

/* 07 Escribir un script que pida una contraseña. Si coincide le devolverá el mensaje "Acceso concedido" y si no coincide le deolverá el mensaje "Acceso Denegado" . Solo falla tres veces se emitirá el mensaje "Alerta, intruso" */

/* ayuda: La contraseña es por ejemplo pasar. Tecleo tres veces otra distinta: Acceso Intruso. */

/* solucion

8 Crear un Programa que Pide una nota (número). Muestra la calificación según la nota:
/* 
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente */

//ayuda: UTILIZAR condicionales y DO - WHILE

//solucion

//9     Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//Retornar el valor final.

//ayuda: Usar el bucle do ... while.


/* 10 Realiza un script que le pida al usuario que telee la letra A (en mayúscula) y mientras no lo haga se lo vuelva a pedir. Usa un bulce do..while y la ventana alert para los mensajes */
/* ayuda:
El usuario teclea b, el programa vuelve a pedirme que teclee una letra
*/

//solucion

alert("SÓLO UNA OPCIÓN PARA SEGUIR");

do{
    var letraUser = prompt("Ingresa la letra A, en mayúscula");

    if (letraUser === "A") {
        alert("Excelente, hata luego.");
    } else {
        alert("Recuerda que debe ser la letra A y en mayúscula");
    }

} while (letraUser !== "A");