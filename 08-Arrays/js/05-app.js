//Añadir nuevos elementos
//const meses = ['Enero', 'Febrero', 'Marzo' ];
//La desventaja principal con esta manera de hagregar valores al arreglo
//es que si no conoses se complica esa parte
//meses[3] = 'Abril';

//Metodos de arreglos
//Agregar al final del arrglo estolo logramos con push de esta forma aun que no conoscamos la posicon
//simpre se agregara al final del arrglo
//meses.push('Abril');
//meses.push('Mayo');

//console.table(meses); 
//Ejercisio agregar a carrito

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
//.push agrega al final delarreglo
carrito.push(producto2);
//.push agrega al final delarreglo
carrito.push(producto);

const producto3 = {
     nombre: 'Teclado',
     precio:  50
}

//podemos que el ultimo elemento que registremos sea el primero en aparecer en la lista
//utilizando el metodo unshift que empuja la lista de registro tomando el lugar del primier 
// y empujando la lista acia abajo
carrito.unshift(producto3)


console.table(carrito);