/* Total de puntos 100
Los ejercicios tienen un valor de 2 puntos a excepción de:
operadoresLogicos
esVerdadero
doWhile
diaDeLaSemana
nuevoUsuario
tieneEmail
verificarPassword
Estos ejercicios Tienen un puntaje de 6 puntos */

console.log("-------------------Ejercicio 1------------------- \n");
function devolverString(str) {
    // "devolver" la string provista: str
    // Tu código:
    return console.log(str);
}
devolverString("Hola Mundo");


console.log("-------------------Ejercicio 2------------------- \n");
function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
    let suma = x + y;
    return console.log(`El resultado de la suma es ${suma}`);
}
suma(2, 3);


console.log("-------------------Ejercicio 3------------------- \n");
function resta(x, y) {
    // Resta "x" de "y" y devuelve el valor
    // Tu código:
    let resta = x - y;
    return console.log(`El resultado de la resta es ${resta}`);
}
resta(5, 3);


console.log("-------------------Ejercicio 4------------------- \n");
function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    let multiplica = x * y;
    return console.log(`El resultado de la multiplicacion es ${multiplica}`);
}
multiplica(3, 6);


console.log("-------------------Ejercicio 5------------------- \n");
function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    let divide = x / y;
    return console.log(`El resultado de la division es ${divide}`);
}
divide(81, 3);


console.log("-------------------Ejercicio 6------------------- \n");
function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
    let validacion = x === y;
    return console.log(validacion);
}
sonIguales(2, 2);


console.log("-------------------Ejercicio 7------------------- \n");
function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    let validacion = str1.length === str2.length;
    return console.log(validacion);
}
tienenMismaLongitud("Hola", "Mundo");


console.log("-------------------Ejercicio 8------------------- \n");
function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    let validacion = num < 90;
    return console.log(validacion);
}
menosQueNoventa(90);


console.log("-------------------Ejercicio 9------------------- \n");
function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num > 50) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
mayorQueCincuenta(51);


console.log("-------------------Ejercicio 10------------------- \n");
function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    let resto = x % y;
    return console.log(`El resto de la division es ${resto}`);
}
obtenerResto(10, 3);


console.log("-------------------Ejercicio 11------------------- \n");
function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    let validacion = num % 2 === 0;
    return console.log(`El número es par? ${validacion}`);
}
esPar(2);


console.log("-------------------Ejercicio 12------------------- \n");
function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    let validacion = num % 2 !== 0;
    return console.log(`El número es impar? ${validacion}`);
}
esImpar(3);


console.log("-------------------Ejercicio 13------------------- \n");
function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    //Tu código:
    if (numero > 0) {
        return console.log("Es positivo");
    }
    else if (numero < 0) {
        return console.log("Es negativo");
    }
    else {
        return console.log(false);
    }
}
esPositivo(1);


console.log("-------------------Ejercicio 14------------------- \n");
function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    let nuevaString = str + "!";
    return console.log(nuevaString);
}
agregarSimboloExclamacion("Hola Mundo");


console.log("-------------------Ejercicio 15------------------- \n");
function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "devJump" -> "Soy devJump"
    // Tu código:
    let nombreCompleto = nombre + " " + apellido;
    return console.log(`Soy ${nombreCompleto}`);
}
combinarNombres("Martin", "Gonzalez");


console.log("-------------------Ejercicio 16------------------- \n");
function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    let saludo = `Hola ${nombre}!`;
    return console.log(saludo);
}
obtenerSaludo("Martin");


console.log("-------------------Ejercicio 17------------------- \n");
function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectangulo teniendo su altura y ancho
    // Tu código:
    let area = alto * ancho;
    return console.log(`El area del rectangulo es ${area}`);
}
obtenerAreaRectangulo(24, 32);


console.log("-------------------Ejercicio 18------------------- \n");
function retornarPerimetro(lado) {
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    let perimetro = lado * 4;
    return console.log(`El perimetro del cuadrado es ${perimetro}`);
}
retornarPerimetro(4);


console.log("-------------------Ejercicio 19------------------- \n");
function areaDelTriangulo(base, altura) {
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    let area = (base * altura) / 2;
    return console.log(`El area del triangulo es ${area}`);
}
areaDelTriangulo(6, 10);


console.log("-------------------Ejercicio 20------------------- \n");
function deEuroAdolar(euro) {
    //Supongamos que 1 euro equivale a 1.20 dólares. 
    //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    let dolar = euro * 1.20;
    return console.log(`El cambio de euro a dolar es ${dolar} dolares`);
}
deEuroAdolar(2);


console.log("-------------------Ejercicio 21------------------- \n");
function esVocal(letra) {
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
    //Escribe tu código aquí
    if (letra.length > 1) {
        return console.log("Dato incorrecto, ingrese una sola letra");
    } else if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        return console.log("Es vocal");
    }
    else {
        return console.log("Dato incorrecto");
    }
}
esVocal("e");


console.log("-------------------Ejercicio 22------------------- \n");
function obtenerMayor(x, y) {
    // "x" e "y" son números enteros (int).
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
    if (x > y) {
        return console.log(`El numero mayor es ${x}`);
    } else if (x < y) {
        return console.log(`El numero mayor es ${y}`);
    }
    else {
        return console.log(`Los numeros son iguales`);
    }
}
obtenerMayor(3, 2);


console.log("-------------------Ejercicio 23------------------- \n");
function mayoriaDeEdad(edad) {
    //Determinar si la persona según su edad puede ingresar a un evento.
    //Si tiene 18 años ó más, devolver --> "Allowed"
    //Si es menor, devolver --> "Not allowed"
    //Escribe tu código aquí
    if (edad >= 18) {
        return console.log("Allowed");
    } else {
        return console.log("Not allowed");
    }
}
mayoriaDeEdad(18);


console.log("-------------------Ejercicio 24------------------- \n");
function conection(status) {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.
    //Escribe tu código aquí
    switch (status) {
        case 1:
            console.log("Online");
            break;
        case 2:
            console.log("Away");
            break;
        default:
            console.log("Offline");
            break;
    }
}
conection(1);


console.log("-------------------Ejercicio 25------------------- \n");
function saludo(idioma) {
    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "Ni Hao!"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
    // Tu código:
    switch (idioma) {
        case "aleman":
            console.log("Guten Tag!");
            break;
        case "mandarin":
            console.log("Ni Hao!");
            break;
        case "ingles":
            console.log("Hello!");
            break;
        default:
            console.log("Hola!");
            break;
    }
}
saludo("aleman");

function colors(color) {
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuleve --> "This is blue"
    //En caso que el color recibido sea "red", devuleve --> "This is red"
    //En caso que el color recibido sea "green", devuleve --> "This is green"
    //En caso que el color recibido sea "orange", devuleve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
    switch (color) {
        case "blue":
            console.log("This is blue");
            break;
        case "red":
            console.log("This is red");
            break;
        case "green":
            console.log("This is green");
            break;
        case "orange":
            console.log("This is orange");
            break;
        default:
            console.log("Color not found");
            break;
    }
}
colors("blue");


console.log("-------------------Ejercicio 26------------------- \n");
function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    if (numero === 10 || numero === 5) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
esDiezOCinco(10);


console.log("-------------------Ejercicio 27------------------- \n");
function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    if (numero < 50 && numero > 20) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
estaEnRango(30);


console.log("-------------------Ejercicio 28------------------- \n");
function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    if (numero % 3 === 0 && numero % 5 === 0) {
        return console.log("fizzbuzz");
    } else if (numero % 3 === 0) {
        return console.log("fizz");
    } else if (numero % 5 === 0) {
        return console.log("buzz");
    } else {
        return console.log(numero);
    }
}
fizzBuzz(15);


console.log("-------------------Ejercicio 29------------------- \n");
function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
    //Escribe tu código aquí
    if (num1 > num2 && num1 > num3 && num1 > 0) {
        return console.log("Número 1 es mayor y positivo");
    } else if (num1 < 0 || num2 < 0 || num3 < 0) {
        return console.log("Hay negativos");
    } else if (num3 > num1 && num3 > num2) {
        num3 = num3 + 1;
        return console.log(num3);
    } else if (num1 === 0 || num2 === 0 || num3 === 0) {
        return console.log("Error");
    } else {
        return console.log(false);
    }
}
operadoresLogicos(1, 2, 3);


console.log("-------------------Ejercicio 30------------------- \n");
function esVerdadero(valor) {
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí
    if (valor === true) {
        return console.log("Soy verdadero");
    } else {
        return console.log("Soy falso");
    }
}
esVerdadero(true);


console.log("-------------------Ejercicio 31------------------- \n");
function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
    let i = 0;
    do {
        numero = numero + 5;
        i++;
    } while (i < 8);
    console.log(numero);
}
doWhile(2);


console.log("-------------------Ejercicio 32------------------- \n");
function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí
    if (numeroDeDia === 1 || numeroDeDia === 7) {
        return console.log("Es fin de semana");
    } else {
        return console.log("Es dia Laboral");
    }
}
diaDeLaSemana(1);

console.log("-------------------Ejercicio 33------------------- \n");
function nuevoUsuario(nombre, email, password) {
    // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
    let usuario = {
        nombre: nombre,
        email: email,
        password: password
    }
    return console.log(usuario);
}
nuevoUsuario("Juan", "juan@gmail.com", "123456");


console.log("-------------------Ejercicio 34------------------- \n");
function tieneEmail(usuario) {
    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contratio, devuelve "false"
    // Tu código:
    if (usuario.email) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
tieneEmail({ nombre: "Laura", email: "laura@gmail.com" });


console.log("-------------------Ejercicio 35------------------- \n");
let userVerificado = {
    nombre: "Juan",
    email: "juan@gmail.com",
    password: "123456"
}

function verificarPassword(usuario, password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // Tu código:
    if (usuario.password === password) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
verificarPassword(userVerificado, "123456");