//Se le llama escapar comillas cuando nesecitas representarlas en pantalla esto se logra con una diagonal
//Pudiendo imprimer las comillas en ves de una palabra o cualqer otro signo que la sustitulla
const producto = "Monitor 20\"";
//En la segunda forma de imprimir valores no es nesesario escapar las 
//comillas ya que al impimir con comillas simples no intenta terminar el comando antes de timepo
const producto2 = 'Monitor de 20 "';

//Esto es lo que se conose como crear un opgeto de tipo string 
const producto3 = new String ("Monitor de 27 pulgadas");

console.log(producto);
console.log(producto2);
console.log(producto3)