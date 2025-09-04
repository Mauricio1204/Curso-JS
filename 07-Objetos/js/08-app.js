//al igual que los numeros tienen metodos los objetos tambien lo tienen ejemplo son los sigueintes
//si quisieramos hacer inmutable un objeto es decir que no puedan modificarse sus propiedades tendremos que habilitar el modo estricto
//Basicamente para lo que funciona use stric es para que no se permitan malas practicas en 
//el documento que este ejecutando
"use strict"; 
//Una vez habilitada este metodo tendremos acceso a todos los metodos de los objetos


const producto ={
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
//Congela el objeto
Object.freeze(producto);

//producto.disponible =false;
//producto.imagen = "imgen.jpg"

console.log(producto);

//Si quisieramos saver siun objeto esta restrtingido o congelado lo hacemosd e la siguiente forma
console.log(Object.isFrozen(producto));


//Si abilitamos el modo estricto la siguient eseccion de codigo no nos permitiria ejecutarla ya que
//X no esta declarada 
//x = 20;
//console.log(x);