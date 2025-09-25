const carrito  =[
    {nombre: 'Monitor 15 pulgadas ', precio: 150},
    {nombre: 'Monitor 33 pulgadas ', precio: 250},
    {nombre: 'Monitor 55 pulgadas ', precio: 350},
    {nombre: 'Monitor 70 pulgadas ', precio: 450},
    {nombre: 'Monitor 80 pulgadas ', precio: 650},
    {nombre: 'Monitor 90 pulgadas ', precio: 750},
]
//La ventaja de iterar en objetos de esta forma es que como creamos una funcion con un parametro pordemos
//nombar al parametro como nostros queramos 
carrito.forEach( function( producto){
    console.log(`${producto.nombre}- Presio: ${producto.precio}`);
});
//La diferencia entre "map" y "forEach" en cuanto a estructura y sintaxis es practicamente lo mismo
//Pero la direfencia radica en que enque el "map" crea un nuevo arreglo y el foreEach no lo 
// crea el trabajo sobre el mismo
carrito.map( function( producto){
    console.log(`${producto.nombre}- Presio: ${producto.precio}`);
});

// El primer forEach no me ca adevolver nada me regresa indefinido pero el segundo me regresara el arrglo
const nuevoArreglo = carrito.forEach( function( producto){
    return`${producto.nombre}- Presio: ${producto.precio}`;
});
//Esto sirve cuanod nesecitamos crear nuevos metodos apartir de los datos con un diferinciador en especifico
const nuevoArreglo2 =carrito.map( function( producto){
    return`${producto.nombre}- Presio: ${producto.precio}`;
});
console.log(nuevoArreglo);
console.log(nuevoArreglo2);