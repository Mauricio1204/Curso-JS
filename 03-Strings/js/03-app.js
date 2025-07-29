//Metodos para concatenar Strigs y templates de los mismos
const producto = 'Monitor 20 pulgadas ';
const precio = '30 USD '
//Cuando nesecitamos unir 2 variables podemos acerlo con concat y el nombre de la batiable o concatener un estrig directamente
//Tambien podemos concatenar con un sibolo de más " + " en medio de las 2 variables 
//Esto solo aplica en strig 
console.log(producto.concat(precio));
console.log(producto.concat('En descuento '));
console.log(producto + 'Con un precio de ' + precio);
console.log("El producto " + producto + "tiene un precio de " + precio);
//se puede sustituir el signo de mas por una coma y el funsionamiento es el mismo
console.log("El producto " , producto , "tiene un precio de " , precio);
//En la version de Emacrips 6cambio al forma de concatenar que se conose como temple de strings o them play literal
//esta se utilizan los backticks la catacteristica principal es que las vatiables se agregan 
//dentro de la misma cadena de texto sigiendo una sintaxis 
console.log(`El producto ${producto} tiene un precio de $ ${precio}`);

