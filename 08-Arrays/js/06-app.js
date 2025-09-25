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


const producto3 = {
     nombre: 'Teclado',
     precio:  50
}
// En las nuevas verciones se dieron diferentes formas de hacer lo mismo ,"Formas declarativas", "Formas imperativas" 
//La forma imperativa fue la clase 5 esa forma trabaja sobre la misma variable la sobre escrive 
//La forma Declariva es un paradigma que expresa la logica sin describir tanto el flujo de control

let resultado;
 resultado = [...carrito ,producto];
 resultado = [producto2,...resultado ];
 resultado = [...resultado ,producto3];
 
//Esta forma esta más relacionada con la programacion funcional
//Basicamente lo que hace es en la primera va toma una copia del carrito y agrega el produto
//despues toma el producto2 y le ensima el resultado anterior y por ultimo toma primero el resultado y depues 
//le claba el producto3, podemos manupular el orden de los registros si cambiamos primero la variable y despues lo que queremos agregar
//o primero lo que queremos agregar y depues lo que ya teniamos almacenado previo


console.table(resultado); 