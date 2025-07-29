//Metodos Reemplasar partes de una cadena de texto 
const producto = 'Monitor 20 Pulgadas';
//Para poder reemplasar utilizaremos el metodo replace en la primer parentesis el balor que buscata para remmplasar y en el segundo el valor que remmplasara
console.log(producto.replace('Pulgadas','"'));
console.log(producto.replace('Monitor','Monitor curbo'));
//Para poder cortar la cadena del texto utilizaremos el meodo slice y le pasaremos el la posicion inicial y la final 
// donde quiero empesar a cortar u donde queoro terminar
console.log(producto.slice(0,10));
//Podemos uyilizar una alternativa llamada substring el compartamiento es el mismo 
// pero la diferencia es que si le pasas un numero mayor al final lo modifica
//es decir que si pasamos como parametros producto.substring(2,1) el lo modificara a producto.substring(1,2)
console.log(producto.substring(1,2));
console.log(producto.substring(2,1));
//Podemos logar esta parte con el metodo charAt este metodo solo ingresas la posicion de la letra que quieras cortar
const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));

