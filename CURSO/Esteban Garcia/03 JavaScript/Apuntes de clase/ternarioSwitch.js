//if ternario

let edad = 18;
let mayor = edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad';
console.log(mayor);

let clima = 'lluvioso';
let dia = 'lunes';
//clima = 'soleado';
let irATrabajar = clima == 'lluvioso' && dia == 'lunes' ? 'No quiero ir a trabajar' : 'Voy a ir a trabajar';
console.log(irATrabajar);

//switch
let semaforo = 'amarillo';
switch (semaforo) {
    case 'verde':
        console.log('Puede pasar');
        break;
    case 'amarillo':
        console.log('Precaucion');
        break;
    case 'rojo':
        console.log('No puede pasar');
        break;
    default:
        console.log('No funciona el semaforo');
        break;
}

