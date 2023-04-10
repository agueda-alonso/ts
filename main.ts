import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

const Domicilio01Valeria = new Direccion(
  "Calle Maestro Arrieta",
  1,
  2,
  "B",
  12006,
  "Castellón de la Plana",
  "Castellón"
)

const Domicilio02Valeria = new Direccion(
  "Calle Obispo",
  3,
  2,
  "C",
  12005,
  "Castellón de la Plana",
  "Castellón"
)

const mailValeria = new Mail(
  "personal",
  "valeria@gmail.com"
)

const telefonoFijoValeria = new Telefono(
  "fijo",
  964552233
)

const telefonoMovilValeria = new Telefono(
  "movil",
  672890979
)

const datosValeria = new Persona(
  'Valeria',
  'Márquez García',
  23,
  '25012548V',
  new Date(2000, 8, 15),
  'azul',
  'mujer',
  [Domicilio01Valeria, Domicilio02Valeria],
  [mailValeria],
  [telefonoFijoValeria, telefonoMovilValeria],
  "El domicilio habitual es el 01"
);

const Domicilio01Luis = new Direccion(
  "Calle Buendía",
  12,
  1,
  "A",
  50005,
  "Almassora",
  "Castellón"
)

const Domicilio02Luis = new Direccion(
  "Calle Canti",
  88,
  3,
  "C",
  12001,
  "Vila-real",
  "Castellón"
)

const mailPersonalLuis = new Mail(
  "personal",
  "luis@hotmail.com"
)

const mailTrabajoLuis = new Mail(
  "personal",
  "luis@empresa.com"
)

const telefonoFijoLuis = new Telefono(
  "fijo",
  964558877
)

const telefonoMovilLuisPersonal = new Telefono(
  "movil",
  633251489
)

const datosLuis = new Persona(
  'Luis',
  'María Fernández',
  25,
  '15245789M',
  new Date(1998, 11, 11),
  'verde',
  'hombre',
  [Domicilio01Luis, Domicilio02Luis],
  [mailPersonalLuis, mailTrabajoLuis],
  [telefonoFijoLuis, telefonoMovilLuisPersonal],
  "Vive en el domicilio 02"
);

const Domicilio01Silvia = new Direccion(
  "Calle Duquesa Vanesa",
  33,
  5,
  "A",
  12005,
  "Castellón de la Plana",
  "Castellón"
)

const Domicilio02Silvia = new Direccion(
  "Calle Avefría",
  15,
  1,
  "B",
  12008,
  "Castellón de la Plana",
  "Castellón"
)

const mailPersonalSilvia = new Mail(
  "personal",
  "Silvia@gmail.com"
)

const mailTrabajoSilvia = new Mail(
  "trabajo",
  "silvia@trabaja.com"
)

const telefonoFijoSilvia = new Telefono(
  "fijo",
  964552233
)

const telefonoMovilSilvia = new Telefono(
  "movil",
  666951753
)

const datosSilvia = new Persona(
  'Silvia',
  'Alonso Rodríguez',
  34,
  '52147896C',
  new Date(1988, 5, 25),
  'rosa',
  'mujer',
  [Domicilio01Silvia, Domicilio02Silvia],
  [mailPersonalSilvia, mailTrabajoSilvia],
  [telefonoFijoSilvia, telefonoMovilSilvia],
  "Vive en el domicilio 01"
);

console.log("Contactos antes del cambio:");
console.log(datosValeria);
console.log(datosLuis);
console.log(datosSilvia);

const agenda: Array<Persona> = new Array(datosValeria, datosLuis, datosSilvia);

const dniABuscar: string = "52147896C";

const personaAEditar: Persona = agenda.find(persona => persona.dni === dniABuscar) as Persona;

const nuevaDireccion = new Direccion(
  "Calle en Medio",
  6,
  4,
  "B",
  12005,
  "Vinaròs",
  "Castellón"
)

const nuevoMail = new Mail(
  "personal",
  "hola@webmail .org"
)

const nuevoTelefono = new Telefono(
  "móvil",
  652349857
)

personaAEditar.agregarNuevaDireccion(nuevaDireccion);
personaAEditar.agregarNuevoMail(nuevoMail);
personaAEditar.agregarNuevoTelefono(nuevoTelefono);

console.log("Contactos después del cambio:");
console.log(datosValeria);
console.log(datosLuis);
console.log(datosSilvia);
