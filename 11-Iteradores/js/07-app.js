//Ejemplo de arrglo digamos tradicional.
const pendientes = [ 'Tarea','Comer','Proyecto','Estudiar JavaScrip' ];

//Ejemplo de arreglo de opjetos.
const carrito = [
    {nombre: 'Monitor 15 pulgadas ', precio: 150},
    {nombre: 'Monitor 33 pulgadas ', precio: 250},
    {nombre: 'Monitor 55 pulgadas ', precio: 350},
    {nombre: 'Monitor 70 pulgadas ', precio: 450},
    {nombre: 'Monitor 80 pulgadas ', precio: 650},
    {nombre: 'Monitor 90 pulgadas ', precio: 750},
];

//Veremos una version de un for un poco mas simplificada
//Una vez mas que no haya mas elemebos se termina automaticamente
for( let pendiente of pendientes){
    console.log(pendiente);
}
 
//Tambien podemos recorrer un arreglo
//Creamos un variable llamada producto con la que podemos acceder a las propiedades del objetos
for (let producto of carrito) {
    console.log(producto.nombre);
}