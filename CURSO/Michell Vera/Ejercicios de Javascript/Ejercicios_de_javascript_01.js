const nuevoString = "practica";
const nuevoNum = 8;  
const nuevoBool = true;
const nuevaResta = 10 - 5;
const nuevaMultipicacion = 10 * 4; 
const nuevoModulo = 21 % 5

/////////Ejercicio 1

const PrecioDelProducto = 40

console.log(PrecioDelProducto)

const resultado = (PrecioDelProducto*21)/100

console.log(resultado+PrecioDelProducto)

/////// segundo 2

const ladosDelCuadrado = 40

const area = (ladosDelCuadrado*ladosDelCuadrado)

const Perimetro = (ladosDelCuadrado+ladosDelCuadrado+ladosDelCuadrado+ladosDelCuadrado)

console.log("El area es:" + area)

console.log("El perimetro es:" + Perimetro)

///// Tercer 3

var nombre = prompt("Escribe tu nombre")
console.log("Hola: " + nombre)

/// Ejercicio 4

const numeroDeLaPersona1 = parseInt(prompt("Ingresa un numero")) 

const numeroDeLapersona2 = parseInt(prompt("Ingresa un numero"))

const numeroDeLaPersona3 = parseInt(prompt("Ingresa un numero"))

const ResultadoDelCalculo = (numeroDeLaPersona1+numeroDeLapersona2+numeroDeLaPersona3)/3

console.log("resultado el valor medio de los tres" , ResultadoDelCalculo)

//// Ejercicio 5

const NumeroDeLitros = prompt("Señor usuario indique el numero de litros consumidos")

const NumeroDekilómetros = prompt("Señor usuario indique el numero de Kilometros rrecorridos")

const hasConsumido = NumeroDekilómetros/NumeroDeLitros;

const textoIndicativo = "El numero de litros consumido por kilometros es :"

console.log(textoIndicativo+hasConsumido);

/////Ejercicio 6

const horas = prompt("Indicar las horas")

const minutos = prompt("Indicar los minutos")

const totalDeSegundos = ((horas*60*60)+(minutos*60))
 
console.log(totalDeSegundos)

////Ejercicio 7

 const cantidadDeComensalaes = prompt("Escribe la cantidad de comensales") 

const kiloDePapaPorPersona = 0.2

const cantidadDeHuevos = 1

const gramosDeCebollaPorPersona = 60

console.log("La cantidad de kilos de papas que se necesita por persona son: ", kiloDePapaPorPersona*cantidadDeComensalaes)
console.log("La cantidad de huevos que se necesita por persona son: ", cantidadDeHuevos*cantidadDeComensalaes)
console.log("La cantidad de gramos de cebolla que se necesita por persona son: ", gramosDeCebollaPorPersona*cantidadDeComensalaes)

/////Ejercicio 8 

const numeroDelUsuario = prompt("Escribe un numero")

function paraSaberSiEsPar(numeroDelUsuario) {

    return numeroDelUsuario%2==0
    
}

console.log("¿El numero ingresado es par?", paraSaberSiEsPar(numeroDelUsuario));

////Ejercicio 9

let calificacionDelAlumno = {
    nombre: "Camila",
    ingles: 8,
    programacion: 5,
    html: 10,
    mostrarPromedioDeMaterias: function() {
        let promedioDeNotas = (this.ingles + this.programacion + this.html)/3;
        return "El alumno se llama " + this.nombre + " y su promedio es: " + promedioDeNotas;
    }

}

function CalificacionesDelAlumno (nombre, ingles, programacion, html){
    this.nombre = nombre;
    this.ingles = ingles;
    this.programacion = programacion;
    this.html = html;
    this.mostrarPromedioDeMaterias = function() {
        let promedioDeNotas = (this.ingles + this.programacion + this.html)/3;
        return "El alumno se llama " + this.nombre + " y su promedio es: " + promedioDeNotas;
    }
};

    let nuevaCalificacion = new CalificacionesDelAlumno("camila", 8, 5, 10);










