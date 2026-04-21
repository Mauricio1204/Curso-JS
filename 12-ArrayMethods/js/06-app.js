// Enesta seccion veremos un arrymetod que es un poco extraño
//porque para que todos los elemtos de arreglo tienen que cumplir con la condision 
// para que debuelba un true

    const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//podemos decir que esta es la version del "AND"

const resultado = carrito.every( producto => producto.precio < 1000);

console.log(resultado);

//si quisieramos que al menos uno cumpla la condision
//tenemos el .some que lo vimos en el video 1  y recordando seria de la siguiente forma


//podemos decir que esta es la version del "OR"
const resultado2 = carrito.some( producto => producto.precio < 1000);

console.log(resultado2);