// Mas sobre el Spread Operator


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Esta forma no modifica el arreglo original y esto tiene que ver ocn la programacion funcional

const meses2 = [...meses,'Agosto'];

console.log(meses2);

// como utilizar el spread operator en un arreglo con objetos

const producto ={nombre: 'Disco Duro' , precio:300};
//Nose puede utilizar un Spread operator con un opjeto
const carrito2 = [ ...carrito, producto];
console.log(carrito2);

