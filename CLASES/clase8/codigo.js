// ejemplo
/* let num1 = 40
let num2= 20

function suma (num1,num2) {
   return (num1+num2)
}
console.log(suma(3,5))

console.log(num1); */

// ejemplo de arrow function

/* const saludo = nombre=>{console.log(`hola ${nombre}`)};saludo ("Agostina"); */

//
/* FUNCIONES / CONDICIONALES  */

/* 01-Crea una función que tenga dos argumentos: num1, num2, y que deuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos. 
 */

/* ayuda:
Llamo a la función como sumar(3,5) deberá devolver 8. */

//solucion
/* const suma = (num1,num2)=> (num1+num2);console.log(suma(3,5))
 */

/*  function suma (num1,num2) {
    alert(num1+num2)
 }
 suma(Number(prompt("primer numero")),Number(prompt("segundo numero"))) */

/*     const sumar = (num1, num2)=>{
        if ((typeof num1 !== "number" || typeof num2 !== "number" )) return "incorrecto tenes que ingresar un numero"
        return num1+num2
    }
    console.log(sumar(10,"20"));

let num1 = 20
console.log(typeof num1); */

/* 02-Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */

/* ayuda:Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */

//solucion:

/* function esPar (num) {
    if (num%2===0){
        return "es par"
    }else{
        return "es impar"
    }
}
console.log(esPar(4)) */

//con inf ternario
/* function esPar (num) {
return num%2===0?"es par" : "es impar"
}
console.log(esPar(4)) */

// if ternario y funcion flecha
/* const esPar = num => num%2===0?"es par" : "es impar";console.log(esPar(5)) */


/* 03-Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento. */

/* ayuda: Si ejecuto o llamo a la función con esMultiplo(40,4) debe devolver true porque 40 es divisible por 4. */

//solucion

const esMultiplo = (num1,num2)=>typeof num1 !== "number" || typeof num2 !== "number" ?  "incorrecto tenes que ingresar un numero":num1%num2===0  ? "es multiplo": "no es multiplo";console.log(esMultiplo(22,7));

/* 04-Escribe una función que recibe como argumento un precio y el porcentaje de impuestos. La función devolverá el valor total a pagar, teniendo en cuenta que al precio se le descuenta un porcentaje del 10% si es mayor de 1000 pesos. */

/* ayuda:Si he comprado por valor de 2000 pesos con un impuesto del 5%, me descuentan un 10% por tanto pago 1800 pesos  más los impuestos que son el 5% de 1800. En total 1890 pesos. */

//solucion
/* 
const calcularPrecioYDescuento= (precio,impuesto)=>{
    if(precio>1000){
        let precioConDescuento = (precio*90)/100; 
        let precioConImpuesto = (precioConDescuento*impuesto)/100
        return precioConDescuento + precioConImpuesto
    }else{
return precio + (precio*impuesto)/100;
    }
}
console.log(calcularPrecioYDescuento(1000,5));


 */


/* 05-En esta función se trata de convertir notas a calificaciones literales de manera que menos de 5 es suspenso, un 5 es aprobado, el 6 es bien, el 7 y el 8 son notable, el 9 es sobresaliente y el 10 es matrícula. */
/* Utilizar switch */

/* ayuda:Por ejemplo si pido miCalificacion(5) la función me dirá tu calificación es Aprobado */
const miCalificacion = nota =>{
const posiblesNotas={
    suspenso:4,
    aprobado:5,
    bien:6,
    notable:[7,8],
    sobresaliente:9,
    matricula:10
};
if ((typeof nota !== "number" )) return "incorrecto tenes que ingresar un numero"

switch (nota) {
    case posiblesNotas.matricula:
        return "Matricula"
        case posiblesNotas.sobresaliente:
            return "Sobresaliente"
            case posiblesNotas.notable[0]:
                return "notable"
                case posiblesNotas.notable[1]:
                    return "notable"
                    case posiblesNotas.bien:
                        return "bien"
                        case posiblesNotas.aprobado:
                            return "aprobado"
                            case posiblesNotas.suspenso:
                                return "suspenso"
                        
    default:
        return "Ingrese nota entre 1 y 10"
}
}
console.log(miCalificacion(5));






/* 06-Escribe una función que devuelva el siglo al que correponde un año que se la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200.... */

/* ayuda:Por ejemplo si le pido siglo(1910) me dirá siglo 20 */

//solucion

/* 07-crear Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo */

/* ayuda: Si num es 2 debe decir que num es positivo */

//solucion:

/* 08 -En este ejemplo la persona entrará dos números. Debe devvolver la diferencia entre el mayor y el menor */

/* ayuda: Si  la persona elige entre el 5 y el 8, el programa devolverá 3 (8 - 5) */

//solucion

/* 09-Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7. */

/* ayuda: Para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable */

 //solucion:

/* 10- Considera estás desarrollando un script donde trabajas con tipos de motor (suponemos que se trata del tipo de motor de una bomba para mover fluidos). Crea una función denominada dimeTipoMotor() donde pidas el tipo de motor al usuario (indicando que los valores posibles son 1, 2, 3, 4) y a través de un condicional switch hagas lo siguiente:

a) Si el tipo de motor es 0, mostrar un mensaje indicando “No hay establecido un valor definido para el tipo de bomba”.

b) Si el tipo de motor es 1, mostrar un mensaje indicando “La bomba es una bomba de agua”.

c) Si el tipo de motor es 2, mostrar un mensaje indicando “La bomba es una bomba de gasolina”.

d) Si el tipo de motor es 3, mostrar un mensaje indicando “La bomba es una bomba de hormigón”.

e) Si el tipo de motor es 4,mostrar un mensaje indicando “La bomba es una bomba de pasta alimenticia”.

f) Si no se cumple ninguno de los valores anteriores mostrar el mensaje “No existe un valor válido para tipo de bomba”. */

/* ayuda: utlizar switch */

// solucion

