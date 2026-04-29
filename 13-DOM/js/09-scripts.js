//Eliminar elementos desde el DOM

//Existen dos formar de eliminar elementos una es que lo elimines por si mismo "remove"
/* const primerEnlace = document.querySelector('a');

primerEnlace.remove();
console.log(primerEnlace); */

//La segunda forma consiste en que el padre lo elimine teniendo una referencia
const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children);//Listamos los elementos para saber en que posicion esta

navegacion.removeChild( navegacion.children[2] );//primero accedemos a la raiz del elemento y despues pasamos el id del elelmto y con eso la primera parte lo elimina
