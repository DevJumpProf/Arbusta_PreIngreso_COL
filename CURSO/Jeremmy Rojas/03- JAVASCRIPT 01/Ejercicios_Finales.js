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

function devolverString(str) {
  // "devolver" la string provista: str
  // Tu código:
  return str;
}
console.log(devolverString("hola mundo"));

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y;
}
console.log(suma(10, 10));

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  return x - y;
}
console.log(resta(10, 10));

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y;
}
console.log(multiplica(10, 10));

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x / y;
}
console.log(divide(10, 10));

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  return x == y;
}
console.log(sonIguales(10, 10));

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return str1.length == str2.length;
}
console.log(tienenMismaLongitud("casa", "hola"));

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  return num < 90;
}
console.log(menosQueNoventa(89));

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  return num > 50;
}
console.log(mayorQueCincuenta(51));

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}
console.log(obtenerResto(10, 8));

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  return num % 2 == 0;
}
console.log(esPar(7));

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  return num % 2 != 0;
}
console.log(esImpar(5));

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero == 0) {
    return numero != 0;
  } else {
    if (numero > 0) {
      return "Es positivo";
    } else {
      return "Es negativo";
    }
  }
}
console.log(esPositivo(0));

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return (str += "!");
}
console.log(agregarSimboloExclamacion("hola mundo"));

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "devJump" -> "Soy devJump"
  // Tu código:
  return `${nombre}  ${apellido}`;
}
console.log(combinarNombres("Soy", "devJump"));

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return `Hola ${nombre}!`;
}
console.log(obtenerSaludo("martin"));

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectangulo teniendo su altura y ancho
  // Tu código:
  return alto * ancho;
}
console.log(obtenerAreaRectangulo(12, 18));

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  return lado * 4;
}
console.log(retornarPerimetro(40));

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base * altura) / 2;
}
console.log(areaDelTriangulo(3, 4));

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares.
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.2;
}
console.log(deEuroAdolar(1).toFixed(2));

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
  letra = letra.toLowerCase(letra);
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    return "Es vocal";
  } else {
    if (letra.length != 1) {
      return "Dato incorrecto";
    } else {
      return "Dato incorrecto";
    }
  }
}
console.log(esVocal("A").toLowerCase());

function obtenerMayor(x = 5, y = 6) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:

  return x > y ? x : y;
}
console.log(obtenerMayor(6, 5));

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  return edad >= 18 ? "Allowed" : "Not allowed";
}
console.log(mayoriaDeEdad(17));

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  switch (status) {
    case 1:
      return "Online";
    case 2:
      return "Away";
    default:
      return "Offline";
  }
}
console.log(conection(1));
console.log(conection(2));
console.log(conection(3));

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch (idioma.toLowerCase(idioma)) {
    case "aleman":
      return "Guten Tag!";
    case "mandarin":
      return "Ni Hao!";
    case "ingles":
      return "Hello!";
    default:
      return "Hola!";
  }
}
console.log(saludo("Aleman"));

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color.toLowerCase(color)) {
    case "blue":
      return "This is blue";
    case "red":
      return "This is red";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
      return "Color not found";
  }
}
console.log(colors("bluE"));

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero === 10 || numero === 5 ? true : false;
}
console.log(esDiezOCinco(5));

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero < 50 && numero > 20 ? true : false;
}
console.log(estaEnRango(21));

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  return numero % 3 === 0 && numero % 5 === 0
    ? "fizzbuzz"
    : numero % 3 === 0
    ? "fizz"
    : numero % 5 === 0
    ? "buzz"
    : numero;
}
console.log(fizzBuzz(15));

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  return num1 < 0 || num2 < 0 || num3 < 0
    ? "Hay negativos"
    : num1 > num2 && num1 > num3 && num1 > 0
    ? `El número ${num1} es mayor y positivo`
    : num3 > num1 && num3 > num2
    ? `${num3 + 1}`
    : num1 == 0 || num2 == 0 || num3 == 0
    ? "Error"
    : false;
}
console.log(operadoresLogicos(5, 5, 5));

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

  return valor === true ? "Soy verdadero" : "Soy falso";
}
console.log(esVerdadero(false));

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let i = 0;
  do {
    numero += 5;
    i++;
  } while (i < 8);
  return numero;
}
console.log(doWhile(5));

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí

  if (
    numeroDeDia < 0 ||
    numeroDeDia > 7 ||
    typeof numeroDeDia != "number" ||
    !Number.isInteger(numeroDeDia)
  ) {
    return "Ese día no existe";
  } else {
    if (numeroDeDia === 7 || numeroDeDia === 1) {
      return "Es fin de semana";
    } else {
      return "Es día laboral";
    }
  }
}
console.log(diaDeLaSemana(7));

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  let usuario = {
    nombre,
    email,
    password,
  };
  return usuario;
}
console.log(nuevoUsuario("manuel", "manolito@gmail.com", "devJump-4578"));

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  return !!usuario.email;
}
let usuario1 = {
  nombre: "pablo",
  email: "pablo@gmail.com",
};
let usuario2 = {
  nombre: "pablo",
};
console.log(tieneEmail(usuario1));
console.log(tieneEmail(usuario2));

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  return usuario.contraseña === password;
}
let usuario3 = {
  nombre: "Terry",
  email: "crews25terry@hotmail.com",
  contraseña: "1234",
};
console.log(verificarPassword(usuario3, "123"));
console.log(verificarPassword(usuario3, "1234"));
