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

console.log("----------Ejercicio 1-----------");
console.log("                         ");

function devolverString(str) {
    // "devolver" la string provista: str
    // Tu código:
  return console.log(`Palabra dada: ${str}`);
  }
  devolverString("String");
console.log("                     ");
  
console.log("-------Ejercicio 2-------");
console.log("                    ");

  function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
  let total = x + y;
  return console.log(`La suma de los párametros ${x} + ${y} es = ${total}`);

  }
suma(6, 12)

console.log("                            ");

console.log("---------Ejercicio 3-----------");
console.log("                           ");

 function resta(x, y) {
    // Resta "x" de "y" y devuelve el valor
    // Tu código:
    let total = x - y
    console.log(`La resta de los parametros ${x} - ${y} es = ${total}`);

  }
resta(6,12)

console.log("                  ");

console.log("------------Ejercicio 4----------------");
console.log("                       ");  

  function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    let total = x * y
    console.log(`La multiplicación de los parametros ${x} * ${y} es = ${total}`)
  
  }
  multiplica(6, 12)


  console.log("                  ");



  console.log("---------Ejercicio 5------------");
  console.log("                  ");

  function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    let total = x / y
    console.log(`La division de los parametros ${x} / ${y} es = ${total}`);

  
  }
  divide(6, 12)
  console.log("                  ");


  console.log("---------Ejercicio 6------------");
  console.log("                  ");

  function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
    let comparar = x === y
    return console.log(`Los números ${x} y ${y} son iguales?: ${comparar} `);

  }
  sonIguales(2,2);
  sonIguales(6,12);
  
console.log("                     ");


console.log("--------------Ejercicio 7----------------")
console.log("                         ");

  function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    let comparar = str1.lenght === str2.lenght
    return console.log(`Los textos ${str1} y ${str2} ¿Tienen la misma longitud?: ${comparar}`);

  }
  
tienenMismaLongitud("casa", "doctor");
tienenMismaLongitud("casa", "dado");

console.log("                       ");
  
console.log("----------Ejercicio 8------------");
console.log("                     ");

  function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    let comparar = num < 90;
    return console.log(`El argumento ${num} es menor que noventa?: ${comparar}`);
  
  }
  menosQueNoventa(100);
  menosQueNoventa(80);

console.log("                                       ");


console.log("------------Ejercicio 9-------------")
console.log("                                       ");


  function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    let comparar = num > 50;
    return console.log(`El argumento ${num} es mayor que cincuenta?: ${comparar}`);
  }
  
mayorQueCincuenta(80);
mayorQueCincuenta(40);

console.log("                       ");


console.log("---------------Ejercicio 10----------");
console.log("                       ");


function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
  let resto = x % y 
  return console.log(`El resto entre los numeros ${x} y ${y} es: ${resto}`);

  }
  
obtenerResto(10, 65);

console.log("                  ");



console.log("--------------ejercicio 11-----------");
console.log("                ");

  function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    let modulo = num % 2 === 0;
    return console.log(`El numero ${num} es par? ${modulo}`);

  }

  esPar(5);
  esPar(10);

  console.log("             ");


  console.log("------------Ejercicio 12------------");
  console.log("             ");

  function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    let modulo = num % 2 !== 0;
return console.log(`El número ${num} es impar? ${modulo}`);
  
  }
  
  esImpar(11);
  esImpar(2);
  
console.log("              ");

console.log("---------Ejercicio 13--------");
console.log("              ");

  function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    if (numero > 0) {
console.log(`El numero ${numero} es positivo`);
    } else if (numero < 0){
console.log(`El numero ${numero} es negativo`);
    } else {
  let comparar = numero !== 0
  console.log(`El nùmero ${numero} es positivo o negativo? ${comparar}`);
}

}

esPositivo(5);
esPositivo(-10);
esPositivo(0);

  console.log("                 ");


  console.log("--------Ejercicio 14---------");
  console.log("                 ");

  
  function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    return console.log(`${str}`);
  
  }
  agregarSimboloExclamacion("Bienvenidos");

  console.log("                ");


 
 console.log("----------Ejercicio 15------------");
 console.log("                   ");

  function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "devJump" -> "Soy devJump"
    // Tu código:
   return console.log(`Nombre completo: ${nombre} ${apellido}`);
  }
  combinarNombres("Luisa", "Díaz")

console.log("                  ");

console.log("----------Ejercicio 16-----------");
console.log("                  ");


  function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
  return console.log(`Hola ${nombre}!`);
}
obtenerSaludo("Luisa")

""
console.log("                ");

console.log("--------------------Ejercicio 17----------------------");
console.log("                ");

  function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un cuadrado teniendo su altura y ancho
    // Tu código:
  let area = alto * ancho
  return console.log(`el area del rectangulo es: ${area}`);

  }
  
  obtenerAreaRectangulo(5, 10)

console.log("             ");

console.log("----------------Ejercicio 18-----------");
console.log("             ");


  function retornarPerimetro(lado){
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  let perimetro = lado * 4
  return console.log(`El perimetro del cuadrado es: ${perimetro}`);
  
  }
retornarPerimetro(4)
console.log("                     ");



console.log("------------Ejercicio 19------------");
console.log("                     ");

  function areaDelTriangulo(base, altura){
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
  let area = (base * altura)/2 
  return console.log(`El area del triangulo es: ${area}`);
  }
  
areaDelTriangulo(15,3)

console.log("                         ");


console.log("-----------Ejercicio 20----------");
console.log("                         ");


  function deEuroAdolar(euro){
    //Supongamos que 1 euro equivale a 1.20 dólares. 
    //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    let cambio = euro * 1.2
    return console.log(`sus euros equivalen a: ${cambio} dolares`);
  
  }
  deEuroAdolar(120)

console.log("              ");


console.log("-----------Ejercicio 21----------");
console.log("              ");


  function esVocal(letra){
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
      //si ingresa una consonante muestre en pantalla dato incorrecto
    //Escribe tu código aquí
    if (letra.lenght !== 1) {
console.log(`dato incorrecto`);
cadena = true
    }
  
    let vocal = false

    switch (letra.toLowerCase()) {
      case "a":
        case "e":
          case "i":
            case "o":
              case "u":
                vocal = true
        break;
    }

    if (vocal && !cadena) {
      console.log(`La letra ${letra} ingresada es una vocal`);

    } else if (!cadena && !vocal){
      console.log(`La letra ${letra} no es una vocal`);
    }
  }
  
  esVocal("a");
  esVocal("y");
  esVocal("no");

console.log("                  ");

console.log("---------Ejercicio 22------------");
console.log("                  ");


  function obtenerMayor(x, y) {
    // "x" e "y" son números enteros (int).
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
  if (x === y){
    console.log(`El numero entero es ${x}`);
   } else if (x > y){
console.log(`el numero mayor es ${x}`);
    } else {
      (`El numero mayor es ${y}`);
    } 
  }
  
  obtenerMayor(10,10);
  obtenerMayor(12,10);
  obtenerMayor(10,12);

  console.log("                  ");



console.log("---------------------Ejercicio 23-------------");
  console.log("                  ");

  function mayoriaDeEdad(edad) {
    //Determinar si la persona según su edad puede ingresar a un evento.
    //Si tiene 18 años ó más, devolver --> "Allowed"
    //Si es menor, devolver --> "Not allowed"
  let permitir = edad >= 18 ? "Allowed" : "Not allowed"
  return console.log(`Estado: ${permitir}`);

  }
  
  mayoriaDeEdad(20);
  mayoriaDeEdad(16);

  console.log("                  ");

console.log("--------------Ejercicio 24------------");
console.log("                  ");

  function conection(status) {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.
    switch(status){
      case 1 :
        status = "Online"
        break;
          case 2 :
            status = "away"
              break;
              default:
                status = "Offline"
                break;

    }
    return console.log(`Estado: ${status}`);
  }
  
conection(1);
conection(2);
conection(4);


console.log("             ");


console.log("---------------Ejercicio 25----------");
console.log("             ");


  function saludo(idioma) {
    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "Ni Hao!"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
    // Tu código:

    let saludo;
    switch (idioma.toLowerCase) {
   case "Aleman" :
    saludo = "Guten tag!"
     break;
     case "Mandarin" :
     saludo = "ni hao!"
     break;
     case "Ingles" :
     saludo = "Hello"
     break;
     default:
     saludo = "Hola!"
     break;
    }
  return console.log(`${saludo}`);
  }
  
saludo("Aleman");
saludo("Mandarin");
saludo("Ingles");
saludo("Italiano");


console.log("                      ");


console.log("----------------Ejercicio 26------------------");
console.log("                      ");


  function colors(color) {
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuleve --> "This is blue"
    //En caso que el color recibido sea "red", devuleve --> "This is red"
    //En caso que el color recibido sea "green", devuleve --> "This is green"
    //En caso que el color recibido sea "orange", devuleve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.

    let descripcion;
    switch (color.toLowerCase()) {
      case "blue" :
      descripcion = "This is blue"
      break;
      case "red" :
      descripcion = "This is red"
      break;
      case "green":
        descripcion = "this is green"
        case "orange" :
          descripcion = "This is orange"
          break;
          default:
            descripcion = "Color not found"

    }
  return console.log(`${descripcion}`);
  }

  colors("blue");
  colors("red");
  colors("orange");
  colors("yellow");

 
  console.log("                  ");


  console.log("---------Ejercicio 27-----------");
  console.log("                  ");
  
  function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    let comparacion = (numero === 10 || numero === 5)
    return console.log(`El numero ${numero} es 10 o 5? ${comparacion}`);
  }

esDiezOCinco(10)
esDiezOCinco(5)
esDiezOCinco(3)

console.log("                  ");



console.log("---------Ejercicio 28-----------");
console.log("                  ");

  function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    let comparacion = (numero > 20 && numero < 50)
    return console.log(`El numero ${numero} esta entre 20 y 50? ${comparacion}`);
    
    }
    estaEnRango(25)
    estaEnRango(55)
    estaEnRango(15)
  
  console.log("                ");


  console.log("------------Ejercicio 29--------");
  console.log("                ");

  function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    let operacion;
    if (numero % 3 === 0 && numero % 5 === 0){
      operacion= "fizzbuzz"
} else if (numero % 3 === 0){
operacion = "flizz"
} else if (numero % 5 === 0){
  operacion = "buzz"
} else {
  operacion = numero
}
return console.log(`${operacion}`)
  }

  fizzBuzz(6)
  fizzBuzz(10)
  fizzBuzz(15)
  fizzBuzz(1)

console.log("                ");


  console.log("------------Ejercicio 30--------");
  console.log("                ");


  function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  let resultado;
  if (num1 === 0 || num2 === 0 || num3 === 0){
    return console.log("error");
}
if (num1 > num2 && num1 > num3 && num1 >0){
  return console.log("numero 1 es mayor y positivo");
}
if (num1 < 0 || num2 < 0 || num3 <0){
  return ("hay negativos")
}
if (num3 > num1 && num3 >num2){
  resultado = num3 + 1
  return console.log(`${resultado}`);
  }
return console.log(false);
}
operadoresLogicos(0,0,0)
operadoresLogicos(12,6,10)
operadoresLogicos(2,3,-4)
operadoresLogicos(5,6,12)
operadoresLogicos(4,8,6)
  
  console.log("                ");


  console.log("------------Ejercicio 31--------");
  console.log("                ");

  function esVerdadero(valor) {
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí
    let confirmar = valor === true ? "Soy verdadero" : "Soy falso"
    return  console.log(`${confirmar}`)
  }
  esVerdadero(true)
esVerdadero(false)

console.log("                ");


console.log("------------Ejercicio 32--------");
console.log("                ");

  function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
let i = 8

do {
  numero += 5
  i -= 1
  } while (i > 0)

  return console.log(`El valor final es: $${numero}`)
  }

  doWhile(5)

console.log("                ");

console.log("------------Ejercicio 33------------")
console.log("                ");

  function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   
  
    switch (numeroDeDia) {
      case 1 :
        case 7 : 
        return console.log("es fin de semana");
        break;
       case 2 :
        case 3 :
          case 4 :
            case 5 :
              case 6 :
                return console.log("es dia laboral");
                break;
    }
    

  }
    diaDeLaSemana(7)
    diaDeLaSemana(3)
    diaDeLaSemana(8)

console.log("             ");

console.log("---------Ejercicio 34--------")
console.log("             ");

  
  function nuevoUsuario(nombre, email, password) {
    // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
    let usuario = {
      nombre : nombre,
      email : email,
        password : password
    };
    
    let resultado = Object.values(usuario)
    return console.log(`${resultado}  `);
  }
  nuevoUsuario("Luisa", "lfdc2112gmail.com", 1234)


  console.log("              ");

  console.log("-----------Ejercicio 35--------");
  console.log("              ");


  let usuario1= {email: "lfdc2112@gmail.com"}
  function tieneEmail(usuario) {
    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contratio, devuelve "false"
    // Tu código:
let condicion = (usuario.email !== undefined) 
return console.log(`${condicion}`) 
  }
tieneEmail(usuario1)
tieneEmail("jsbakjb")
console.log("                    ");


console.log("--------Ejercicio 36-------------")
console.log("                    ");

let usuario2 = {nombre: "Luisa" , password : 1234 }  
  function verificarPassword(usuario, password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
  let condicion = (usuario,password === password)
  return console.log(`${condicion}`)
  }
  
  verificarPassword(usuario2, 1234)
  verificarPassword(usuario2, 3456)

  
