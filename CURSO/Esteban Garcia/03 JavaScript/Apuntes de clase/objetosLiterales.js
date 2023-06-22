//tiene propiedades y metodos
//un metodo es una funcion dentro de un objeto

let persona = {
    nombre: 'Esteban',
    apellido: 'Garcia',
    edad: 22,
    esMayorDeEdad: true,
    
    saludar: function () {
        return 'Hola, mi nombre es ' + this.nombre + ' ' + this.apellido;
    }
};

console.log(persona.nombre, persona.apellido);
console.log(persona.saludar());


//construcciones de objetos
function Celular (marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}

//instanciar un objeto
let celular = new Celular('Xiaomi', 'Redmi Note 10');
console.log(celular);