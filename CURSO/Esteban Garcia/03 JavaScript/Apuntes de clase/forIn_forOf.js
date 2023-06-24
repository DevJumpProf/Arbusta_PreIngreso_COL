//for in

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25
}

for (const propiedad in persona) {
    console.log(persona[propiedad]);
}

//for of
let animales = ['perro', 'gato', 'loro', 'gallina'];

for (const animal of animales) {
    console.log(animal);
}

