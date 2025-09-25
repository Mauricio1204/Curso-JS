const carrito  =[
    {nombre: 'Monitor 15 pulgadas ', precio: 150},
    {nombre: 'Monitor 33 pulgadas ', precio: 250},
    {nombre: 'Monitor 55 pulgadas ', precio: 350},
    {nombre: 'Monitor 70 pulgadas ', precio: 450},
    {nombre: 'Monitor 80 pulgadas ', precio: 650},
    {nombre: 'Monitor 90 pulgadas ', precio: 750},
]
//Esta una forma de iterar en un arreglo con objetos y no esta mal pero existen maneras más sencillas
for(let i=0 ; i < carrito.length; i++){
    console.log(`${carrito[i].nombre}- Presio: ${carrito[i].precio}`);
}
//La ventaja de iterar en objetos de esta forma es que como creamos una funcion con un parametro pordemos
//nombar al parametro como nostros queramos 
carrito.forEach( function( producto){
    console.log(`${producto.nombre}- Presio: ${producto.precio}`);
});
