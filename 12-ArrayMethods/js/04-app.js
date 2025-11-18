//Filter
//este metodo nos permite hacer varias operaciones sobre los arreglos.

//Ejemplo de arreglo de opjetos.
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];
//Una caracteristica de filter es que te crea un numero arroglo
//con la condicion que tu le establescas
let resultado
//Ejercicio trae todos los productos meyores a 400
 resultado = carrito.filter( producto => producto.precio > 400 );
//Ejercicio tra todos los productos menores a 600
resultado = carrito.filter( producto => producto.precio < 600 );
//Ejercisio elimina los productos que sean audifinos 
resultado = carrito.filter( producto => producto.nombre !== "Audifonos" );
console.log(resultado);

