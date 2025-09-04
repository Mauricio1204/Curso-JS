//Habilitamos el modo estricto
"use strict"

const producto ={
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
//Al sellar un opjeto a diferencia de Frears lo que hace SEAL es que no se pueden elimnar o agregar mas propiedades
//pero si se pueden editar las existetes
Object.seal(producto);
//La prinsipal diferencia en entre Frears y Sal es que Frears bloquea completamente el objeto "no puedes modificar nada"
//y Seal solo te deja editar los valores de las propiedades del objeto
console.log(producto);
//De igual forma si quisieramos saber si un objeto esta sellado lo hacemos de la siguiente manera simpre pasando 
//el objeto a evaluar
console.log(Object.isSealed(producto));