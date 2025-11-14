//Ejemplo de arrglo digamos tradicional.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
//Ejemplo de arreglo de opjetos.
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//si queremos conoser el indice de un "ForEach" seria de la siguiente forma

meses.forEach( (mes, i) => {
    //De esta forma podemos ver los indises de cada uno
    //console.log(i);
    //console.log(mes);  
//pero si queremos ver el indice de una palabra en especifico seria asi
if (mes === 'Mayo'){
    console.log(`Encontrado en el idice ${i}`);
}
});
// para pasarlo a un array method existe uno llamado findIndex 
//si le masamos un valor que no exista dara como resultado un -1
//eso quiere deicir que no lo encontro
const indice = meses.findIndex( mes => mes === 'Enera' ); 
//console.log(indice);
//asiCnamos el valor al -1 que nos debuelve la comprovación anterios
if (indice >= 0) {
 console.log(`Encontrado posicion ${indice}`);    
}else{
    console.log('No encontrado'); 
}
//Ejercico intenta comprobar algunode los valores del arreglo de objetos
const indice2 = carrito.findIndex( producto => producto.precio === 100);
console.log(indice2);

