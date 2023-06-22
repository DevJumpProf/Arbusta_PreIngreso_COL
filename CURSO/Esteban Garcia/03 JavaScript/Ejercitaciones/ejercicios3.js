/* CICLOS FOR / WHILE / DO WHILE */

/* 01-Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.  */ 

//ayuda:Si el usuario entra por teclado el número 5 el script devolverá la secuencia  0, 1, 2, 3, 4, 5  

//solucion
function listaNumeros(num) {
    let lista = [];
    for (let i = 0; i <= num; i++) {
        lista.push(i);
    }
    return console.log(lista.join(", "));
}
listaNumeros(5);


/* 02-Se trata de que dado un número entero el script muesre una cuenta atrás, es decir, una lista de numeros separados por coma desde el número tecleado hasta el 0. */

/* ayuda: Si tecle o número 5 deberá mostarar 5,4,3,2,1. */

//solucion
function cuentaAtras(num) {
    let lista = [];
    for (let i = num; i >= 0; i--) {
        lista.push(i);
    }
    return console.log(lista.join(", "));
}
cuentaAtras(5);

/* 03-Este script debe escribir la tabla de multiplicar del número que la persona teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.
Recuerda que el salto de linea es el carácter "\n" */

/* ayuda: Si el usuario teclea el 4 la tabla mostrará diez líneas en la forma
4 x 1 = 4
4 x 2 = 8... */

//solucion
function tablaMultiplicar(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num*i}`);
    }
}
tablaMultiplicar(4);


/* 04-Este script la persona deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado. */

/* ayuda:Si la persona teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x */

//solucion
function cadenaLetra(num, letra) {
    let cadena = "";
    for (let i = 0; i < num; i++) {
        cadena += letra;
    }
    return console.log(cadena);
}
cadenaLetra(5, "x");

/* 05 Programa un script que pida a una persona que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4 */

/* ayuda: El progrma pide 4 veces a la persona que telcee un número y este escribe 5,9,10,12. El programa dirá "La media es 9" */

//solucion:
// Este bloque de código se comenta porque no funciona por medio de la terminal

/* function mediaAritmetica() {
    let suma = 0;
    for (let i = 0; i < 4; i++) {
        let num = parseInt(prompt("Ingrese un numero"));
        suma += num;
    }
    return console.log(`La media es ${suma/4}`);
}
mediaAritmetica(); */

/* 05 Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado. Luego deberá sacar esa lista con un alert. Los números se separarán por comas.  */

/*ayuda: Si le doy el número 5 pues deberá contar 0,1,2,3,4,5 */

//solucion
function listaNumeros(num) {
    let lista = [];
    let i = 0;
    while (i <= num) {
        lista.push(i);
        i++;
    }
    return console.log(lista.join(", "));
}
listaNumeros(5);

/* 06-Se trata de pedir a la persona que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número */

/* ayuda: Si tecleo 0 me dirá Por favor teclee un número entre 1 y 5. */

// solucion
// Este bloque de código se comenta porque no funciona por medio de la terminal
/* function numeroEntre1y5() {
    let num = parseInt(prompt("Ingrese un numero entre 1 y 5"));
    while (num < 1 || num > 5) {
        num = parseInt(prompt("Por favor teclee un número entre 1 y 5"));
    }
    return console.log(`El numero ingresado es ${num}`);
}
numeroEntre1y5(); */

/* 07 Escribir un script que pida una contraseña. Si coincide le devolverá el mensaje "Acceso concedido" y si no coincide le deolverá el mensaje "Acceso Denegado" . Solo falla tres veces se emitirá el mensaje "Alerta, intruso" */

/* ayuda: La contraseña es por ejemplo pasar. Tecleo tres veces otra distinta: Acceso Intruso. */

//solucion
//Este bloque de código se comenta porque no funciona por medio de la terminal

/* function password(){
    let pass = prompt("Ingrese una contraseña");
    let intentos = 2;
    while (pass !== "pasar" && intentos > 0) {
        pass = prompt("Contraseña incorrecta, ingrese nuevamente");
        intentos--;
    }
    if (intentos === 0) {
        return console.log("Acceso intruso");
    } else {
        return console.log("Acceso concedido");
    }
}
password(); */

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
function nota(num) {
    if (num >= 0 && num <= 3) {
        return console.log("Muy deficiente");
    } else if (num > 3 && num <= 5) {
        return console.log("Insuficiente");
    } else if (num > 5 && num <= 6) {
        return console.log("Suficiente");
    } else if (num > 6 && num <= 7) {
        return console.log("Bien");
    } else if (num > 7 && num <= 9) {
        return console.log("Notable");
    } else if (num > 9 && num <= 10) {
        return console.log("Sobresaliente");
    } else {
        return console.log("El numero ingresado no es valido");
    }
}
nota(5);

//9     Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//Retornar el valor final.

//ayuda: Usar el bucle do ... while.
function aumentar(num) {
    let i = 0;
    do {
        num += 5;
        i++;
    } while (i < 8);
    return console.log(num);
}
aumentar(5);


/* 10 Realiza un script que le pida al usuario que telee la letra A (en mayúscula) y mientras no lo haga se lo vuelva a pedir. Usa un bulce do..while y la ventana alert para los mensajes */
/* ayuda:
El usuario teclea b, el programa vuelve a pedirme que teclee una letra
*/

//solucion
//Este bloque de código se comenta porque no funciona por medio de la terminal

/*function letraA() {
    let letra = prompt("Ingrese la letra A en mayuscula");
    do {
        letra = prompt("Ingrese la letra A en mayuscula");
    } while (letra !== "A");
    return console.log("La letra ingresada es A");
}
letraA();*/