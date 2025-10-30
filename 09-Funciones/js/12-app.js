const carrito  =[
    {nombre: 'Monitor 15 pulgadas ', precio: 150},
    {nombre: 'Monitor 33 pulgadas ', precio: 250},
    {nombre: 'Monitor 55 pulgadas ', precio: 350},
    {nombre: 'Monitor 70 pulgadas ', precio: 450},
    {nombre: 'Monitor 80 pulgadas ', precio: 650},
    {nombre: 'Monitor 90 pulgadas ', precio: 750},
]
//Esto sirve cuando nesecitamos crear nuevos metodos apartir de los datos con un diferinciador en especifico

const nuevoArreglo =carrito.map( producto => `${producto.nombre}- Presio: ${producto.precio}`);

// El primer forEach no me ca adevolver nada me regresa indefinido pero el segundo me regresara el arrglo
const nuevoArreglo2 = carrito.forEach(producto => console.log(`hola ${producto.nombre}- Presio: ${producto.precio}`));

console.log(nuevoArreglo);
console.log(nuevoArreglo2);