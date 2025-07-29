//Metodos de sitrings para eliminar espacios al final y incio del mismo

const producto = '                      Monitor 20 pulgadas         ';
//contamos el numero de espacios para ver el cambio
console.log(producto.length)
//Eliminar espacios del inicio esto se logra utilizando el metodo trimStart es importante colocar los parentesis 
console.log(producto.trimStart());
//Eliminar espacios del inicio esto se logra utilizando el metodo trimEnd es importante colocar los parentesis al final de metodo 
console.log(producto.trimEnd());
//Podemos encadenar metpodos para porder utiliar las caacteristicasde hambos en una misma linea de codigo a esto se le conose como Channing 
console.log(producto.trimStart().trimEnd());
//antes de esto se utilizaba solo se usaba trim este metodo elimina los espacios en ambas direcciones
console.log(producto.trim());