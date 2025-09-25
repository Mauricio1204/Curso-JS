const carrito = [];
//Definir producto 
const producto = {
    nombre : 'Monitor de 32 Pulgadas',
    precio: 400
}

const producto2 = {
     nombre: 'Celular',
     precio:  800
}
 const producto4 = {
     nombre: 'Celular 2',
     precio:  100
}
//La forma imperativa va a modificar el objeto actual y declarativa crea una copia modifica sobre esa misma
//.push agrega al final delarreglo
carrito.push(producto2);
//.push agrega al final delarreglo
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
     nombre: 'Teclado',
     precio:  50
}

carrito.unshift(producto3)
console.table(carrito);
// // Eliminar el ultimo registro de un arreglo..
// //Para esto utilizamos el metodo pop de los arreglo este eliminal ultimo registro
// carrito.pop();

// console.table(carrito);
// //Eliminar del inicio del arreglo
// // parecido al metodo de agregar con este eliminamos el primer regristro
// carrito.shift();
// console.table(carrito);

//Elimanr de las medias "eliminar cualquier elemento"
//para essto utilizaremos el metodo del arreglo Splice que utiliza dos parametros para funcionar
//el primer parametro es el indice donde queremos 
// que empise a cortar y el segundo es cuantos elementos quieres eliminar una ves llegado ese indice 
carrito.splice(1,1);
console.table(carrito);